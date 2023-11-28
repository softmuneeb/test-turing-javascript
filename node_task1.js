/**
 * Task 1
 */
const fs = require('fs')
const path = require('path')
const { validationErrorMessages } = require('./constants')
/**
 * Get Product info and its reviews
 * @param {Number} productId - Product id
 */

async function getProductInformationByProductId(productId) {
  if (!Number.isInteger(productId) || productId <= 0) {
    throw new Error(validationErrorMessages.productIdValidation)
  }

  // try {
  const productFilePath = path.join(__dirname, 'data', 'task1', 'products.json')
  const reviewsFilePath = path.join(__dirname, 'data', 'task1', 'reviews.json')
  const customersFilePath = path.join(__dirname, 'data', 'task1', 'customers.json')
  const imagesFilePath = path.join(__dirname, 'data', 'task1', 'images.json')

  const [productData, reviewsData, customersData, imagesData] = await Promise.all([
    fs.readFileSync(productFilePath, 'utf-8'),
    fs.readFileSync(reviewsFilePath, 'utf-8'),
    fs.readFileSync(customersFilePath, 'utf-8'),
    fs.readFileSync(imagesFilePath, 'utf-8'),
  ])

  const { products } = JSON.parse(productData)
  const { reviews } = JSON.parse(reviewsData)
  const { customers } = JSON.parse(customersData)
  const { images } = JSON.parse(imagesData)
  // log(products)
  const product = products.find(p => p.id === productId)

  if (!product) {
    throw new Error(validationErrorMessages.productNotFound)
  }

  const productReviews = reviews
    .filter(review => review.product_id === productId)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map(review => {
      const customer = customers.find(c => c.id === review.customer_id)
      const { credit_card, ...customerWithoutCreditCard } = customer
      customerWithoutCreditCard.phone_number = Buffer.from('' + customer?.phone_number).toString('base64')

      const reviewImages = images.filter(img => review.images.some(i => i === img.id))

      return {
        ...review,
        customer: customerWithoutCreditCard,
        images: reviewImages,
      }
    })

  return {
    id: product.id,
    name: product.name,
    reviews: productReviews,
  }
  // } catch (error) {
  //   throw new Error('Error fetching product information ' + error?.message);
  // }
}

/**
 * TIP: Use the following code to test your implementation
 */
;(async () => {
  try {
    const productsPath = path.resolve(__dirname, './data/task1/products.json')
    const reviewsPath = path.resolve(__dirname, './data/task1/reviews.json')
    const customersPath = path.resolve(__dirname, './data/task1/customers.json')
    const imagesPath = path.resolve(__dirname, './data/task1/images.json')
    const dataPaths = {
      productsPath,
      reviewsPath,
      customersPath,
      imagesPath,
    }
    const product = await getProductInformationByProductId(1, dataPaths)
    console.log(JSON.stringify(product, null, 3))
  } catch (err) {
    console.error(err)
  }
})()

module.exports = {
  getProductInformationByProductId,
}
