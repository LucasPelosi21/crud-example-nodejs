module.exports = {
  info: {
    title: 'CRUD API',
    version: '1.0.0',
    description: 'A sample API',
  },
  openapi: '3.0.0',
  servers: [{
    url: 'http://localhost:3000',
  }, ],
  apis: ['src/controllers/*.ts'],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'authorization',
      },
      XApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      },
    },
  },
};
