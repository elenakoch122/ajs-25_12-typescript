import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add method', () => {
  const cart = new Cart();
  const book1 = new Book(2, 'Война и мир', 'Лев Толстой', 1000, 854);
  cart.add(book1);
  expect(cart.items.length).toBe(1);
});

test('totalAmount method', () => {
  const cart = new Cart();
  const book1 = new Book(2, 'Война и мир', 'Лев Толстой', 1000, 854);
  const book2 = new Book(3, 'Мастер и Маргарита', 'Михаил Булгаков', 600, 401);
  cart.add(book1);
  cart.add(book2);
  expect(cart.totalAmount()).toBe(1600);
});

test('totalAmountWithDiscount method', () => {
  const cart = new Cart();
  const book1 = new Book(2, 'Война и мир', 'Лев Толстой', 1000, 854);
  const book2 = new Book(3, 'Мастер и Маргарита', 'Михаил Булгаков', 600, 401);
  cart.add(book1);
  cart.add(book2);
  expect(cart.totalAmountWithDiscount(50)).toBe(800);
});

test('deleteProduct method', () => {
  const cart = new Cart();
  const book1 = new Book(2, 'Война и мир', 'Лев Толстой', 1000, 854);
  const book2 = new Book(3, 'Мастер и Маргарита', 'Михаил Булгаков', 600, 401);
  cart.add(book1);
  cart.add(book2);
  cart.deleteProduct(2);
  expect(cart.items.length).toBe(1);
});
