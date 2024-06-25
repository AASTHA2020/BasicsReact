// QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css'; // Assuming you will create a separate CSS file for styling

function QRCodeGenerator() {
  // State to keep track of the input text
  const [inputText, setInputText] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="qr-code-generator">
      {/* Input field to enter the text for QR code */}
      <input
        type="text"
        placeholder="Enter text to generate QR Code"
        value={inputText}
        onChange={handleInputChange}
      />
      {/* Display the QR code based on the input text */}
      <div className="qr-code">
        <QRCode value={inputText} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
