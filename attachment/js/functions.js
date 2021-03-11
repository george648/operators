// let areYouGoOut = confirm('Вы уходите?')

// function greet() {
//     console.log('hi !')
// }

// function bye () {
//     console.log('bye bye...')
// }

// function greeting (greet) {
//     console.log(greet)
// }

// if (areYouGoOut) {
//     greeting('пока')
// }   else {
//     greeting('привет!')
// }

// switch (ask) {
//     case true :
//         bye()
//         break;
//     case false :
//         greet()
//         break
// }


// let askNumberOfDocumetns = Number(prompt('how many documents you have?'));

// function documents(num) {

//     if (num === 1) {
//         return  console.log(num +' document')
//     }   
//        return  console.log(num +' documents') 
    
// }

// documents(askNumberOfDocumetns)

const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
  }
  

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
  ]

let numberType = Number(prompt('Choose the type of product (nubmer)'))



function getTypeOfProduct (number, array) {
    for (let i = 0; i < array.length; i++) {
        if (data[i].type === number) {
            console.log(data[i])
        } else if (data[i].type === number) {
            console.log(data[i])
        } else if (data[i].type === number) {
            console.log(data[i])
        } else if (data[i].type === number) {
            console.log(data[i])
        }   else if (data[i].type === number) {
            console.log(data[i])
        }
        
    }
}

getTypeOfProduct(numberType, data)