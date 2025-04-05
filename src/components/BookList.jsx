import BookItem from './BookItem';

function BookList({ title, books }) {
  return (
    <div>
      <h2>{title}:</h2>
      {books.map((book, index) => (
        <BookItem key={index} {...book} />
      ))}
    </div>
  );
}

export default BookList;
