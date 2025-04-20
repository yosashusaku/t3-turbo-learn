import { AggregateRoot } from "@nestjs/cqrs";

export class CustomerAggregate extends AggregateRoot {
  private id!: string;
  private name!: string;
  private email!: string;
  private address!: string;
  private createdAt!: Date;
  private firstName!: string;
  private lastName!: string;
  private phone?: string;
  private hasAccount!: boolean;
  private passwordHash?: string;
  private metadata?: Record<string, unknown>;
  private updatedAt!: Date;

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

  // フルネームを取得するメソッド
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // アカウントを持っているかどうかを確認するメソッド
  hasCustomerAccount(): boolean {
    return this.hasAccount;
  }

  // メタデータを取得するメソッド
  getMetadata(key: string): unknown {
    return this.metadata?.[key];
  }

  // メタデータを設定するメソッド
  setMetadata(key: string, value: unknown): void {
    if (!this.metadata) {
      this.metadata = {};
    }
    this.metadata[key] = value;
  }
}
