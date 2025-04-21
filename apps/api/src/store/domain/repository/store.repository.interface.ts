import { Store } from "../entity/store.entity";

export interface StoreRepository {
  findById(id: string): Promise<Store | null>;
  findByDefaultSalesChannelId(id: string): Promise<Store | null>;
  create(store: Store): Promise<void>;
  delete(id: string): Promise<void>;
  listAndCount(): Promise<[Store[], number]>;
  list(): Promise<Store>
  restore(id: string): Promise<void>;
  retrieve(id: string): Promise<Store>;
  softDelete(id: string): Promise<void>;
  update(store: Store): Promise<void>;
  upsert(store: Store): Promise<void>;
}
