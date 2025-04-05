import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <BookItem
          key={index}
          title={book.title}
          author={book.author}
          price={book.price}
        />
      ))}
    </div>
  );
}

export default BookList;
