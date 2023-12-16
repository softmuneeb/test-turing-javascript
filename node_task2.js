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

  const readFileAsync = util.promisify(fs.readFile);

  // const data = await readFileAsync(filePath, "utf8");
  let item = {};

  const productList = {
    products: [
      {
        id: 5,
        name: 'Bimbo Salsa sauce',
        is_available: true,
        price: 12,
        total_number_of_items: 5,
        number_of_items_left: 3,
        items: [
          {
            item_id: 132,
            expiry_date: '2050-12-31',
          },
          {
            item_id: 133,
            expiry_date: '2050-12-31',
          },
          {
            item_id: 134,
            expiry_date: '2022-06-23T17:57:44.525Z',
          },
          {
            item_id: 135,
            expiry_date: '2022-12-31',
          },
          {
            item_id: 136,
            expiry_date: '2022-01-01',
          },
        ],
        rating: 4.2,
        brand: 'Bimbo',
        category: 'Condiments',
      },
      {
        id: 6,
        name: 'Cereal bars',
        is_available: true,
        price: 34,
        total_number_of_items: 6,
        number_of_items_left: 5,
        items: [
          {
            item_id: 137,
            expiry_date: '2023-06-10T01:47:07.846Z',
          },
          {
            item_id: 138,
            expiry_date: '2023-05-11T12:23:07.846Z',
          },
          {
            item_id: 139,
            expiry_date: '2023-05-11T12:57:07.846Z',
          },
          {
            item_id: 140,
            expiry_date: '2023-03-22T13:57:07.846Z',
          },
          {
            item_id: 141,
            expiry_date: '2023-05-15T03:57:07.846Z',
          },
          {
            item_id: 142,
            expiry_date: '2022-01-01',
          },
        ],
        rating: 3.6,
        brand: 'Burry',
        category: 'Bakery',
      },
      {
        id: 7,
        name: 'Low fat cottage cheese',
        is_available: true,
        price: 12,
        total_number_of_items: 15,
        number_of_items_left: 12,
        items: [
          {
            item_id: 143,
            expiry_date: '2023-01-07T01:47:07.846Z',
          },
          {
            item_id: 144,
            expiry_date: '2023-01-04T02:09:07.846Z',
          },
          {
            item_id: 145,
            expiry_date: '2022-01-01',
          },
          {
            item_id: 146,
            expiry_date: '2023-12-10T13:23:07.846Z',
          },
          {
            item_id: 147,
            expiry_date: '2022-01-01',
          },
          {
            item_id: 148,
            expiry_date: '2023-12-17T12:57:07.846Z',
          },
          {
            item_id: 149,
            expiry_date: '2023-12-27T10:57:07.846Z',
          },
          {
            item_id: 150,
            expiry_date: '2022-01-01',
          },
          {
            item_id: 151,
            expiry_date: '2023-12-30T12:45:07.846Z',
          },
          {
            item_id: 152,
            expiry_date: '2023-11-29T13:54:07.846Z',
          },
          {
            item_id: 153,
            expiry_date: '2023-12-28T12:09:07.846Z',
          },
          {
            item_id: 154,
            expiry_date: '2023-07-237T12:45:07.846Z',
          },
          {
            item_id: 155,
            expiry_date: '2023-05-07T11:33:07.846Z',
          },
          {
            item_id: 156,
            expiry_date: '2023-04-12T13:27:07.846Z',
          },
          {
            item_id: 157,
            expiry_date: '2023-07-07T12:34:07.846Z',
          },
        ],
        rating: 4,
        brand: 'Angel Delight',
        category: 'Dairy',
      },
      {
        id: 8,
        name: 'Low fat milk',
        is_available: true,
        price: 10,
        total_number_of_items: 5,
        number_of_items_left: 5,
        items: [
          {
            item_id: 158,
            expiry_date: '2022-01-01',
          },
          {
            item_id: 159,
            expiry_date: '2023-03-30T04:17:07.846Z',
          },
          {
            item_id: 160,
            expiry_date: '2022-01-01',
          },
          {
            item_id: 161,
            expiry_date: '2023-03-22T12:23:07.846Z',
          },
          {
            item_id: 162,
            expiry_date: '2022-12-31',
          },
        ],
        rating: 4.78,
        brand: 'Angel Delight',
        category: 'Dairy',
      },
    ],
  };

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
(async () => {
  try {
    // const productsPath = path.resolve(__dirname, './data/task1/products.json')
    // const productFilePath = path.join(__dirname, 'data', 'task1', 'products.json')
    // const filePath = path.join(__dirname, 'data', 'task2', 'update_item_products.json')
    // const filePath = path.resolve(__dirname, "./data/task2/update_item_products.json");
    const product = await updateExpiryDateByItemId(132, '2022-02-01');
    console.log(JSON.stringify(product, null, 3));
  } catch (err) {
    console.error(err);
  }
})();

module.exports = {
  updateExpiryDateByItemId,
};
