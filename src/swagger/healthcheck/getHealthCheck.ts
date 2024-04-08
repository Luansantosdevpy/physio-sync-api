export default {
  get: {
    summary: 'Status da API',
    description: 'Retorna as condições e o status desta API',
    tags: ['Health Check'],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/HealthCheckStatus'
            },
            examples: {
              HealthCheck: {
                $ref: '#/components/examples/HealthCheckStatus'
              }
            }
          }
        }
      }
    }
  }
};
