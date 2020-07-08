import produce from 'immer';

import {
  SettingsState,
  SettingsActionTypes,
  SETTING_ALERT_SOUND,
  SETTING_ALERT_VOLUME,
  SETTING_CHECK_INTERVAL,
  SETTING_DESKTOP_NOTIFICATIONS,
  SETTING_PUSHOVER_USER,
  SETTING_PUSHOVER_APP,
} from './types';

const initialState: SettingsState = {
  alert_sound: 'voice',
  alert_volume: 100,
  check_interval: 60,
  desktop_notifications: true,
  pushover_user: null,
  pushover_app: null,
};

export function settingsReducer(state = initialState, action: SettingsActionTypes) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case SETTING_ALERT_SOUND:
        draftState.alert_sound = action.payload;
        break;
      case SETTING_ALERT_VOLUME:
        draftState.alert_volume = action.payload;
        break;
      case SETTING_CHECK_INTERVAL:
        draftState.check_interval = action.payload;
        break;
      case SETTING_DESKTOP_NOTIFICATIONS:
        draftState.desktop_notifications = action.payload;
        break;
      case SETTING_PUSHOVER_USER:
        draftState.pushover_user = action.payload;
        break;
      case SETTING_PUSHOVER_APP:
        draftState.pushover_app = action.payload;
        break;
    }
  });
}
