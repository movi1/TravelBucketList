import React, { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import './Message.css';

const Message = ({ text, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!text);

  useEffect(() => {
    // Update visibility when the text prop changes
    setIsVisible(!!text);
  }, [text]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className="message visible">
          <p id="text">{text}</p>
          <button className="icon" onClick={handleClose}>
            <CgClose />
          </button>
        </div>
      )}
    </>
  );
};

export default Message;

