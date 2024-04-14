import { Router } from 'express';
import { container } from 'tsyringe';
import ScheduleController from '../../controllers/scheduleController';
import { verificarToken } from '../../../application/middlewares/tokenMiddleware';

export default async (): Promise<Router> => {
  const router = Router();
  const scheduleController = container.resolve(ScheduleController);

  router.post(
    '/create',
    verificarToken,
    scheduleController.create
  );

  router.get('/', verificarToken, scheduleController.findAll);
  router.get(
    '/:id',
    verificarToken,
    scheduleController.findById
  );

  router.put(
    '/:id',
    verificarToken,
    scheduleController.update
  );

  router.delete(
    '/:id',
    verificarToken,
    scheduleController.delete
  );

  return router;
};
