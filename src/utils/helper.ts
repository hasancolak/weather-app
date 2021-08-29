import { IApiList } from "../interface/api.interface";
/**
 *(Function) that returns Max Temperature
 *(Param) url
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getMaxTemp = (data: any) =>
  Math.max(
    ...data.map((x: IApiList) => {
      return x.main.temp;
    })
  );

/**
 *(Function) that returns Min Temperature
 *(Param) url
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getMinTemp = (data: any) =>
  Math.min(
    ...data.map((x: IApiList) => {
      return x.main.temp;
    })
  );
