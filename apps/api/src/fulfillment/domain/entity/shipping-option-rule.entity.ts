import { ShippingOption } from "./shipping-option.entity";

export class ShippingOptionRule {
  id: string;
  attribute: string;
  operator: string;
  shippingOption: ShippingOption;
  value?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}
