import { injectable } from 'tsyringe';
import Logger from '../../log/logger';
import SubcategoryRepositoryInterface from '../../../domain/interfaces/repositories/subcategoryRepositoryInterface';
import ISubcategory from '../../../domain/interfaces/modelInterfaces/subcategoryInterface';
import Subcategory from '../../../domain/models/Subcategory';

@injectable()
export default class SubcategoryRepository implements SubcategoryRepositoryInterface {
  public save = async (newCategory: Partial<ISubcategory>): Promise<ISubcategory> => {
    Logger.debug(
      `SubcategoryRepository - create - execute [newCategory: ${newCategory}]`
    );
    const category = await Subcategory.create({
      ...newCategory,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return category;
  };

  public findByName = async (name: string): Promise<ISubcategory | null> => {
    Logger.debug(`SubcategoryRepository - findByName - name: ${name}`);
    return await Subcategory.findOne({ category_name: name });
  };

  public findAll = async (): Promise<ISubcategory[]> => {
    Logger.debug('SubcategoryRepository - findAll - execute');
    return await Subcategory.find().sort({ category_name: 1 });
  };

  public delete = async (id: string): Promise<void> => {
    Logger.debug(`SubcategoryRepository - delete - execute [id: ${id}]`);
    await Subcategory.deleteOne({ _id: id });
  };

  public update = async (
    id: string,
    updatedCategory: Partial<ISubcategory>
  ): Promise<void> => {
    Logger.debug(
      `SubcategoryRepository - update - execute [id: ${id} | updatedCategory: ${updatedCategory}]`
    );
    await Subcategory.updateOne(
      { _id: id },
      {
        ...updatedCategory,
        updatedAt: new Date(),
      }
    );
  };

  public findById = async (id: string): Promise<ISubcategory | null> => {
    Logger.debug(`SubcategoryRepository - findById - execute [id: ${id}]`);
    return await Subcategory.findById({ _id: id }).exec();
  };
}
