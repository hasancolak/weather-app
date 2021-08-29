import { getMaxTemp, getMinTemp } from "../../utils/helper";
import { toCelcius } from "../../utils/conversion";
import { getDay, getDate, getHour } from "../../utils/date";

describe("Utils Tets for Max and Min temperature", () => {
  const data: any = [
    { main: { temp: 5 } },
    { main: { temp: 10 } },
    { main: { temp: 15 } },
    { main: { temp: 20 } },
  ];

  it("Should return the max temperature", () => {
    const result = getMaxTemp(data);
    expect(result).toBe(20);
  });

  it("Should return the min temperature", () => {
    const result = getMinTemp(data);
    expect(result).toBe(5);
  });
});

describe("Utils Tets for conversion", () => {
  it("Should convert from fahrenheit to celsius", () => {
    const param: number = 285.15;
    const result = toCelcius(param);
    expect(result).toEqual(12);
  });
});

describe("Utils Tets for Date", () => {
  it("Should retun day passing dateTime value", () => {
    const param: number = 1487246400;
    const result = getDay(param);
    expect(result).toEqual("Thursday");
  });

  it("Should retun date passing dateTime value", () => {
    const param: number = 1487246400;
    const result = getDate(param);
    expect(result).toEqual("16. February");
  });

  it("Should retun hour passing dateTime value", () => {
    const param: number = 1487246400;
    const result = getHour(param);
    expect(result).toEqual("12:00");
  });
});
