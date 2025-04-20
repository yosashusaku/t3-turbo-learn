import { Address } from './address.entity';
import { CustomerGroup } from './customer-group.entity';
import { Order } from './order.entity';

export class Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  hasAccount: boolean;
  passwordHash?: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;

  // リレーション
  groups?: CustomerGroup[];
  orders?: Order[];
  addresses?: Address[];
  billingAddress?: Address;
  billingAddressId?: string;

  constructor(data: Partial<Customer>) {
    Object.assign(this, data);
  }

  // フルネームを取得するメソッド
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // アカウントを持っているかどうかを確認するメソッド
  hasCustomerAccount(): boolean {
    return this.hasAccount;
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
