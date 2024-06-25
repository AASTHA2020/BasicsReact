// Pagination.js
import React, { useState } from 'react';
import foodData from './data';
import './App.css'; // Assuming you will create a separate CSS file for styling

function Pagination() {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(foodData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the data to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = foodData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pagination-container">
      <h1>Pagination</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>FOOD</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
