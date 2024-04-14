import { inject, injectable } from 'tsyringe';
import Logger from '../../infrastructure/log/logger';
import ScheduleRepositoryInterface from '../../domain/interfaces/repositories/scheduleRepositoryInterface';
import ISchedule from '../../domain/interfaces/modelInterfaces/scheduleInterface';

@injectable()
class ScheduleService {
  constructor(
    @inject('ScheduleRepositoryInterface')
    public readonly scheduleRepository: ScheduleRepositoryInterface
  ) {}

  async create(schedule: ISchedule): Promise<ISchedule> {
    Logger.debug('ScheduleService - create - call scheduleRepository.save');
    return this.scheduleRepository.save(schedule);
  }

  public findAll = async (): Promise<ISchedule[] | null> => {
    Logger.debug('ScheduleService - findAll - call scheduleRepository.findAll');
    return this.scheduleRepository.findAll();
  };

  public update = async (
    id: string,
    updatedSchedule: Partial<ISchedule>
  ): Promise<void> => {
    Logger.debug('ScheduleService - update - call ScheduleService.find');
    await this.findById(id);

    Logger.debug('ScheduleService - update - call scheduleRepository.update');
    return this.scheduleRepository.update(id, updatedSchedule);
  };

  public findById = async (id: string): Promise<ISchedule | null> => {
    Logger.debug('ScheduleService - findById - call scheduleRepository.findById');
    return this.scheduleRepository.findById(id);
  };

  public delete = async (id: string): Promise<void> => {
    Logger.debug('ScheduleService - delete - call scheduleRepository.findById');
    await this.findById(id);

    Logger.debug('ScheduleService - delete - call scheduleRepository.delete');
    return this.scheduleRepository.delete(id);
  };
}

export default ScheduleService;
