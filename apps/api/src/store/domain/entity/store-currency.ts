import { Store } from "./store.entity";

export class StoreCurrency {
  id: string;
  currencyCode: string;
  isDefault: boolean;
  store?: Store;
  createdAt: Date;
  updatedAt: Date;
}
