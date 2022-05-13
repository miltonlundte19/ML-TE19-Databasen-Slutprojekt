const form = document.getElementById('log-in');

console.log('hej');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = userisvalid(form.elements.username, NAME_REQUIRED);
    const password = form.elements.password;
});

function userisvalid(input, message) {
    if (input.value.trim() === '') {
        return false;
    }
}

const NAME_REQUIRED = 'Please enter your name';
/*
window.addEventListener('load', () => {
    const buttonlisiner = document.querySelector('button.input-btn');
    const passwordfeld = document.querySelector('#password');
    const usernamefeld = document.querySelector('#username');

    buttonlisiner.addEventListener('click', (event) => {
        const password = passwordfeld.value;
        const username = usernamefeld.value;
        if (password | username) {
            console.log('fel');
        }
    });
});
*/

// https://www.javascripttutorial.net/javascript-dom/javascript-form/
