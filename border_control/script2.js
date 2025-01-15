const shop = document.querySelector(".product-grid");
console.log(shop);

array.forEach(position => {
    const prod = document.createElement("div");
    prod.classList.add("product-card");

    //заполняем элементы блюда информацией 
    prod.innerHTML = `
        <img src="${position.image}" alt="${position.name}">
        <h3>${position.name}</h3>
        <p>${position.description}</p>
        <button class="btn">Подробнее</button>
    `;
    shop.appendChild(prod);

    const btn = prod.querySelector(".btn");
    btn.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <div class="popup-content">
                <img src="${position.image}" alt="${position.name}">
                <div>
                    <h3>${position.name}</h3>
                    <p>${position.description}</p>
                    <button class="add-to-cart-btn">Добавить в корзину</button>
                </div>
                <span class="close-popup">&times;</span>
            </div>
        `;
        document.body.appendChild(popup);

        const closeBtn = document.querySelector(".close-popup");
        closeBtn.addEventListener("click", () => {
            document.body.removeChild(popup);
        });

        const addToCartBtn = document.querySelector(".add-to-cart-btn");
        addToCartBtn.addEventListener("click", () => {
            // Добавить товар в корзину
            console.log("Товар добавлен в корзину");
        });
    });
});

let userd = JSON.parse(localStorage.getItem('loggedInUser'));
console.log(userd)


    function replaceRegElement(){
        const regElement = document.querySelector('.reg');
        if (regElement) {
            regElement.remove();
            const newTextElement = document.createElement('p');
            newTextElement.textContent = userd;
            document.querySelector('.user').prepend(newTextElement);
        }
    }
    
    // Вызываем функцию при загрузке страницы
    if(userd){
        replaceRegElement();
    }