export interface User {
    _id: string;
    username: string;
    balance: number;
    password: string;
    role: string;
    cart?: (CartEntityOrStockEntity)[] | null;
    stock?: (CartEntityOrStockEntity)[] | null;
  }
  export interface CartEntityOrStockEntity {
    item: Item;
    count: number;
  }
  export interface Item {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    attachments?: (AttachmentsEntity)[] | null;
  }
  export interface AttachmentsEntity {
    name: string;
    description: string;
    imageUrl: string;
  }
  