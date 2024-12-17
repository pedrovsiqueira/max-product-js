/**
 * Function to calculate the maximum product
 * @param {Array} arr - 2D array [[point1, skip1], [point2, skip2], ...]
 * @returns {Number} Maximum product
 */
function maxProduct(sequence) {
  if (!Array.isArray(sequence)) {
    throw new TypeError("Input should be an array.");
  }

  const sequenceCount = sequence.length;
  const dp = new Array(sequenceCount + 1).fill(1);

  for (let index = sequenceCount - 1; index >= 0; index--) {
    const [point, skip] = sequence[index];
    const nextIndex = index + skip + 1;

    const productIfTaken =
      point * (nextIndex < sequenceCount ? dp[nextIndex] : 1);

    dp[index] = Math.max(productIfTaken, dp[index + 1]);
  }

  return dp[0];
}

module.exports = maxProduct;
