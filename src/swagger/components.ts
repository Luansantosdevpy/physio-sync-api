import healthcheckSchemas from './healthcheck/healthcheckSchemas';
import healthCheckExamples from './healthcheck/healthCheckExamples';

export default {
  components: {
    schemas: {
      ...healthcheckSchemas
    },
    examples: {
      ...healthCheckExamples
    }
  }
};
