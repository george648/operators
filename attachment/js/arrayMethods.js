// const array = [
//     {label: 'arial', value: 'arial font'},
//     {label: 'arial', value: 'arial font'},
//     {label: 'Georgia', value: 'Georgia font'},
//   ];

// array.forEach(function(item, index, array){
//     console.log(`${item.label} for index ${index} in array ${array}`)
// })

// let result = array.forEach(function(item, index, array){

// })

//   {
    // city: 'Minsk', republic: ' Belarus'
// }


// let userAges = [
//     {name: 'Gosha', age: 24},
//     {name: 'Andy', age:14},
//     {name: 'Pavel', age: 124},
// ];

// let locationUserAdd = userAges.map(function(item) {
//     return {
//         ...item,
//         location: {
//             city: 'Minsk', republic: 'Belarus'
//         }
//     } 
// })

// console.log(locationUserAdd);

'use strict';

const PRODUCT_TYPE = {
  MILK_FOOD: 1,
  FRUIT: 2,
  VEGETABLE: 3,
  CLOTHES: 4,
  BAKERY: 5,
}

const PRODUCT_NAME = {
  [PRODUCT_TYPE.MILK_FOOD]: 'Milk food',
  [PRODUCT_TYPE.FRUIT]: 'Fruits',
  [PRODUCT_TYPE.VEGETABLE]: 'Vegetables',
  [PRODUCT_TYPE.CLOTHES]: 'Clothes',
  [PRODUCT_TYPE.BAKERY]: 'Bakery',
}

const data = [
  {
    name: 'Milk',
    price: 20,
    quantity: 1,
    type: PRODUCT_TYPE.MILK_FOOD,
    id: 1,
  },
  {
    name: 'Apple',
    price: 10,
    quantity: 3,
    type: PRODUCT_TYPE.FRUIT,
    id: 2,
  },
  {
    name: 'Pie Apple',
    price: 10,
    quantity: 3,
    type: PRODUCT_TYPE.FRUIT,
    id: 2,
  },
  {
    name: 'Butter',
    price: 12,
    quantity: 1,
    type: PRODUCT_TYPE.MILK_FOOD,
    id: 3,
  },
  {
    name: 'Bread',
    price: 23,
    quantity: 1,
    type: PRODUCT_TYPE.BAKERY,
    id: 4,
  },
  {
    name: 'Orange',
    price: 12,
    quantity: 3,
    type: PRODUCT_TYPE.FRUIT,
    id: 5,
  },
  {
    name: 'T-Shirt',
    price: 200,
    quantity: 1,
    type: PRODUCT_TYPE.CLOTHES,
    id: 6,
  },
  {
    name: 'Jacket',
    price: 400,
    quantity: 1,
    type: PRODUCT_TYPE.CLOTHES,
    id: 7,
  },
  {
    name: 'Tomato',
    price: 15,
    quantity: 5,
    type: PRODUCT_TYPE.VEGETABLE,
    id: 8,
  },
  {
    name: 'Onion',
    price: 10,
    quantity: 4,
    type: PRODUCT_TYPE.VEGETABLE,
    id: 9,
  },
];

function Products(products, type) {
  this.products = products;
  this.type = type;

  this.getProductByType = function() {
    return this.products.find((item) => item.type === type);
  }

  this.addProduct = function(product) {
    this.products.push(product);
  }

  this.getProductsLength = function() {
    return this.products.length;
  }

  this.getProductsByType = function(type) {
    return this.products.filter((product) => product.type === type);
  }

  this.getProductsByName = function(name) {
    return this.products.filter((item) => item.name === name);
  }

  this.getElementByid = function(id) {
    const product = this.products.find(item => {
        return item.id === id
    });
    const errorMessage = 'product with this ID does not exist';
    return product || errorMessage
  }

  this.addDateToProduct = function(item) {
    return this.products.map(item => {
        return {
            ...item,
            date: new Date()
        }
    });
  }

  this.checkProductType = function(type) {
    const errorMessage = 'product with this type does not exist';
    const product = this.products.filter(item => {
        return item.type === type
    })
    return product || errorMessage
  }

  this.deleteProductById = function(id) {
    let product;
    product = this.products.map(item => {

        // if (item.id !== id) {
        //   return product
        // }

        if (item.id !== id) {
          delete this.products.item.id
          
        }

      })
    //   return product
  }

}



let veget = new Products(data);

// console.log(veget.getElementByid(2))
// console.log(veget.addDateToProduct())
// console.log(veget.checkProductType(PRODUCT_TYPE.BAKERY))
console.log(veget.deleteProductById(2))
