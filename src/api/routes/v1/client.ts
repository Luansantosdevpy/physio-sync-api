import { Router } from 'express';
import { container } from 'tsyringe';
import * as validations from '../../../application/validations/clientControllerRequestValidations';
import ClientController from '../../controllers/clientController';
import { verificarToken } from '../../../application/middlewares/tokenMiddleware';

export default async (): Promise<Router> => {
  const router = Router();
  const clientController = container.resolve(ClientController);

  router.post(
    '/create',
    validations.createClienteRequestValidation,
    verificarToken,
    clientController.create
  );

  router.get('/', verificarToken, clientController.findAll);
  router.get(
    '/:id',
    validations.findClientRequestValidations,
    verificarToken,
    clientController.findById
  );

  router.put(
    '/:id',
    validations.updateClientRequestValidations,
    verificarToken,
    clientController.update
  );

  router.delete(
    '/:id',
    validations.deleteClientRequestValidations,
    verificarToken,
    clientController.delete
  );

  return router;
};
