import * as endpoints from '../configs/endpoints';

export const getCollections = async (limit: number) => {
  const res = await fetch(endpoints.promptsCollections, {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getRecentlyAdded = async (limit: number) => {
  const res = await fetch(endpoints.promptsRecentlyAdded, {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getTrending = async (limit: number) => {
  const res = await fetch(endpoints.promptsTrending, {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
