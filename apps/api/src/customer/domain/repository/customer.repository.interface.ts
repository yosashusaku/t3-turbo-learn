import { Customer } from '../entity/customer.entity';

export interface CustomerRepository {
  findById(id: string): Promise<Customer | null>;
  findByEmail(email: string): Promise<Customer | null>;
  create(customer: Customer): Promise<void>;
  update(customer: Customer): Promise<void>;
  delete(id: string): Promise<void>;
}
