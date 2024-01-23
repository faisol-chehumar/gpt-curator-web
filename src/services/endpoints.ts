const BACKEND_API_PATH = process.env.BACKEND_API_PATH;

const PROMPTS_SERVICE = `${BACKEND_API_PATH}/prompts`;

export const promptsCollections = `${PROMPTS_SERVICE}/collections`;
export const promptsRecentlyAdded = `${PROMPTS_SERVICE}/recently-added`;
export const promptsTrending = `${PROMPTS_SERVICE}/trending`;
