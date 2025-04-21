import { ShippingOption } from "./shipping-option.entity";

export class ShippingProfile {
  id: string;
  name: string;
  type: string;
  shippingOptions: ShippingOption[];
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}
