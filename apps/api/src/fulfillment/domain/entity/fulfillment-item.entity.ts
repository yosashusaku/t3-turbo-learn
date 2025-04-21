import { Fulfillment } from "./fuifillment.eneity";

export class FulfillmentItem {
  id: string;
  title: string;
  sku: string;
  barcode: string;
  quantity: number;
  fulfillment: Fulfillment;
  lineItemId?: string;
  inventoryItemId?: string;
  createdAt: Date;
  updatedAt: Date;
}
