import { setupServer } from 'msw/node';

import { handlers } from './handlers';

export const server = setupServer(...handlers);

export const recordedRequests: InterceptedRequest[] = [];

interface InterceptedRequest {
  method: string;
  url: string;
}

server.events.on('request:start', ({ request }) => {
  window.console.log('MSW intercepted:', request.method, request.url);
  recordedRequests.push({ method: request.method, url: request.url });
});
