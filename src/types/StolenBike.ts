export interface StolenBike {
  id: number;
  title: string;
  description: string;
  date_stolen?: any | number | bigint; 
  date_reported?: string;
  date?: string;
  stolen_location: string;
  thumb?: string;
}
