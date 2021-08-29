/**
 *(Function) that returns Max Temperature
 *(Param) url
 */
export const getMaxTemp = (data: []) =>
  Math.max.apply(
    Math,
    data.map((x: any) => {
      return x.main.temp;
    })
  );

/**
 *(Function) that returns Min Temperature
 *(Param) url
 */
export const getMinTemp = (data: []) =>
  Math.min.apply(
    Math,
    data.map((x: any) => {
      return x.main.temp;
    })
  );
