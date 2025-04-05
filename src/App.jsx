import { useState } from 'react'
import './App.css'
import ToggleButtons from './components/ToggleButtons';
import BookList from './components/BookList';

function App() {
  const [showFiction, setShowFiction] = useState(true);
  const [showNonFiction, setShowNonFiction] = useState(true);
  const [showChildren, setShowChildren] = useState(true);

  const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
  };

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <ToggleButtons 
        showFiction={showFiction} setShowFiction={setShowFiction}
        showNonFiction={showNonFiction} setShowNonFiction={setShowNonFiction}
        showChildren={showChildren} setShowChildren={setShowChildren}
      />
      {showFiction && <BookList title="Fiction" books={bookData["fiction"]} />}
      {showNonFiction && <BookList title="Non-Fiction" books={bookData["non-fiction"]} />}
      {showChildren && <BookList title="Children" books={bookData["children"]} />}
    </div>
  );
}

export default App
