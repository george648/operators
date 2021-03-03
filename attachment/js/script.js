const age = Number(prompt('how old are you?')); 

const isMan = confirm('Are you man?');

const person = {};

// if (Number(age) > 60 && gender === true) {
//     console.log('you are grandad')
// } else if (Number(age) > 20 && Number(age) < 60 && gender === true) {
//     console.log('you are man')
// }  else if (Number(age) < 20 && gender === true) {
//     console.log('you are a boy')
// } else {
//     console.log('you are a girl/woman')
// }

// const genderWoman = confirm('Are you a woman?');

// genderWoman === true && Number(age) > 60 ? console.log('you are a grandmother') :
// genderWoman === true && Number(age) < 60 && Number(age) > 20 ? console.log('you are a woman') :
// genderWoman === true && Number(age) < 20 ? console.log('you are a girl') :
// console.log('you are not girl/woman')


if (isMan) {
    if (age > 60) {
        person.gender = 'grandaddy'
        console.log('you are grandad')
    } else if (age > 20 && age < 60) {
        person.gender = 'young man'
        console.log('you are man')
    }  else if (age < 20) {
        person.gender = 'young boy'
        console.log('you are a boy')
    } 
    
}  
    else {
        if (age > 60) {
            person.gender = 'grandmother'
            console.log('you are grandmother')
        } else if (age > 20 && age < 60) {
            person.gender = 'young woman'
            console.log('you are woman')
        }  else if (age < 20) {
            person.gender = 'young girl'
            console.log('you are girl')
        } 
}

person.age = age;

console.log(person)

