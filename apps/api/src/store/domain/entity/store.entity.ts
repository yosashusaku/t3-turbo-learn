import { StoreCurrency } from "./store-currency";

export class Store {
  id: string;
  name: string;
  supportedCurrencies: StoreCurrency[];
  defaultSalesChannelId?: string;
  defaultRegionId?: string;
  defaultLocationId?: string;
  metadata?: JSON;
  createdAt: Date;
  updatedAt: Date;
}
