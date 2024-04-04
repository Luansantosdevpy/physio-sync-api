import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../../../swagger/swaggerDocs';

export default async (): Promise<Router> => {
  const router = Router();

  router.use('/doc', swaggerUi.serve);
  router.get('/doc', swaggerUi.setup(swaggerDocs));

  return router;
};
