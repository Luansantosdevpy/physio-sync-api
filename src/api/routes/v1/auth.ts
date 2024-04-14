import { Router } from 'express';
import { container } from 'tsyringe';
import CategoryController from '../../controllers/categoryController';
import AuthController from '../../controllers/authController';

export default async (): Promise<Router> => {
  const router = Router();
  const authController = container.resolve(AuthController);

  router.post(
    '/user/create',
    authController.create
  );

  router.post('/login', authController.login);

  return router;
};
