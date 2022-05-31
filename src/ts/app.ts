import Cart from './service/Cart';
import Movie from './domain/Movie';
import Book from './domain/Book';

const cart = new Cart();
const movie1 = new Movie(1, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1100);
const book1 = new Book(2, 'Война и мир', 'Лев Толстой', 1000, 854);
const book2 = new Book(3, 'Мастер и Маргарита', 'Михаил Булгаков', 600, 401);

console.log(cart.items);

cart.add(movie1);
cart.add(book1);
cart.add(book2);

console.log(cart.items);
console.log(cart.totalAmount());
console.log(cart.totalAmountWithDiscount(50));

cart.deleteProduct(2);
console.log(cart.items);
