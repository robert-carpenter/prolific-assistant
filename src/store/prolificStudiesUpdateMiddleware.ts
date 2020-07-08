import { browser } from 'webextension-scripts/polyfill';
import { Middleware } from 'redux';

import { centsToGBP } from '../functions/centsToGBP';
import { playAlertSound } from '../functions/playAlertSound';

import { AppState } from '.';
import { PROLIFIC_STUDIES_UPDATE } from './prolific/types';

const seen: ProlificStudy['id'][] = [];

const https = require('https');
const querystring = require('querystring');

export const prolificStudiesUpdateMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === PROLIFIC_STUDIES_UPDATE) {
    const state: AppState = store.getState();
    const studies: ProlificStudy[] = action.payload;

    const newStudies = studies.reduce((acc: ProlificStudy[], study) => {
      if (!seen.includes(study.id)) {
        seen.push(study.id);

        if (state.settings.desktop_notifications) {
          browser.notifications.create(study.id, {
            type: 'list',
            title: study.name,
            message: '',
            iconUrl: 'icon.png',
            items: [
              {
                title: 'Hosted By',
                message: study.researcher.name,
              },
              {
                title: 'Reward',
                message: `${centsToGBP(study.reward)} | Avg. ${centsToGBP(study.average_reward_per_hour)}`,
              },
              {
                title: 'Places',
                message: `${study.total_available_places - study.places_taken}`,
              },
            ],
          });
        }

        const postData = querystring.stringify({
          token: store.getState().settings.pushover_app,
          user: store.getState().settings.pushover_user,
          message: study.name + ' => ' + `${centsToGBP(study.reward)} | Avg. ${centsToGBP(study.average_reward_per_hour)}`,
        });
      
        var post_options = {
          host: 'api.pushover.net',
          path: '/1/messages.json',
          method: 'POST'
      };
      
        const req = https.request(post_options, (res: { statusCode: any; headers: any; on: (arg0: string, arg1: (d: any) => void) => void; }) => {
          console.log('pushover statusCode:', res.statusCode);
        });
        
        req.write(postData);
        req.end();

        return [...acc, study];
      }

      return acc;
    }, []);

    if (newStudies.length) {
      playAlertSound(state);
    }
  }

  return result;
};
