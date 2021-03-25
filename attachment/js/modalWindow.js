let btnShowWindow = document.querySelector('.show_modal');
let btnCloseWindow = document.querySelector('.close_btn');
let modalWindow = document.querySelector('.modal');

// function hideModalWindow() {
//     modalWindow.classList.add('hide')
// };

// btnShowWindow.addEventListener('click', function() {
//     modalWindow.classList.remove('hide')  
// });

btnShowWindow.addEventListener('click', showAndHideModalWindow);


function showAndHideModalWindow() {
    modalWindow.classList.toggle('hide')
}

// btnCloseWindow.addEventListener('click', hideModalWindow); // 