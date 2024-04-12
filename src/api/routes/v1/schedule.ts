import { Router } from 'express';
import { container } from 'tsyringe';
import ScheduleController from '../../controllers/scheduleController';

export default async (): Promise<Router> => {
  const router = Router();
  const scheduleController = container.resolve(ScheduleController);

  router.post(
    '/create',
    scheduleController.create
  );

  router.get('/', scheduleController.findAll);
  router.get(
    '/:id',
    scheduleController.findById
  );

  return router;
};
