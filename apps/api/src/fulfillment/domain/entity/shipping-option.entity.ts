import { Fulfillment } from "./fuifillment.eneity";
import { ServiceZone } from "./service-zone.entity";
import { ShippingOptionType } from "./shipping-option-type.entity";
import { ShippingOptionRule } from "./shipping-option-rule.entity";
import { ShippingProfile } from "./shipping-profile.entity";
import { FulfillmentProvider } from "./fulfillment-provider.entity";
export class ShippingOption {
  id: string;
  name: string;
  priceType: string;
  serviceZone: ServiceZone;
  type: ShippingOptionType;
  rules: ShippingOptionRule[];
  fulfillments: Fulfillment[];
  data?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  shippingProfile?: ShippingProfile;
  provider?: FulfillmentProvider;
  createdAt: Date;
  updatedAt: Date;
}
