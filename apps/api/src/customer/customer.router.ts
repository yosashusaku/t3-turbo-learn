import { Inject } from "@nestjs/common";
import { Input, Mutation, Query, Router } from "nestjs-trpc";
import { CommandBus } from "@nestjs/cqrs";
import { CreateCustomerCommand } from "./command/create-customer.command";
import { CreateCustomerInput, createCustomerInputSchema, CreateCustomerOutput, createCustomerOutputSchema } from "./customer.schema";

@Router({ alias: "customer" })
export class CustomerRouter {
    constructor(private readonly cb: CommandBus) {}

    @Mutation({
        input: createCustomerInputSchema,
        output: createCustomerOutputSchema
    })
    async create(
        input: CreateCustomerInput,
    ): Promise<CreateCustomerOutput> {
        return 
    }
}
