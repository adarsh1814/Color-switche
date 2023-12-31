
const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach(function (buttons) {
    buttons.addEventListener('click', function (e) {
        if (e.target.id === 'gray') {
            body.style.backgroundColor = 'gray';
        }
        else if (e.target.id === 'pink') {
            body.style.backgroundColor = 'pink';
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }


    });


});