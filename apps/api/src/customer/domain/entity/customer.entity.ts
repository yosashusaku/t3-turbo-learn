import { Address } from './address.entity';
import { CustomerGroup } from './customer-group.entity';

export class Customer {
  id: string;
  hasAccount: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  metadata?: JSON;
  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;

  // リレーション
  groups?: CustomerGroup[];
  addresses?: Address[];

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
  getMetadata(): JSON {
    return this.metadata;
  }

  // メタデータを設定するメソッド
  setMetadata(json: JSON): void {
    this.metadata = json
  }
} 
