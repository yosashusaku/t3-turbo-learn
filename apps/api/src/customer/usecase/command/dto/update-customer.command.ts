export class UpdateCustomerCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly address?: string,
  ) {}
} 
