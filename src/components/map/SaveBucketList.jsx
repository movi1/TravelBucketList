import React, { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

export const SaveBucketList = ({ bucketList, countries, onClose }) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);
  
  if (!isVisible) {
    return null; // Do not render anything if not visible
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='bk-container mt-5 p-3 border rounded'>
              <button onClick={handleButtonClick} className="close-button">
              <CgClose />
            </button>
            <h1 className='mb-3'>My Bucket List</h1>
            <ul className='list-unstyled'>
              {bucketList.map(countryCode => {
                const country = countries.find(c => c.cca2 === countryCode);

                return (
                  <li key={countryCode} className='bucket-list-item'>
                    {country && country.capital && country.capital[0]}
                  </li>
                );
              })}
            </ul>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveBucketList;