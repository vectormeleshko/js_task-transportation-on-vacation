/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // const SHORT_TERM = ;
  const BASIC_PRICE = 40;
  const PRICE = BASIC_PRICE * days;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  if (days >= LONG_TERM) {
    result = PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM && days < 7) {
    return PRICE - 20;
  }
    return PRICE;
}

module.exports = calculateRentalCost;
