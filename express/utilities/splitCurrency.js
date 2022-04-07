module.exports = function splitCurrency(price) {
  const splittedPrice = price.split("$")[1];
  return +splittedPrice;
};
