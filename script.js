function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var match = document.getElementById('match').value;

    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkMatch(password, match)
}

function checkUsername(username) {
    if (username.length > 8) {
        document.getElementById('username').classList.add('valid')
        document.getElementById('username').classList.replace('error', 'valid');
        document.getElementById('name_error').innerHTML = "";
    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('name_error').innerText = "Username must be greater than 8 characters"
    }
}

function checkEmail(email) {
    if (email.length > 8 && email.includes('@gmail')) {
        document.getElementById('email').classList.add('valid')
        document.getElementById('email').classList.replace('error', 'valid');
        document.getElementById('email_error').innerHTML = "";
    }
    else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText = "Enter a valid email"
    }

}


function checkPassword(password) {
    if (password.length > 8 && password.includes('.')) {
        document.getElementById('password').classList.add('valid')
        document.getElementById('password').classList.replace('error', 'valid');
        document.getElementById('password_error').innerHTML = "";
    }
    else {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText = "Password must include ' . ' and must be greater than 8 characters "
    }

}


function checkMatch(password, match) {
    if (password == match && password != '') {
        document.getElementById('match').classList.add('valid')
        document.getElementById('match').classList.replace('error', 'valid');
        document.getElementById('match_error').innerHTML = "";
    }
    else {
        document.getElementById('match').classList.add('error')
        document.getElementById('match_error').innerText = "Enter the correct password"
    }

}