import { rest } from 'msw';

import * as endpoints from '@/services/endpoints';

import collections from './json/prompts-collections.json';
import recentlyAdded from './json/prompts-recently-added.json';
import trending from './json/prompts-trending.json';

export const handlers = [
  rest.get(endpoints.promptsCollections, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(collections));
  }),
  rest.get(endpoints.promptsRecentlyAdded, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(recentlyAdded));
  }),
  rest.get(endpoints.promptsTrending, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(trending));
  }),
];
