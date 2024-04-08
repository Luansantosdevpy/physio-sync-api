import ISubcategory from '../modelInterfaces/subcategoryInterface';

export default interface SubcategoryRepositoryInterface {
  save(user: ISubcategory): Promise<ISubcategory>;
  findByName(name: string): Promise<ISubcategory | null>;
  findAll(): Promise<ISubcategory[] | null>;
  findById(id: string): Promise<ISubcategory | null>;
  delete(id: string): Promise<void>;
  update(id: string, category: Partial<ISubcategory>): Promise<void>;
}
