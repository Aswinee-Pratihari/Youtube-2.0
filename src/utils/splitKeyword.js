export const splitKeyword = (inputString) => {
  const stringArray = inputString?.match(/"[^"]+"|[^"\s]+/g);

  // Remove double quotation marks from each element
  return stringArray?.map((str) => str.replace(/"/g, ""));
};
