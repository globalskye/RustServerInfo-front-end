export interface ShopItem {
  _id: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  rank: number;
  price: number;
  attachments?: ItemAttachments[] | null;
}
export interface ItemAttachments {
  name: string;
  description: string;
  imageUrl: string;
}
