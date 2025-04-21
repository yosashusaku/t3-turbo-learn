import { AggregateRoot } from "@nestjs/cqrs";
import { Fulfillment } from "./entity/fulfillment.entity";
import { DeliveryCreatedEvent } from "./event/delivery-created.event";
import { ShipmentCreatedEvent } from "./event/shipment-created.event";

export class FulfillmentAggregate extends AggregateRoot {
  constructor(
    private readonly fulfillment: Fulfillment,
  ) {
    super();
  }

  createDelivery() {
    this.apply(new DeliveryCreatedEvent(this.fulfillment.id));
  }

  createShipment() {
    this.apply(new ShipmentCreatedEvent(this.fulfillment.id));
  }
}
