'use strict';

const tbody = document.querySelector('.tbody');

let kitchenProducts = [
  {
    type: 'grater',
    price: 10,
  },
  {
    type: 'pastry-bag',
    price: 25,
  },
  {
    type: 'scale',
    price: 5,
  },
  {
    type: 'whisk',
    price: 15,
  },
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000],
  },
  {
    type: 'laptop',
    price: [50, 1500],
  },
  {
    type: 'smartphone',
    price: [80, 2000],
  },
  {
    type: 'tablet',
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100,
  },
  {
    type: 'eyeshadow',
    price: 50,
  },
  {
    type: 'lipstick',
    price: 80,
  },
  {
    type: 'nail-polish',
    price: 200,
  },
  {
    type: 'perfume',
    price: 300,
  },
];

class Product {
  constructor(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
  }

  render = function () {
    const imgSrc = `images/${this.category}/${this.type}.svg`;
    const html = `
      <tr>
      <td><img src="${imgSrc}" width="50" height="50"></td>
      <td>${this.type}</td>
      <td>${this.price} USD</td>
      </tr>`;
    return html;
  };
}

function renderProducts(products) {
  for (const product of products) {
    const row = document.createElement('tr');
    row.innerHTML = product.render();
    tbody.appendChild(row);
  }
}

const productsKitchen = kitchenProducts.map(
  (product) => new Product('kitchen', product.type, product.price),
);
const productsDevices = devicesProducts.map(
  (product) => new Product('devices', product.type, product.price),
);
const productsCosmetics = cosmeticsProducts.map(
  (product) => new Product('cosmetics', product.type, product.price),
);

renderProducts(productsKitchen);
renderProducts(productsDevices);
renderProducts(productsCosmetics);
