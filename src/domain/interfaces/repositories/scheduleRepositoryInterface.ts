import ISchedule from '../modelInterfaces/calendarInterface';

export default interface ScheduleRepositoryInterface {
  save(user: ISchedule): Promise<ISchedule>;
  findAll(): Promise<ISchedule[] | null>;
  findById(id: string): Promise<ISchedule | null>;
}
