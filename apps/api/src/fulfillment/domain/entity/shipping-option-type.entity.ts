import { ShippingOption } from "./shipping-option.entity";

export class ShippingOptionType {
  id: string;
  label: string;
  code: string;
  shippingOption: ShippingOption;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
