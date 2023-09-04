export const formatNumber = (number) => {
  console.log(number);
  if (number >= 1000000) {
    // If the number is in the millions or more, format it as M (millions)
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    // If the number is in the thousands, format it as K (thousands)
    return (number / 1000).toFixed(1) + "K";
  } else {
    // If the number is smaller, leave it as is
    return number?.toString();
  }
};
