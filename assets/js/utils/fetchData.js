// export const exerciseOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "5f6a3c22bemsh2c5aaf6bcc2bd93p19185cjsn7656d715351d",
//     "X-RapidAPI-Host": "musclejp.p.rapidapi.com",
//   },
// };
// export const fetchData = async (url, options) => {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   return data;
// };

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};


