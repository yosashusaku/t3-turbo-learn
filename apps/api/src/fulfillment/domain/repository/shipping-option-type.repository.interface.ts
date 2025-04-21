import { ShippingOptionType } from "../entity/shipping-option-type.entity";

export interface ShippingOptionTypeRepository {
    createShippingOptionTypes(shippingOptionTypes: ShippingOptionType[]): Promise<ShippingOptionType[]>;
    deleteShippingOptionTypes(ids: string[]): Promise<void>;
    listAndCountShippingOptionTypes(): Promise<[ShippingOptionType[], number]>;
    listShippingOptionTypes(): Promise<ShippingOptionType[]>;
    retrieveShippingOptionType(id: string): Promise<ShippingOptionType>;
}
