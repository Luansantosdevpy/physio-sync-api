import { injectable } from 'tsyringe';
import Logger from '../../log/logger';
import PhysioModel from '../../../domain/models/Physioterapist';
import PhysioterapistRepositoryInterface from '../../../domain/interfaces/repositories/physioterapistRepositoryInterface';
import IPhysio from '../../../domain/interfaces/modelInterfaces/physioterapistInterface';

@injectable()
export default class PhysioterapistRepository implements PhysioterapistRepositoryInterface {
  public save = async (newPhysio: Partial<IPhysio>): Promise<IPhysio> => {
    Logger.debug(
      `PhysioterapistRepository - create - execute [newPhysio: ${newPhysio}]`
    );
    const physio = await PhysioModel.create({
      ...newPhysio,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return physio;
  };

  public findAll = async (): Promise<IPhysio[]> => {
    Logger.debug('PhysioterapistRepository - findAll - execute');
    return await PhysioModel.find().sort({ name: 1 });
  };

  public delete = async (id: string): Promise<void> => {
    Logger.debug(`PhysioterapistRepository - delete - execute [id: ${id}]`);
    await PhysioModel.deleteOne({ _id: id });
  };

  public update = async (
    id: string,
    updatedPhysio: Partial<IPhysio>
  ): Promise<void> => {
    Logger.debug(
      `PhysioterapistRepository - update - execute [id: ${id} | updatedPhysio: ${updatedPhysio}]`
    );
    await PhysioModel.updateOne(
      { _id: id },
      {
        ...updatedPhysio,
        updatedAt: new Date(),
      }
    );
  };

  public findById = async (id: string): Promise<IPhysio | null> => {
    Logger.debug(`PhysioterapistRepository - findById - execute [id: ${id}]`);
    return await PhysioModel.findById({ _id: id }).exec();
  };
}
