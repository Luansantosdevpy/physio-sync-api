export default interface ISchedule {
    date: string;
    hour: string;
    patient: string;
    physiotherapist: string;
    subcategory: string;
    additionalObservations: string;
    scheduleStatus: boolean;
    createdAt: Date;
    updatedAt: Date;
}