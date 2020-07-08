import {
  SettingAlertSoundAction,
  SettingAlertVolumeAction,
  SettingCheckIntervalAction,
  SettingsDesktopNotificationAction,
  SettingsPushoverApp,
  SettingsPushoverUser,
  SETTING_ALERT_SOUND,
  SETTING_ALERT_VOLUME,
  SETTING_CHECK_INTERVAL,
  SETTING_DESKTOP_NOTIFICATIONS,
  SETTING_PUSHOVER_APP,
  SETTING_PUSHOVER_USER,
} from './types';

export function settingAlertSound(payload: SettingAlertSoundAction['payload']): SettingAlertSoundAction {
  return {
    type: SETTING_ALERT_SOUND,
    payload,
  };
}

export function settingAlertVolume(payload: SettingAlertVolumeAction['payload']): SettingAlertVolumeAction {
  return {
    type: SETTING_ALERT_VOLUME,
    payload,
  };
}

export function settingCheckInterval(payload: SettingCheckIntervalAction['payload']): SettingCheckIntervalAction {
  return {
    type: SETTING_CHECK_INTERVAL,
    payload,
  };
}

export function settingDesktopNotifications(
  payload: SettingsDesktopNotificationAction['payload'],
): SettingsDesktopNotificationAction {
  return {
    type: SETTING_DESKTOP_NOTIFICATIONS,
    payload,
  };
}

export function settingPushoverUser(
  payload: SettingsPushoverUser['payload'],
): SettingsPushoverUser {
  return {
    type: SETTING_PUSHOVER_USER,
    payload,
  };
}

export function settingPushoverApp(
  payload: SettingsPushoverApp['payload'],
): SettingsPushoverApp {
  return {
    type: SETTING_PUSHOVER_APP,
    payload,
  };
}
