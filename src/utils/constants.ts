/**
 *(Object) that defines the ERROR codes
 */
export const ERROR = {
  401: `It looks like the API did not authorize your request. Please ensure you have a valid API key.`,
  404: `No results found. Check your query again or try searching for a different location.`,
  429: `It looks like you've made too many requests to the server. Please wait a while before trying again.`,
  default: `Server error`,
};
