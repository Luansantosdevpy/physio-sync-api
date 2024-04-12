import { inject, injectable } from 'tsyringe';
import Logger from '../../infrastructure/log/logger';
import ISchedule from '../../domain/interfaces/modelInterfaces/calendarInterface';
import ScheduleRepositoryInterface from '../../domain/interfaces/repositories/scheduleRepositoryInterface';

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

  public findById = async (id: string): Promise<ISchedule | null> => {
    Logger.debug('ScheduleService - findById - call scheduleRepository.findById');
    return this.scheduleRepository.findById(id);
  };
}

export default ScheduleService;
