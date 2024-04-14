import { Router } from 'express';
import { container } from 'tsyringe';
import * as validations from '../../../application/validations/categoryControllerRequestValidations';
import CategoryController from '../../controllers/categoryController';
import { verificarToken } from '../../../application/middlewares/tokenMiddleware';

export default async (): Promise<Router> => {
  const router = Router();
  const categoryController = container.resolve(CategoryController);

  router.post(
    '/create',
    validations.createCategoryRequestValidation,
    verificarToken,
    categoryController.create
  );

  router.get('/', categoryController.findAll);
  router.get(
    '/:id',
    validations.findCategoryRequestValidations,
    categoryController.findById
  );

  router.put(
    '/:id',
    validations.updateCategoryRequestValidations,
    verificarToken,
    categoryController.update
  );

  router.delete(
    '/:id',
    validations.deleteCategoryRequestValidations,
    verificarToken,
    categoryController.delete
  );

  return router;
};
