import { Customer } from './customer.entity';

export class Order {
  id: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;

  // リレーション
  customer?: Customer;

  constructor(data: Partial<Order>) {
    Object.assign(this, data);
  }
} 
