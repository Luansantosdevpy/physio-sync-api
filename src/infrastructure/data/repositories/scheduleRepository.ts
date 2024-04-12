import { injectable } from 'tsyringe';
import Logger from '../../log/logger';
import ScheduleRepositoryInterface from '../../../domain/interfaces/repositories/scheduleRepositoryInterface';
import ISchedule from '../../../domain/interfaces/modelInterfaces/calendarInterface';
import Scheduling from '../../../domain/models/Calendar';

@injectable()
export default class ScheduleRepository implements ScheduleRepositoryInterface {
  public save = async (newSchedule: Partial<ISchedule>): Promise<ISchedule> => {
    Logger.debug(
      `ScheduleRepository - create - execute [newSchedule: ${newSchedule}]`
    );
    const client = await Scheduling.create({
      ...newSchedule,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return client;
  };

  public findByName = async (name: string): Promise<ISchedule | null> => {
    Logger.debug(`ScheduleRepository - findByName - name: ${name}`);
    return await Scheduling.findOne({ name });
  };

  public findAll = async (): Promise<ISchedule[]> => {
    Logger.debug('ScheduleRepository - findAll - execute');
    return await Scheduling.find().sort({ name: 1 });
  };

  public findById = async (id: string): Promise<ISchedule | null> => {
    Logger.debug(`ScheduleRepository - findById - execute [id: ${id}]`);
    return await Scheduling.findById({ _id: id }).exec();
  };
}
