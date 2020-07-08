import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';

import { selectSettings } from '../store/settings/selectors';
import {
  settingAlertSound,
  settingAlertVolume,
  settingCheckInterval,
  settingDesktopNotifications,
  settingPushoverUser,
  settingPushoverApp,
} from '../store/settings/actions';

export function SettingsPane() {
  const dispatch = useDispatch();
  const settings = useSelector(selectSettings);

  function onChangeAlertSound(event: any) {
    dispatch(settingAlertSound(event.target.value));
  }

  function onChangeAlertVolume(event: any) {
    const value = Number(event.target.value);

    if (0 <= value && value <= 100) {
      dispatch(settingAlertVolume(value));
    }
  }

  function onChangeCheckInterval(event: any) {
    const value = Number(event.target.value);

    if (60 <= value) {
      dispatch(settingCheckInterval(Number(event.target.value)));
    }
  }

  function onChangeDesktopNotification(event: any) {
    dispatch(settingDesktopNotifications(event.target.checked));
  }

  function onChangePushoverUser(event: any) {
    dispatch(settingPushoverUser(event.target.value));
  }

  function onChangePushoverApp(event: any) {
    dispatch(settingPushoverApp(event.target.value));
  }

  return (
    <Tab.Pane className="p-1" eventKey="settings">
      <Form.Group>
        <Form.Label>Check Interval</Form.Label>
        <Form.Control type="number" onChange={onChangeCheckInterval} value={settings.check_interval.toString()} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Alert Sound</Form.Label>
        <Form.Control as="select" onChange={onChangeAlertSound} value={settings.alert_sound}>
          <option value="none">None</option>
          <option value="voice">Voice</option>
          <option value="sweet-alert-1">Sweet Alert 1</option>
          <option value="sweet-alert-2">Sweet Alert 2</option>
          <option value="sweet-alert-3">Sweet Alert 3</option>
          <option value="sweet-alert-4">Sweet Alert 4</option>
          <option value="sweet-alert-5">Sweet Alert 5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Alert Volume</Form.Label>
        <Form.Control type="number" onChange={onChangeAlertVolume} value={settings.alert_volume.toString()} />
      </Form.Group>
      <Form.Group>
        <Form.Check
          label="Desktop Notifications"
          type="checkbox"
          checked={settings.desktop_notifications}
          onChange={onChangeDesktopNotification}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Pushover User</Form.Label>
        <Form.Control
          type="text"
          value={settings.pushover_user}
          onChange={onChangePushoverUser}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Pushover App</Form.Label>
        <Form.Control
          type="text"
          value={settings.pushover_app}
          onChange={onChangePushoverApp}
        />
      </Form.Group>
    </Tab.Pane>
  );
}
