import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.get('/', async () => {
  return 'Hello world!';
});

app.listen({ port: 3000, host: '0.0.0.0' });
