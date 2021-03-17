// function randomNubmer() {
//   let num =1;
//   return function() {
//     console.log(num++);
//   }
// };

// setInterval(randomNubmer, 100); 


// function CustomArr(array) {
//     this.array = array;
//     this.getArrayLength = function() {
//         return this.array.length
//     }
// }

// let arrProto = new CustomArr([1, 24, 4, 4])

// console.log(arrProto.getArrayLength());

// const PRODUCT_TYPE = {
//     MILK_FOOD: 1,
//     FRUIT: 2,
//     VEGETABLE: 3,
//     CLOTHES: 4,
//     BAKERY: 5,
// };
  
// const data = [
      
//   {
//     name: 'Milk',
//     price: 20,
//     quantity: 1,
//     type: PRODUCT_TYPE.MILK_FOOD,
//   },
//   {
//     name: 'Apple',
//     price: 10,
//     quantity: 3,
//     type: PRODUCT_TYPE.FRUIT,
//   },
//   {
//     name: 'Butter',
//     price: 12,
//     quantity: 1,
//     type: PRODUCT_TYPE.MILK_FOOD,
//   },
//   {
//     name: 'Bread',
//     price: 23,
//     quantity: 1,
//     type: PRODUCT_TYPE.BAKERY,
//   },
//   {
//     name: 'Orange',
//     price: 12,
//     quantity: 3,
//     type: PRODUCT_TYPE.FRUIT,
//   },
//   {
//     name: 'T-Shirt',
//     price: 200,
//     quantity: 1,
//     type: PRODUCT_TYPE.CLOTHES,
//   },
//   {
//     name: 'Jacket',
//     price: 400,
//     quantity: 1,
//     type: PRODUCT_TYPE.CLOTHES,
//   },
//   {
//   name: 'Tomato',
//   price: 15,
//   quantity: 5,
//   type: PRODUCT_TYPE.VEGETABLE,
//     },
//     {
//       name: 'Onion',
//       price: 10,
//       quantity: 4,
//       type: PRODUCT_TYPE.VEGETABLE,
//     },
//   ];

// function Product(name, price, quantity, type) {
//   this.name = name,
//   this.price = price,
//   this.quantity = quantity,
//   this.type = type,
//   this.getNewProduct = function(arr, num) {
//     let filterProduct = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].type === num) {
//         filterProduct.push(arr[i])  
//       } 
//     }    
//     return arr ;
//   }

//   this.getFullPrice = function(arr) {
//     let sum = 0;
//     for (let key in arr) {
//       sum += arr[key].quantity * arr[key].price
//     }
//   }


// }

// let trousers = new Product('trousers', 25, 1, 4)

// console.log(trousers.getNewProduct(data, 4));

// console.log(trousers.getFullPrice(data))

const array = [
  {label: 'arial', value: 'arial font'},
  {label: 'arial', value: 'arial font'},
  {label: 'Georgia', value: 'Georgia font'},
];

function getByLabel(arr, callback) {

  let sortArr =[];

  for (let i = 0; i < arr.length; i++) {
    // if (arr[i].label === label) {
      // sortArr.push(arr[i])
      callback(array[i])
    // }
  }
  // return sortArr
}

// let newSortArr = getByLabel( array,'georgia');
// console.log(newSortArr);

// getByLabel([], function(item) {
//   console.log(item)
// })


function filterFunction(item) {
  console.log(item)
}

getByLabel( array, filterFunction)