const initialData = [{
        product: "Apple iPhone 13",
        reviews: [{
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [{
            id: "3",
            text: "Интересный дизайн, но дорогой.",
        }, ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [{
            id: "4",
            text: "Люблю играть на PS5, графика на высоте.",
        }, ],
    },
];

checkInput.addEventListener('click', () => {
    try {
        const userInp = userInput.value;
        if (userInp.length > 50 && userInp.length < 500 || !isNaN(userInp) || userInp.trim() === '') {
            hintForUser.textContent = 'Отзыв должен быть не менее 50 символов, не более 500, состоять из текста, а не цифр и не допускаются пустые значения!';
            throw new Error('Введите текст!');
        } else {
            initialData.push(userInp);
            const html = initialData.map((item) => `<li>${item}</li>`).join('');
            document.querySelector('.ratingData').innerHTML = html;
        }
    } catch (error) {
        console.log(error);
    }
});