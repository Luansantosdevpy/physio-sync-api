import { Router } from 'express';
import healthCheck from './healthCheck';
import swagger from './swagger';
import category from './category';
import client from './client';
import subcategory from './subcategory';
import schedule from './schedule';

export default async (): Promise<Router> => {
  const router = Router();

  router.use('/api', router);
  router.use('/category', await category());
  router.use('/subcategory', await subcategory());
  router.use('/schedule', await schedule());
  router.use('/client', await client());
  router.use('/', await healthCheck());
  router.use('/', await swagger());

  return router;
};
