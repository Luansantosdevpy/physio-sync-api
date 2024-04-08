import { inject, injectable } from 'tsyringe';
import Logger from '../../infrastructure/log/logger';
import ValidationError from '../exceptions/validationError';
import NotFoundError from '../exceptions/notFoundError';
import SubcategoryRepositoryInterface from '../../domain/interfaces/repositories/subcategoryRepositoryInterface';
import ISubcategory from '../../domain/interfaces/modelInterfaces/subcategoryInterface';

@injectable()
class SubcategoryService {
  constructor(
    @inject('SubcategoryRepositoryInterface')
    public readonly subcategoryRepository: SubcategoryRepositoryInterface
  ) {}

  async create(category: ISubcategory): Promise<ISubcategory> {
    Logger.debug('SubcategoryService - create - validate category name');
    const categoryExists = await this.subcategoryRepository.findByName(
      category.subcategory_name
    );

    if (categoryExists) {
      throw new ValidationError(
        `The name '${category.subcategory_name}' is already in use.`
      );
    }

    Logger.debug('SubcategoryService - create - call subcategoryRepository.save');
    return this.subcategoryRepository.save(category);
  }

  public findAll = async (): Promise<ISubcategory[] | null> => {
    Logger.debug('SubcategoryService - findAll - call subcategoryRepository.findAll');
    return this.subcategoryRepository.findAll();
  };

  public update = async (
    id: string,
    updatedCategory: Partial<ISubcategory>
  ): Promise<void> => {
    Logger.debug('SubcategoryService - update - call SubcategoryService.find');
    await this.findById(id);

    Logger.debug('SubcategoryService - update - call subcategoryRepository.update');
    return this.subcategoryRepository.update(id, updatedCategory);
  };

  public findById = async (id: string): Promise<ISubcategory | null> => {
    Logger.debug(
      'SubcategoryService - findById - call subcategoryRepository.findById'
    );
    const category = this.subcategoryRepository.findById(id);
    if (!category) {
      throw new NotFoundError('Not found category with this id');
    }

    return category;
  };

  public delete = async (id: string): Promise<void> => {
    Logger.debug('SubcategoryService - delete - call subcategoryRepository.findById');
    await this.findById(id);

    Logger.debug('SubcategoryService - delete - call subcategoryRepository.delete');
    return this.subcategoryRepository.delete(id);
  };
}

export default SubcategoryService;
