export interface IReservationTable {
  active: boolean;
  id: string;
  name: string;
  num_guests: number;
  number: number;
  position: any;
  type: string;
}

export interface IReservation {
  id?: number;
  table?: IReservationTable;
  deposit?: number;
  client: {
    name: string;
    phone: string;
    comment: string;
  };
  num_guests: number;
  date_created?: string;
  date_start: string;
  date_end?: string;
  duration?: {
    date_start: string;
    date_end: string;
    value: string;
  };
  table_id: number;
  table_number?: string | number;
  paid?: boolean;
  status?: 'ACTIVE' | 'PENDING' | 'CANCELED';
}

export interface IReservationTime {
  title: string;
  value: number;
  disabled?: boolean;
}
