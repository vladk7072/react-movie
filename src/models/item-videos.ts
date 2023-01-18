export interface ItemVideoResponse {
  total: number;
  items: ItemVideo[];
}

export interface ItemVideo {
  url: string;
  name: string;
  site: string;
}