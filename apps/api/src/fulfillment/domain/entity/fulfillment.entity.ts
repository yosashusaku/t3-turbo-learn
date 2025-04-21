import { FulfillmentItem } from "./fulfillment-item.entity";
import { FulfillmentLabel } from "./fulfillment-label.entity";
import { FulfillmentProvider } from "./fulfillment-provider.entity";
import { ShippingOption } from "./shipping-option.entity";
import { FulfillmentAddress } from "./fulfillment-address.entity";

export class Fulfillment {
  id: string;
  locationId: string;
  requiresShipping: boolean;
  items: FulfillmentItem[];
  labels: FulfillmentLabel[];
  packedAt?: Date;
  shippedAt?: Date;
  markedShippedBy?: string;
  createdBy?: string;
  deliveredAt?: Date;
  canceledAt?: Date;
  data?: Record<string, unknown>;
  provider?: FulfillmentProvider;
  shippingOption?: ShippingOption;
  deliveryAddress?: FulfillmentAddress;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}
