import { ServiceZone } from "./service-zone.entity";

export class GeoZone {
  id: string;
  type: string;
  countryCode: string;
  serviceZone: ServiceZone;
  provinceCode?: string;
  city?: string;
  postalExpression?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}
