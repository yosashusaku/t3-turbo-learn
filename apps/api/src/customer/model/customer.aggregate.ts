import { AggregateRoot } from "@nestjs/cqrs";

export class CustomerAggregate extends AggregateRoot {
  private id!: string;
  private name!: string;
  private email!: string;
  private address!: string;
  private createdAt!: Date;

  // 再構築用コンストラクタ（プライベート）
  private constructor() {
    super();
  }

  /** 集約の状態を永続化用のプレーンオブジェクトに変換 */
  toEntity(): {
    id: string;
    name: string;
    email: string;
    address: string;
    createdAt: Date;
  } {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      address: this.address,
      createdAt: this.createdAt,
    };
  }
}
