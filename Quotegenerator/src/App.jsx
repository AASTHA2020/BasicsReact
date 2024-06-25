import React, { useState } from 'react';
import quotes from './data';
import './App.css'; // Assuming you will create a separate CSS file for styling
function QuoteGenerator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [quote, setQuote] = useState(null);

  // Function to handle the search
  const handleSearch = () => {
    // Filter quotes that include the search term in their text or tags
    const matchingQuotes = quotes.filter(q =>
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Pick a random quote from the matching quotes, or show no matches if none found
    if (matchingQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
      setQuote(matchingQuotes[randomIndex]);
    } else {
      setQuote({ text: 'No matching quotes found.', author: '', tags: [] });
    }
  };

  return (
    <div className="quote-container">
      {/* Search input */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by keyword (e.g., inspirational, technology)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {/* Display the quote if available */}
      {quote && (
        <div className="quote-display">
          <p className="quote-text">"{quote.text}"</p>
          <p className="quote-author">- {quote.author}</p>
          <div className="quote-tags">
            {quote.tags.map((tag, index) => (
              <span key={index} className="quote-tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteGenerator;
