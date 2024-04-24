import { Router } from 'express';
import { container } from 'tsyringe';
import ClientController from '../../controllers/clientController';

export default async (): Promise<Router> => {
  const router = Router();
  const clientController = container.resolve(ClientController);

  router.post(
    '/create',
    clientController.create
  );

  router.get('/', clientController.findAll);
  router.get(
    '/:id',
    clientController.findById
  );

  router.put(
    '/:id',
    clientController.update
  );

  router.delete(
    '/:id',
    clientController.delete
  );

  return router;
};
