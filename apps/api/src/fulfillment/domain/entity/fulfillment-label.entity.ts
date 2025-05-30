import { Fulfillment } from "./fulfillment.entity";

export class FulfillmentLabel {
  id: string;
  trackingNumber: string;
  trackingUrl: string;
  labelUrl: string;
  fulfillment: Fulfillment;
  createdAt: Date;
  updatedAt: Date;
}
