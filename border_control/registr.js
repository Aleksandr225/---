let users = [
    {
    username: "alex",
    password: 123456
    }
]; // Массив для хранения пользователей


let ck = false;

function showRegisterForm() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.register-form').classList.remove('hidden');
    document.getElementById('login-message').textContent = ""; // Очищаем сообщение
}

function showLoginForm() {
    document.querySelector('.register-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
    document.getElementById('register-message').textContent = ""; // Очищаем сообщение
}


function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const messageElement = document.getElementById('login-message');

    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        messageElement.textContent = "Вы успешно вошли!";
        ck = true
        console.log(ck)
        messageElement.style.color = 'green'
    } else {
        messageElement.textContent = "Неверный логин или пароль.";
        messageElement.style.color = 'red'
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const messageElement = document.getElementById('register-message');
    
    if (!username || !email || !password || !confirmPassword){
       messageElement.textContent = "Пожалуйста, заполните все поля.";
       messageElement.style.color = 'red'
       return;
    }

    if (password !== confirmPassword) {
        messageElement.textContent = "Пароли не совпадают.";
        messageElement.style.color = 'red'
        return;
    }
      
    if(password.length < 6) {
        messageElement.textContent = "Пароль должен содержать минимум 6 символов.";
        messageElement.style.color = 'red'
        return;
    }
    
    const existingUser = users.find(user => user.username === username)
     if(existingUser) {
        messageElement.textContent = "Пользователь с таким именем уже существует."
         messageElement.style.color = 'red'
         return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password
    };

    users.push(newUser);

    messageElement.textContent = "Регистрация прошла успешно!";

    loggedInUser = username;
    ck = true
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    
    console.log(ck)
    messageElement.style.color = 'green'
    console.log(users); // Выводим в консоль для просмотра.
}


