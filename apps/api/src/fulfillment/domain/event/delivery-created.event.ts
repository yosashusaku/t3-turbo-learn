import { IEvent } from "@nestjs/cqrs";

export class DeliveryCreatedEvent implements IEvent {
  constructor(
    public readonly fulfillmentId: string,
  ) {}
}
