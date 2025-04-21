import { ShippingOption } from "../entity/shipping-option.entity"; 

export interface ShippingOptionRepository {
    createShippingOptions(shippingOptions: ShippingOption[]): Promise<ShippingOption[]>;
    deleteShippingOptions(ids: string[]): Promise<void>;
    listAndCountShippingOptions(): Promise<[ShippingOption[], number]>;
    listShippingOptions(): Promise<ShippingOption[]>;
    listShippingOptionsForContext(): Promise<ShippingOption[]>;
    restoreShippingOptions(ids: string[]): Promise<void | Record<string, string[]>>;
    retrieveShippingOption(id: string): Promise<ShippingOption>;
    softDeleteShippingOptions(ids: string[]): Promise<void | Record<string, string[]>>;
    updateShippingOptions(ids: string[], shippingOptions: ShippingOption[]): Promise<ShippingOption[]>;
    upsertShippingOptions(shippingOptions: ShippingOption[]): Promise<ShippingOption[]>;
    validateShippingOption(id: string, data: Record<string, unknown>): Promise<boolean>;
    validateShippingOptionsForPriceCalculation(ids: string[]): Promise<boolean[]>;
}
