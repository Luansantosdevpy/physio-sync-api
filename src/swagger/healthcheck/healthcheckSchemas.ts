export default {
  HealthCheckStatus: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      status: {
        type: 'string'
      },
      uptime: {
        type: 'number'
      },
      timestamp: {
        type: 'number'
      },
      checks: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            status: {
              type: 'string'
            }
          }
        }
      }
    }
  }
};
