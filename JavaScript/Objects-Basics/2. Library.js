function library() {
    let bookOne = {
        title: 'Epopeq na zabravenite',
        author: 'Ivan Vazov',
        pages: 243
    }
    let bookTwo = {
        title: 'Nemili-nedragi',
        author: 'Ivan Vazov',
        pages: 128
    }
    let bookThree = {
        title: '12 rules for life',
        author: 'Jordan Peterson',
        pages: 448
    }
    let array = [bookOne, bookTwo, bookThree];
    for (const book of array) {
        console.log(`The book ${book.title} by author ${book.author} is ${book.pages} pages long`)

    }
}
library()