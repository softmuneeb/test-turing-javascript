/**
 * Task 3
 */
const fs = require("fs");
const path = require("path");
const moment = require("moment");
const { validationErrorMessages } = require("./constants");
const productsList = require('./data/task3/products.json')
/**
 * Add item to a product
 * @param {Number} productId - Product id
 * @param {Object} item - { id: 1010, expiry_date: "2050-03-30T12:57:07.846Z" }
 */
async function addItem(productId, item) {

  const itemId = item.id
  const validatedItemId = Number(itemId);

  if (validatedItemId < 0 || itemId === null || isNaN(validatedItemId) || !Number.isInteger(itemId)) {
    throw new Error(validationErrorMessages.itemIdValidtion);
  }

  const expiryDate = new Date(item.expiry_date);

  if (expiryDate < new Date()) {
    throw new Error(validationErrorMessages.itemExpired);
  }

  const productIndex = productsList.products.findIndex(
    (p) => p.id === productId
  );
  const product = productsList.products[productIndex]

  if (productIndex !== -1) {
    product.items_left = product.items_left+1

    if(product.items.some(i=>i.item_id === item.id)) {
      throw new Error(validationErrorMessages.itemAlreadyExists);
    }

    product.items = [...product.items, {item_id: item.id, expiry_date: item.expiry_date}]
    product.items.sort((a,b)=> a.item_id - b.item_id)
  } else{
    throw new Error(validationErrorMessages.productNotFound);
  }

  return product;
}

/**
 * TIP: Use the following code to test your implementation
 * Use different values for input parameters to test different scenarios
 */
(async () => {
  try {
    const result = await addItem(4, {
      id: 410,
      expiry_date: "2050-03-30T12:57:07.846Z",
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

module.exports = {
  addItem,
};

[].sli