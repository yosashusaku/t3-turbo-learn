import { FulfillmentSet } from "./fulfillment-set.entity";
import { GeoZone } from "./geo-zone.entity";
import { ShippingOption } from "./shipping-option.entity";

export class ServiceZone {
  id: string;
  name: string;
  fulfillmentSet: FulfillmentSet;
  geoZones: GeoZone[];
  shippingOptions: ShippingOption[];
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}
