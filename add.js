const btnEl = document.querySelector('.btn');
let comments = {
    '1': 'good',
    '2': 'bad',
};

btnEl.addEventListener('click', function() {
    let inputName = document.querySelector('.name').value;
    let inputComment = document.querySelector('.comment').value;
    comments[inputName] = inputComment
});

console.log(comments);