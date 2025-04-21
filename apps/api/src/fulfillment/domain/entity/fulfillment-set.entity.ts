import { ServiceZone } from "./service-zone.entity";

export class FulfillmentSet {
    id: string;
    name: string;
    type: string;
    serviceZones: ServiceZone[];
    metadata?: Record<string, unknown>;
    createdAt: Date;
    updatedAt: Date;
}
