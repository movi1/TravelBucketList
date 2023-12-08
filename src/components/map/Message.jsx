import React from 'react';
import './Message.css';

const Message = ({ text, type, className }) => {
  
  return (
    <div className={`messages ${type} ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;