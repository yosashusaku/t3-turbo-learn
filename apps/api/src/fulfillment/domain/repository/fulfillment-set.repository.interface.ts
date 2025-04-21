import { FulfillmentSet } from "../entity/fulfillment-set.entity";

export interface FulfillmentSetRepository {
    createFulfillmentSets(fulfillmentSets: FulfillmentSet[]): Promise<FulfillmentSet[]>;
    deleteFulfillmentSets(ids: string[]): Promise<void>;
    listAndCountFulfillmentSets(): Promise<[FulfillmentSet[], number]>;
    restoreFulfillmentSets(ids: string[]): Promise<void | Record<string, string[]>>;
    retrieveFulfillmentSet(id: string): Promise<FulfillmentSet>;
    softDeleteFulfillmentSets(ids: string[]): Promise<void | Record<string, string[]>>;
    updateFulfillmentSets(ids: string[], fulfillmentSets: FulfillmentSet[]): Promise<FulfillmentSet[]>;
}
