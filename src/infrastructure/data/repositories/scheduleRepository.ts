import { injectable } from 'tsyringe';
import Logger from '../../log/logger';
import ScheduleModel from '../../../domain/models/Schedule';
import ScheduleRepositoryInterface from '../../../domain/interfaces/repositories/scheduleRepositoryInterface';
import ISchedule from '../../../domain/interfaces/modelInterfaces/scheduleInterface';

@injectable()
export default class ScheduleRepository implements ScheduleRepositoryInterface {
  public save = async (newSchedule: Partial<ISchedule>): Promise<ISchedule> => {
    Logger.debug(
      `ScheduleRepository - create - execute [newSchedule: ${newSchedule}]`
    );
    const schedule = await ScheduleModel.create({
      ...newSchedule,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return schedule;
  };

  public findByName = async (name: string): Promise<ISchedule | null> => {
    Logger.debug(`ScheduleRepository - findByName - name: ${name}`);
    return await ScheduleModel.findOne({ name });
  };

  public findAll = async (): Promise<ISchedule[]> => {
    Logger.debug('ScheduleRepository - findAll - execute');
    return await ScheduleModel.find().sort({ name: 1 });
  };

  public delete = async (id: string): Promise<void> => {
    Logger.debug(`ScheduleRepository - delete - execute [id: ${id}]`);
    await ScheduleModel.deleteOne({ _id: id });
  };

  public update = async (
    id: string,
    updatedSchedule: Partial<ISchedule>
  ): Promise<void> => {
    Logger.debug(
      `ScheduleRepository - update - execute [id: ${id} | updatedSchedule: ${updatedSchedule}]`
    );
    await ScheduleModel.updateOne(
      { _id: id },
      {
        ...updatedSchedule,
        updatedAt: new Date(),
      }
    );
  };

  public findById = async (id: string): Promise<ISchedule | null> => {
    Logger.debug(`ScheduleRepository - findById - execute [id: ${id}]`);
    return await ScheduleModel.findById({ _id: id }).exec();
  };
}
