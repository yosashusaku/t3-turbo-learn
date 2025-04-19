import { Customer } from './customer.entity';

export class Address {
  id: string;
  customerId: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  countryCode: string;
  province?: string;
  postalCode: string;
  phone?: string;
  company?: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;

  // リレーション
  customer?: Customer;
  billingFor?: Customer[];

  constructor(data: Partial<Address>) {
    Object.assign(this, data);
  }

  // フルネームを取得するメソッド
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // 完全な住所を取得するメソッド
  get fullAddress(): string {
    let address = this.address1;
    if (this.address2) {
      address += `, ${this.address2}`;
    }
    address += `, ${this.city}`;
    if (this.province) {
      address += `, ${this.province}`;
    }
    address += ` ${this.postalCode}, ${this.countryCode}`;
    return address;
  }

  // メタデータを取得するメソッド
  getMetadata(key: string): unknown {
    return this.metadata?.[key];
  }

  // メタデータを設定するメソッド
  setMetadata(key: string, value: unknown): void {
    if (!this.metadata) {
      this.metadata = {};
    }
    this.metadata[key] = value;
  }
} 
