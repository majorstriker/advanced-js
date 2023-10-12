const showEl = document.querySelector('.show');

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    showEl.innerHTML = `${key}: ${localStorage.getItem(key)}`;
}

// const localStorageSize = window.localStorage.length
// for (let i = 0; i < localStorageSize; i++) {
//   console.log(
//       window.localStorage.getItem(localStorage.key(i))
//   )
// }