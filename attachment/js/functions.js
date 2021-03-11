const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
};
    
  
const data = [
      
      {
        name: 'Milk',
        price: 20,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
      },
      {
        name: 'Apple',
        price: 10,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
      },
      {
        name: 'Butter',
        price: 12,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
      },
      {
        name: 'Bread',
        price: 23,
        quantity: 1,
        type: PRODUCT_TYPE.BAKERY,
      },
      {
        name: 'Orange',
        price: 12,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
      },
      {
        name: 'T-Shirt',
        price: 200,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
      },
      {
        name: 'Jacket',
        price: 400,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
      },
      {
        name: 'Tomato',
        price: 15,
        quantity: 5,
        type: PRODUCT_TYPE.VEGETABLE,
      },
      {
        name: 'Onion',
        price: 10,
        quantity: 4,
        type: PRODUCT_TYPE.VEGETABLE,
      },
    ];

let nubmerOfProduct = Number(prompt('choose type of product'))

let typeProduct = [];

function filterProductsByType (nubmer, array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].type === nubmer) {
            // array[i].concat(array[i]) 
            typeProduct += array[i]
            // console.log(array[i])
            // return array[i]

        } 
        
    }    
}

filterProductsByType(nubmerOfProduct, data)

console.log(typeProduct)