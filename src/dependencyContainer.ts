import { DependencyContainer } from 'tsyringe';
import Logger from './infrastructure/log/logger';
import HealthCheckRepositoryInterface from './domain/interfaces/repositories/healthCheckRepositoryInterface';
import PostgresHealthCheckRepository from './infrastructure/data/repositories/healthCheckRepository';
import HealthCheckService from './application/services/healthCheckService';
import CategoryRepositoryInterface from './domain/interfaces/repositories/categoryRepositoryInterface';
import CategoryRepository from './infrastructure/data/repositories/categoryRepository';
import CategoryService from './application/services/categoryService';
import ClientRepositoryInterface from './domain/interfaces/repositories/clientRepositoryInterface';
import ClientRepository from './infrastructure/data/repositories/clientRepository';
import ClientService from './application/services/clientService';
import SubcategoryRepositoryInterface from './domain/interfaces/repositories/subcategoryRepositoryInterface';
import SubcategoryRepository from './infrastructure/data/repositories/subcategoryRepository';
import SubcategoryService from './application/services/subcategoryService';
import ScheduleRepositoryInterface from './domain/interfaces/repositories/scheduleRepositoryInterface';
import ScheduleRepository from './infrastructure/data/repositories/scheduleRepository';
import ScheduleService from './application/services/scheduleService';
import AuthRepositoryInterface from './domain/interfaces/repositories/authRepositoryInterface';
import AuthRepository from './infrastructure/data/repositories/authRepository';
import AuthService from './application/services/authService';

export default async (container: DependencyContainer): Promise<void> => {
  Logger.debug('Dependency container initializing...');

  container.register<HealthCheckRepositoryInterface>(
    'HealthCheckRepositoryInterface',
    {
      useClass: PostgresHealthCheckRepository
    }
  );

  container.register<HealthCheckService>('HealthCheckService', {
    useClass: HealthCheckService
  });

  container.register<CategoryRepositoryInterface>(
    'CategoryRepositoryInterface',
    {
      useClass: CategoryRepository
    }
  );

  container.register<CategoryService>('CategoryService', {
    useClass: CategoryService
  });

  container.register<ClientRepositoryInterface>(
    'ClientRepositoryInterface',
    {
      useClass: ClientRepository
    }
  );

  container.register<ClientService>('ClientService', {
    useClass: ClientService
  });

  container.register<SubcategoryRepositoryInterface>(
    'SubcategoryRepositoryInterface',
    {
      useClass: SubcategoryRepository
    }
  );

  container.register<SubcategoryService>('SubcategoryService', {
    useClass: SubcategoryService
  });

  container.register<ScheduleRepositoryInterface>(
    'ScheduleRepositoryInterface',
    {
      useClass: ScheduleRepository
    }
  );

  container.register<ScheduleService>('ScheduleService', {
    useClass: ScheduleService
  });

  container.register<AuthRepositoryInterface>(
    'AuthRepositoryInterface',
    {
      useClass: AuthRepository
    }
  );

  container.register<AuthService>('AuthService', {
    useClass: AuthService
  });

  Logger.debug('Dependency container initialized!');
};
