const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('forms');

const name_error = document.getElementById('name_error');
const password_error = document.getElementById('password_error');

//! Event Listeners
form.addEventListener('submit', (event) => {
    if (name.value === '' || name.value == null){
        event.preventDefault();
        name_error.innerHTML = "*Name is required";
    }
    if (password.value === '' || password.value == null){
        event.preventDefault();
        password_error.innerHTML = "*Password is required";
    }else if (password.value.length <= 5){
        event.preventDefault();
        password_error.innerHTML = "*More Than 6 characters are required";
    }
})