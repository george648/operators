// const parent = document.body.querySelector('.parent');
// const children = Array.from(parent.children);

// setTimeout( () => {
//     children.forEach( (child, index) => {
//         child.style.background = 'red';
//     })
// }, 2000);


// function changeColor(array) {
//     array.filter((item, index) => {
//         if (index % 2 === 1) {
//             item.style.backgroundColor = 'black';
//         } else {
//             item.style.backgroundColor = 'red';
//         }
//     })
// }

// console.log(changeColor(children))



const fChild = document.body.querySelectorAll('.child-f');
const sChild = document.body.querySelectorAll('.child-s');
const tChild = document.body.querySelectorAll('.child-t');
const toggleButton = document.getElementById('btn');

fChild.forEach(item => {
    item.classList.add('first')
})

sChild.forEach(item => {
    item.classList.add('second')
})

tChild.forEach(item => {
    item.classList.add('third')
})

sChild.forEach(item => item.style.backgroundColor = 'green')




function changeBackGroundColorBlack(event) {
    fChild.forEach(item => item.classList.toggle('first')
    )
    console.log(event)
}

changeBackGroundColorBlack(fChild)


toggleButton.addEventListener('click', changeBackGroundColorBlack)
