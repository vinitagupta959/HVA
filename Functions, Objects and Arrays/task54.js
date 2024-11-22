const inventory = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 10.99,
        quantity: 5
    },
    {
        id: 2,
        title: "fvbjkf",
        author: "George Orwell",
        price: 8.99,
        quantity: 8
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        quantity: 3
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 9.99,
        quantity: 7
    },
    {
        id: 5,
        title: "Moby-Dick",
        author: "Herman Melville",
        price: 11.99,
        quantity: 4
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        price: 16.99,
        quantity: 10
    }
]; 
class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}
 
function displayBooks() {
    inventory.forEach(function(item) {
        console.log(
            `${item.title} - ${item.author} ($${item.price.toFixed(2)})`
        );
    });
}

 
function addBook(id, title, author, price, quantity) {
    const newBook = new Book(id, title, author, price, quantity);
    inventory.push(newBook);
}
 
function updateBook(id, quantity) {
    const book = inventory.find(function(item) {
        return item.id === id;
    });
    if (book) {
        book.quantity = quantity;
        console.log(`Updated "${book.title}" quantity to ${quantity}.`);
    } else {
        console.log("Book not found.");
    }
}
 
function updateBookWithMap(id, quantity) {
    let inventory1 = inventory.map(function(item) {
        if (item.id === id) {
            return new Book(item.id, item.title, item.author, item.price, quantity);
        }
        return item;
    });
}
 
function removeBook(id) {
    inventory = inventory.filter(function(item) {
        return item.id !== id;
    });
    
}
 
displayBooks();
 