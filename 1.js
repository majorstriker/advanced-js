class BookLibrary {
    // Приватное свойство для хранения списка книг
    #
    books = [];
    // Геттер, который возвращает текущий список книг
    get allBooks() {
            return this.#books;
        }
        // Метод для добавления книги в список
    addBook(title) {
            if (title < 0) throw new Error('Невозможно показать то, чего нет!');
            this.#books += title;
            return this.#books;
        }
        // Метод для удаления книги из списка
    removeBook(title) {
            if (title < 0) throw new Error('Книг в списке нет');
            this.#books -= title;
            return this.#books;
        }
        //проверка на дубликаты
    hasDuplicates() {
        return new Set(#books).size !== #books.length;
    }

    // Метод, который проверяет наличие книги в библиотеке
    hasBook(title) {
            for (let i = 0; i < #books.length; i++) {
                if (#books[i] === elem) {
                    return true;
                }
            }
            return false;
        }
        // constructor(initialTitle) Конструктор для инициализации начального баланса
    constructor(initialTitle) {
        if (initialTitle < 0) throw new Error('Список литературы пуст');
        this.#books = initialTitle;
    }
}

// Создаем новый банковский счет с начальным балансом 500
let library = new BookLibrary('Гарри Поттер');
console.log(library.books); // Выводит: ['Гарри Поттер']

library.addBook('Война и мир');
console.log(library.books); // Выводит: ['Гарри Поттер', 'Война и мир']

library.addBook('Мастер и Маргарита');
console.log(library.books); // Выводит: ['Гарри Поттер', 'Война и мир', 'Мастер и Маргарита']

console.log(library.hasBook('Война и мир')); // Выводит: true

library.removeBook('Гарри Поттер');
console.log(library.books); // Выводит: ['Война и мир', 'Мастер и Маргарита']