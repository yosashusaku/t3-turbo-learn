import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
//import { CreateCustomerHandler } from "./command/crerate-customer.handler";
import { CustomerRouter } from "./customer.router"

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    CustomerRouter,
    //CreateCustomerHandler,
  ],
})
export class CustomerModule {}
