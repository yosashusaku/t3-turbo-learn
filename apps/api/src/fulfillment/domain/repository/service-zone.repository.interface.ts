import { ServiceZone } from "../entity/service-zone.entity";

export interface ServiceZoneRepository {
    createServiceZones(serviceZones: ServiceZone[]): Promise<ServiceZone[]>;
    deleteServiceZones(ids: string[]): Promise<void>;
    listAndCountServiceZones(): Promise<[ServiceZone[], number]>;
    listServiceZones(): Promise<ServiceZone[]>;
    restoreServiceZones(ids: string[]): Promise<void | Record<string, string[]>>;
    retrieveServiceZone(id: string): Promise<ServiceZone>;
    softDeleteServiceZones(ids: string[]): Promise<void | Record<string, string[]>>;
    updateServiceZones(ids: string[], serviceZones: ServiceZone[]): Promise<ServiceZone[]>;
    upsertServiceZones(serviceZones: ServiceZone[]): Promise<ServiceZone[]>;
}
