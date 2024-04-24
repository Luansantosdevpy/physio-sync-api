import IPhysio from '../modelInterfaces/physioterapistInterface';

export default interface PhysioterapistRepositoryInterface {
  save(user: IPhysio): Promise<IPhysio>;
  findAll(): Promise<IPhysio[] | null>;
  findById(id: string): Promise<IPhysio | null>;
  delete(id: string): Promise<void>;
  update(id: string, physio: Partial<IPhysio>): Promise<void>;
}
