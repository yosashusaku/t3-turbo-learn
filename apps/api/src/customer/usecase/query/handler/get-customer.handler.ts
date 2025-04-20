import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Customer } from "../../../domain/entity/customer.entity";
import { CustomerRepository } from "../../../domain/repository/customer.repository.interface";
import { GetCustomerQuery } from "../dto/get-customer.query";

@QueryHandler(GetCustomerQuery)
export class GetCustomerHandler implements IQueryHandler<GetCustomerQuery> {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(query: GetCustomerQuery): Promise<Customer | null> {
    const { id } = query;
    return this.customerRepository.findById(id);
  }
}
