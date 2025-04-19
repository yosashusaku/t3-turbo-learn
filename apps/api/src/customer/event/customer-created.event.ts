import { IEvent } from "@nestjs/cqrs";
import { nanoid } from "nanoid"

export class CustomerCreatedEvent implements IEvent {
  public readonly payload: {
    id: string;
    name: string;
    email: string;
    address: string;
    createdAt: Date;
  };

  constructor(data: { name: string; email: string; address: string }) {
    this.payload = {
      id: nanoid(),
      name: data.name,
      email: data.email,
      address: data.address,
      createdAt: new Date(),
    };
  }
}
