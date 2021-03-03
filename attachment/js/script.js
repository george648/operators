const age = Number(prompt('how old are you?')); 

const name = prompt('what is your name?');



const isMan = confirm('Are you man?');

const person = {};

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

person.name = name;

person.age = age;

console.log(person)

