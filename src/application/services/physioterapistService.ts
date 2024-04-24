import { inject, injectable } from 'tsyringe';
import Logger from '../../infrastructure/log/logger';
import PhysioterapistRepositoryInterface from '../../domain/interfaces/repositories/physioterapistRepositoryInterface';
import IPhysio from '../../domain/interfaces/modelInterfaces/physioterapistInterface';

@injectable()
class PhysioterapistService {
  constructor(
    @inject('PhysioterapistRepositoryInterface')
    public readonly physioRepository: PhysioterapistRepositoryInterface
  ) {}

  async create(physio: IPhysio): Promise<IPhysio> {
    Logger.debug('PhysioterapistService - create - call physioRepository.save');
    return this.physioRepository.save(physio);
  }

  public findAll = async (): Promise<IPhysio[] | null> => {
    Logger.debug('PhysioterapistService - findAll - call physioRepository.findAll');
    return this.physioRepository.findAll();
  };

  public update = async (
    id: string,
    updatedPhysio: Partial<IPhysio>
  ): Promise<void> => {
    Logger.debug('PhysioterapistService - update - call PhysioterapistService.find');
    await this.findById(id);

    Logger.debug('PhysioterapistService - update - call physioRepository.update');
    return this.physioRepository.update(id, updatedPhysio);
  };

  public findById = async (id: string): Promise<IPhysio | null> => {
    Logger.debug('PhysioterapistService - findById - call physioRepository.findById');
    return this.physioRepository.findById(id);
  };

  public delete = async (id: string): Promise<void> => {
    Logger.debug('PhysioterapistService - delete - call physioRepository.findById');
    await this.findById(id);

    Logger.debug('PhysioterapistService - delete - call physioRepository.delete');
    return this.physioRepository.delete(id);
  };
}

export default PhysioterapistService;
