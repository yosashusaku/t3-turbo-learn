import { FulfillmentProvider } from "../entity/fulfillment-provider.entity";

export interface FulfillmentProviderRepository {
    listFulfillmentProviders(): Promise<FulfillmentProvider[]>;
}
