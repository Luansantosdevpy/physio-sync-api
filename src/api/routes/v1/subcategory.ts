import { Router } from 'express';
import { container } from 'tsyringe';
import SubcategoryController from '../../controllers/subcategoryController';
import { verificarToken } from '../../../application/middlewares/tokenMiddleware';

export default async (): Promise<Router> => {
  const router = Router();
  const subcategoryController = container.resolve(SubcategoryController);

  router.post(
    '/create',
    verificarToken,
    subcategoryController.create
  );

  router.get('/', subcategoryController.findAll);
  router.get(
    '/:id',
    subcategoryController.findById
  );

  router.put(
    '/:id',
    verificarToken,
    subcategoryController.update
  );

  router.delete(
    '/:id',
    verificarToken,
    subcategoryController.delete
  );

  return router;
};
