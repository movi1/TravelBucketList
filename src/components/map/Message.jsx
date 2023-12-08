import React from 'react';

const Message = ({ text, onClose }) => {
  return (
    <div className="message">
      <p>{text}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Message;