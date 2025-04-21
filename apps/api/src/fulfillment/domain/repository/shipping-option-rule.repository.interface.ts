import { ShippingOptionRule } from "../entity/shipping-option-rule.entity";

export interface ShippingOptionRuleRepository {
    createShippingOptionRules(shippingOptionRules: ShippingOptionRule[]): Promise<ShippingOptionRule[]>;
    deleteShippingOptionRules(ids: string[]): Promise<void>;
    listAndCountShippingOptionRules(): Promise<[ShippingOptionRule[], number]>;
    listShippingOptionRules(): Promise<ShippingOptionRule[]>;
    retrieveShippingOptionRule(id: string): Promise<ShippingOptionRule>;
    updateShippingOptionRules(ids: string[], shippingOptionRules: ShippingOptionRule[]): Promise<ShippingOptionRule[]>;
}
