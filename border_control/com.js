let userd = JSON.parse(localStorage.getItem('loggedInUser'));
console.log(userd)


    function replaceRegElement(){
        const regElement = document.querySelector('.reg');
        if (regElement) {
            regElement.remove();
            const newTextElement = document.createElement('p');
            newTextElement.textContent = userd;
            document.querySelector('.user').prepend(newTextElement);
            localStorage.clear();
        }
    }
    
    // Вызываем функцию при загрузке страницы
    if(userd){
        replaceRegElement();
    }