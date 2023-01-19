export interface ResponseVk {
  items?: ItemsEntity[] | null;
}
export interface ItemsEntity {
  id: number;
  owner_id: number;
  date: number;
  text: string;
  imageLink: string;
  videoLink: string;
}
