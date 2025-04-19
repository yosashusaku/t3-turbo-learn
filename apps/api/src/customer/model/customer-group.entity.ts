import { Customer } from './customer.entity';

export class CustomerGroup {
  id: string;
  name: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;

  // リレーション
  customers?: Customer[];

  constructor(data: Partial<CustomerGroup>) {
    Object.assign(this, data);
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
