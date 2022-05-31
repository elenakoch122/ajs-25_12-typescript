import Movie from '../domain/Movie';
import Book from '../domain/Book';

test('create an instance of Book', () => {
  const result = new Book(2, 'Война и мир', 'Лев Толстой', 1000, 854);
  expect(result).toBeInstanceOf(Book);
});

test('create an instance of Movie', () => {
  const result = new Movie(1, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1100);
  expect(result).toBeInstanceOf(Movie);
});
