const form = document.getElementById('log-in');

console.log('hej');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.elements.username;
    const password = form.elements.password;
    const isusernamevalid = userisvalid(username);
    const ispasswordvalid = pasisvalid(password);

    if (isusernamevalid && ispasswordvalid) {
        // let respons;

        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ U: username.value, P: password.value }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
        // console.log('respons:');
        // console.log(respons);
    }
});

function pasisvalid(input) {
    if (input.value.trim() === '' || input.value === null) {
        return showError(input, PASSWORD_REQUIRED);
    }
    if (input.value.length < 4) {
        return showError(input, PASSWORD_TO_SHORT);
    }
    if (input.value.match(mailformat)) {
        return showSuccess(input);
    }
    return showError(input, PASSWORD_REQU_CAREC);
}

function userisvalid(input) {
    if (input.value.trim() === '' || input.value === null) {
        return showError(input, NAME_REQUIRED);
    }
    if (input.value.length < 4) {
        return showError(input, NAME_TO_SHORT);
    }
    return showSuccess(input);
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, '', true);
}

function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector('small');
    msg.innerText = message;
    input.className = type ? 'success' : 'error';
    return type;
}

const NAME_REQUIRED = 'Please enter your username';
const NAME_TO_SHORT = 'Username to short';
const PASSWORD_REQUIRED = 'Please enter your password';
const PASSWORD_TO_SHORT = 'Password to short';
const PASSWORD_REQU_CAREC = 'A-a-0';
const letters = /^[0-9a-zA-Z]+$/;
const mailformat =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,20}$/;

// https://www.javascripttutorial.net/javascript-dom/javascript-form/
