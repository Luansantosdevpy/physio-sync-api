import ICardiorespiratoryRecord from '../modelInterfaces/cardioresporatoryRecordInterface';
import INeurologicalData from '../modelInterfaces/neurologicalDataInterface';
import IRespiratoryData from '../modelInterfaces/respiratoryDataInterface';
import IThoraxData from '../modelInterfaces/thoraxDataInterface';

export default interface SubcategoryRepositoryInterface {
  saveCR(cardio: ICardiorespiratoryRecord): Promise<ICardiorespiratoryRecord>;
  saveND(neuro: INeurologicalData): Promise<INeurologicalData>;
  saveRD(respiratory: IRespiratoryData): Promise<IRespiratoryData>;
  saveTD(thorax: IThoraxData): Promise<IThoraxData>;
}
