// StarRating.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you will create a separate CSS file for styling

function StarRating() {
  // Get the saved rating from local storage or default to 0
  const savedRating = localStorage.getItem('rating') || 0;

  // State to keep track of the current rating
  const [rating, setRating] = useState(Number(savedRating));

  // Update local storage whenever the rating changes
  useEffect(() => {
    localStorage.setItem('rating', rating);
  }, [rating]);

  // Function to handle the rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="star-rating">
      {/* Render 5 stars */}
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => handleRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
