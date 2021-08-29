import { ERROR } from "./constants";
/**
 *(Function) that returns response json
 *(Param) url
 */
export default async function Fetcher(url: string): Promise<string> {
  const res = await fetch(url);

  if (!res.ok) {
    const error = handleError(res.status);
    throw error;
  }

  return res.json();
}

/**
 *(Function) that returns error
 *(Param) errorCode
 */
const handleError = (errorCode: number) => {
  let error;
  switch (errorCode) {
    case 401:
      error = ERROR[401];
      break;
    case 404:
      error = ERROR[404];
      break;
    case 429:
      error = ERROR[429];
      break;
    default:
      error = ERROR.default;
      break;
  }
  return new Error(error);
};
