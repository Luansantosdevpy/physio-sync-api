import ISchedule from '../modelInterfaces/scheduleInterface';

export default interface ScheduleRepositoryInterface {
  save(user: ISchedule): Promise<ISchedule>;
  findByName(name: string): Promise<ISchedule | null>;
  findAll(): Promise<ISchedule[] | null>;
  findById(id: string): Promise<ISchedule | null>;
  delete(id: string): Promise<void>;
  update(id: string, client: Partial<ISchedule>): Promise<void>;
}
