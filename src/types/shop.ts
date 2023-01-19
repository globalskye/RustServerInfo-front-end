export interface ShopItem {
    _id: string;
    name: string;
    category: string;
    photoUrl: string;
    description: string;
    price: number;
    attachments?: (ItemAttachments)[] | null;
  }
  export interface ItemAttachments {
    name: string;
    description: string;
    photoUrl: string;
  }