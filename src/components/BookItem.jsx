import BookItem from './BookItem';

function BookList({ title, author, price }) {
  return (
    <p>
    <em>{title}</em>, {author}, ${price}
  </p>
  );
}

export default BookList;
