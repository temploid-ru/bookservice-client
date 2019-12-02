export interface IRestaurantTable {
  id: string;
  uuid?: string;
  title: string;
  number: number;
  num_persons?: number;
  isActive: boolean;
  gallery: IRestaurantTableGalleryItem[];
  type: RestaurantTableTypeEnum;
  furniture?: {
    sofa3: number,
    sofa2: number,
    sofa1: number
  };
  position: {
    x: number,
    y: number,
    width: number,
    height: number,
    rotate: number
  };
  deposit: number;
  status: RestaurantTableStatusEnum;
  booking_entries?: IRestaurantTableTimeline[];
  _numGuestsEnabled: boolean;
}

export interface IRestaurantTableTimeline {
  id: number;
  date_start: number;
  date_end: number;
  guestsCount?: number;
  status?: string;
}

export enum RestaurantTableStatusEnum {
  BLOCKED = 'blocked',
  ACTIVE = 'selected',
  DEFAULT = 'available'
}

export enum RestaurantTableTypeEnum {
  SQUARE = 'square',
  ROUND = 'round',
  POLYGON = 'polygon'
}

export interface IRestaurantTableGalleryItem {
  src: string;
  height: number;
  width: number;
  isMain?: boolean;
}
