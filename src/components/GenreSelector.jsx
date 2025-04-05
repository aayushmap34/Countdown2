function GenreSelector({ onSelectGenre }) {
    return (
      <div>
        <button onClick={() => onSelectGenre('fiction')}>Fiction</button>
        <button onClick={() => onSelectGenre('non-fiction')}>Non-Fiction</button>
        <button onClick={() => onSelectGenre('children')}>Children</button>
      </div>
    );
  }
  
  export default GenreSelector;
  