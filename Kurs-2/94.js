const book123 = {
    author: "Tolkien",
    title: "Lord",
    cover: "paper",
};

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    info() {
        console.log(`${this.title} - ${this.author}`);
    }
}
const book = new Book("Lord", "Tolkien");
console.log(book);
book.info();

class EBook extends Book {
    // constructor(title, author, length) {
    //     super(title, author);
    constructor(options, length) {
        super(options);
        let { author, title } = options;
        this.length = length;
        this.title = title;
        this.author = author;
    }

    info() {
        super.info() + `${this.length}`;
    }
}

const eBook = new EBook(book123, 890);
console.log(eBook);
eBook.info();
