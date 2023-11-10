const faker = require('faker');

const products = [];

for (let i = 0; i < 60; i++) {
  const product = {
    productPermalink: faker.commerce.productPermalink(),
    productTitle: faker.commerce.productTitle(),
    productPrice: faker.commerce.productPrice(),
    productDescription: faker.commerce.productDescription(),
    productGtin: faker.commerce.productGtin(),
    productBrand: faker.commerce.productBrand(),
    productPublished: faker.commerce.productPublished(),
    productTags: faker.commerce.productTags(),
    productComment: faker.commerce.productComment(),
    productAddedDate: faker.commerce.productAddedDate(),
    productStock: faker.commerce.productStock(),
    productStockDisable: faker.commerce.productStockDisable(),
    productSubscription: faker.commerce.productSubscription(),
    productImage: faker.commerce.productImage(),
    productImages: faker.commerce.productImages(),
  };

  products.push(product);
}

console.log(products);