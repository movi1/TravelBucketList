import { useState} from 'react';
import { CgClose } from 'react-icons/cg';
import './Message.css';

const Message = ({ text, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };
  return (
   
   <div className={`message ${isVisible ? 'visible' : ''}`}>
      <p id='text'>{text}</p>
      {isVisible && <button className="icon" onClick={handleClose}><CgClose /></button>}
    </div>
  );
};

export default Message;