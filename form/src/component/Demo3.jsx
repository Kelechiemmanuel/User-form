import React, { useEffect, useState } from "react";
import axios from "axios";

const Demo3 = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("test");

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      setBooks(res.data.docs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book Search</h2>

      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchBooks}>Search</button>

      {/* Display books */}
      <div>
        {books.slice(0, 10).map((book, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{book.title}</h3>

            <p>
              Author: {book.author_name?.[0] || "Unknown"}
            </p>

            <p>
              Year: {book.first_publish_year || "N/A"}
            </p>

            {/* Cover image */}
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo3;