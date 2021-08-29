/**
 *(Function) that returns the Day
 *(Param) datetime
 */
export const getDay = (num: number) => {
  return new Date(num * 1000 - 10800).toLocaleString("en-us", {
    weekday: "long",
  });
};

/**
 *(Function) that returns the Date
 *(Param) datetime
 */
export const getDate = (num: number) => {
  const dt = new Date(num * 1000);

  return (
    dt.getUTCDate() +
    ". " +
    dt.toLocaleDateString("en-us", {
      month: "long",
    })
  );
};

/**
 *(Function) that returns the hour
 *(Param) datetime
 */
export const getHour = (num: number) => {
  const dt = new Date(num * 1000);
  const mn = dt.getUTCMinutes();
  const hr = dt.getUTCHours();

  return (hr < 10 ? `0${hr}` : hr) + ":" + (mn < 10 ? `0${mn}` : mn);
};
