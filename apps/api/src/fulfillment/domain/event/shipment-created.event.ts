import { IEvent } from "@nestjs/cqrs";

export class ShipmentCreatedEvent implements IEvent {
  constructor(
    public readonly shipmentId: string,
  ) {}
}
