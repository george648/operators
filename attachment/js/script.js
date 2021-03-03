const name = prompt('what is your name?');

const surName = prompt('what is your surname?')

const country = prompt('what country are you living?');

const city = prompt('what city are you living?');

const age = Number(prompt('how old are you?')); 

const study = prompt('where are you studying now?')

const isMan = confirm('Are you man?');

const isMarried = confirm('Are you married?')

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
person.surName = surName;
person.study = study;
person.isMarried = isMarried;
person.city = city;
person.country = country;

person.age = age;

console.log(person)

