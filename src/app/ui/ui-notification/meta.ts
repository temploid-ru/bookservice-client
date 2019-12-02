export type UiNotificationPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'center-center';

export interface UiNotificationHostConfig {
  duration: number;
  position: UiNotificationPosition;
}

export interface UiNotificationItem {
  __id: string;
  params: any;
}
