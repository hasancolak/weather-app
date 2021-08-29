/**
 *(Function) that returns the converted value from fahrenheit to celsius
 */
export const toCelcius = (num: number): number => {
  return Math.round(num - 273.15);
};
