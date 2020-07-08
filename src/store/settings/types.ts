export interface SettingsState {
  alert_sound:
    | 'none'
    | 'voice'
    | 'sweet-alert-1'
    | 'sweet-alert-2'
    | 'sweet-alert-3'
    | 'sweet-alert-4'
    | 'sweet-alert-5';
  alert_volume: number;
  check_interval: number;
  desktop_notifications: boolean;
  pushover_user: string;
  pushover_app: string;
}

export const SETTING_ALERT_SOUND = 'SETTING_ALERT_SOUND';
export const SETTING_ALERT_VOLUME = 'SETTING_ALERT_VOLUME';
export const SETTING_CHECK_INTERVAL = 'SETTING_CHECK_INTERVAL';
export const SETTING_DESKTOP_NOTIFICATIONS = 'SETTING_DESKTOP_NOTIFICATIONS';
export const SETTING_PUSHOVER_USER = 'SETTING_PUSHOVER_USER';
export const SETTING_PUSHOVER_APP = 'SETTING_PUSHOVER_APP';

export interface SettingAlertSoundAction {
  type: typeof SETTING_ALERT_SOUND;
  payload: SettingsState['alert_sound'];
}

export interface SettingAlertVolumeAction {
  type: typeof SETTING_ALERT_VOLUME;
  payload: SettingsState['alert_volume'];
}

export interface SettingCheckIntervalAction {
  type: typeof SETTING_CHECK_INTERVAL;
  payload: SettingsState['check_interval'];
}

export interface SettingsDesktopNotificationAction {
  type: typeof SETTING_DESKTOP_NOTIFICATIONS;
  payload: SettingsState['desktop_notifications'];
}

export interface SettingsPushoverUser {
  type: typeof SETTING_PUSHOVER_USER;
  payload: SettingsState['pushover_user'];
}

export interface SettingsPushoverApp {
  type: typeof SETTING_PUSHOVER_APP;
  payload: SettingsState['pushover_app'];
}

export type SettingsActionTypes =
  | SettingAlertSoundAction
  | SettingAlertVolumeAction
  | SettingCheckIntervalAction
  | SettingsDesktopNotificationAction
  | SettingsPushoverUser
  | SettingsPushoverApp;
