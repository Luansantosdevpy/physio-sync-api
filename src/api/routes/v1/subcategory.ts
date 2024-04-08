import { Router } from 'express';
import { container } from 'tsyringe';
import SubcategoryController from '../../controllers/subcategoryController';

export default async (): Promise<Router> => {
  const router = Router();
  const subcategoryController = container.resolve(SubcategoryController);

  router.post(
    '/create',
    subcategoryController.create
  );

  router.get('/', subcategoryController.findAll);
  router.get(
    '/:id',
    subcategoryController.findById
  );

  router.put(
    '/:id',
    subcategoryController.update
  );

  router.delete(
    '/:id',
    subcategoryController.delete
  );

  return router;
};
