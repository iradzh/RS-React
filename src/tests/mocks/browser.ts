import { rest,setupServer } from 'msw/node';

const worker = setupServer(
  ...rest.get('/api/people', (req, res, ctx) => {
    return res(ctx.json({}));
  })
);

worker.start();
