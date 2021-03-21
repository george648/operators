'use strict'


// function getArray (array) {
//     return array.filter(item => item % 2 === 1)
// }    

// export {getArray}

function squareNumber(array) {
    return array.map(number => number*number)
}

function checkForString(array) {
    return array.some(item => isNaN(item) || typeof(item) === "string");
    // return array.some(item => isNaN(item) )
}



// =====================================

function getRandomNumber() {
    let randomNumber = parseInt(Math.random()*10);
    return randomNumber
}


function areNumbersEqual(enteredNumber, randomNumber) {
    
    if (enteredNumber === randomNumber) {
        alert('you are right!')
    } else if (enteredNumber > randomNumber) {
        alert(`It's too much. Try again.`)
    }   else if (enteredNumber < randomNumber) {
        alert(`It's too little. Try again. `)
    } else {
        alert('enter correct data-number')
    }   
}

export {squareNumber, checkForString, getRandomNumber, areNumbersEqual}