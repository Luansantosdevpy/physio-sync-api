import getHealthCheck from './healthcheck/getHealthCheck';

export default {
  paths: {
    '/api': {
      ...getHealthCheck
    }
  }
};
