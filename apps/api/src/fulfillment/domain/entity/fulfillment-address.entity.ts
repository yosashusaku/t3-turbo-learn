export class FulfillmentAddress {
  id: string;
  company: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  countryCode: string;
  province: string;
  postalCode: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  metadata: Record<string, unknown> | null;

}
