import { Fulfillment } from "../entity/fulfillment.entity";

export interface FulfillmentRepository {
    cancelFulfillment(id: string): Promise<Fulfillment>;
    createFulfillment(fulfillment: Fulfillment): Promise<Fulfillment>;
    createReturnFulfillment(fulfillment: Fulfillment): Promise<Fulfillment>;
    deleteFulfillment(id: string): Promise<void>;
    listAndCountFulfillments(): Promise<[Fulfillment[], number]>;
    listFulfillments(): Promise<Fulfillment[]>;
    retrieveFulfillment(id: string): Promise<Fulfillment>;
    retrieveFulfillmentOptions(id: string): Promise<Record<string, unknown>[]>
    updateFulfillment(id: string, fulfillment: Fulfillment): Promise<Fulfillment>;
    validateFulfillmentData(id: string, optionData: Record<string, unknown>, data: Record<string, unknown>): Promise<Record<string, unknown>>;
    validateFulfillmentOption(id: string, data: Record<string, unknown>): Promise<boolean>;
}
