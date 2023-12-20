/**
 * Task 2
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const { validationErrorMessages } = require('./constants');

/**
 * Update expiry date of the item
 * @param {Number} itemId - Item id
 * @param {String} expiryDate - Expiry date in ISO8601 format
 */
async function updateExpiryDateByItemId(itemId, expiryDate, filePath) {
  const validatedItemId = Number(itemId);

  if (
    validatedItemId < 0 ||
    itemId === null ||
    isNaN(validatedItemId) ||
    !Number.isInteger(itemId)
  ) {
    throw new Error(validationErrorMessages.itemIdValidtion);
  }

  const validDatedExpiryDate = new Date(expiryDate);

  if (expiryDate === null || isNaN(validDatedExpiryDate.getTime())) {
    throw new Error(validationErrorMessages.expiryDateValidation);
  }

  let item = {};

  const productList = require(filePath);

  let itemFound = false;
  let productFound = {};

  for (
    let productIndex = 0;
    productIndex < productList.products.length;
    productIndex++
  ) {
    let product = productList.products[productIndex];
    item = product?.items.findIndex(
      (element) => element.item_id === validatedItemId,
    );
    if (item !== -1) {
      itemFound = true;
      productList.products[productIndex].items[item].expiry_date = expiryDate;
      productFound = productList.products[productIndex];
      productFound.items = [productList.products[productIndex].items[item]];
      break;
    } else {
      throw new Error(validationErrorMessages.itemNotFound);
    }
  }

  return productFound;
}

/**
 * TIP: Use the following code to test your implementation.
 * You can change the itemId and expiryDate that is passed to
 * the function to test different use cases/scenarios
 */
// (async () => {
//   try {
//     // const productsPath = path.resolve(__dirname, './data/task1/products.json')
//     // const productFilePath = path.join(__dirname, 'data', 'task1', 'products.json')
//     // const filePath = path.join(__dirname, 'data', 'task2', 'update_item_products.json')
//     // const filePath = path.resolve(__dirname, "./data/task2/update_item_products.json");
//     const product = await updateExpiryDateByItemId(132, '2022-02-01');
//     console.log(JSON.stringify(product, null, 3));
//   } catch (err) {
//     console.error(err);
//   }
// })();

module.exports = {
  updateExpiryDateByItemId,
};
