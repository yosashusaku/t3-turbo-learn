import { GeoZone } from "../entity/geo-zone.entity";

export interface GeoZoneRepository {
    createGeoZones(geoZones: GeoZone[]): Promise<GeoZone[]>;
    deleteGeoZones(ids: string[]): Promise<void>;
    listAndCountGeoZones(): Promise<[GeoZone[], number]>;
    listGeoZones(): Promise<GeoZone[]>;
    restoreGeoZones(ids: string[]): Promise<void | Record<string, string[]>>;
    retrieveGeoZone(id: string): Promise<GeoZone>;
    softDeleteGeoZones(ids: string[]): Promise<void | Record<string, string[]>>;
    updateGeoZones(ids: string[], geoZones: GeoZone[]): Promise<GeoZone[]>;
}
