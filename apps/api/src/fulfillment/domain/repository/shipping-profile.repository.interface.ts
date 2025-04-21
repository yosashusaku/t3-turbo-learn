import { ShippingProfile } from "../entity/shipping-profile.entity";

export interface ShippingProfileRepository {
    createShippingProfiles(shippingProfiles: ShippingProfile[]): Promise<ShippingProfile[]>;
    deleteShippingProfiles(ids: string[]): Promise<void>;
    listAndCountShippingProfiles(): Promise<[ShippingProfile[], number]>;
    listShippingProfiles(): Promise<ShippingProfile[]>;
    restoreShippingProfiles(ids: string[]): Promise<void | Record<string, string[]>>;
    retrieveShippingProfile(id: string): Promise<ShippingProfile>;
    softDeleteShippingProfiles(ids: string[]): Promise<void | Record<string, string[]>>;
    updateShippingProfiles(ids: string[], shippingProfiles: ShippingProfile[]): Promise<ShippingProfile[]>;
    upsertShippingProfiles(shippingProfiles: ShippingProfile[]): Promise<ShippingProfile[]>;
}
