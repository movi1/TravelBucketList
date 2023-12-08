// BucketList.jsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';




const BucketList = ({ bucketList, country, countries, onClose, selectedCountry, setBucketList, Message, setMessage }) => {
  
  const addToBucketList = () => {
 
    if (selectedCountry) {
      const country = countries.find(c => c.cca2 === selectedCountry);

      if (!bucketList.includes(selectedCountry)) {
        if (bucketList.length >= 5) {
          // Display a warning message directly
          setMessage({ text: 'Your bucket list is full. You can only save up to 5 countries.', type: 'warning' });
        } else {
          setBucketList((prevBucketList) => [...prevBucketList, selectedCountry]);
          // Use the Message component to display a success message
          setMessage({ text: `"${country?.name?.common}" added to your bucket list!`, type: 'success' });
        }
      } else {
        // Use the Message component to display an info message
        setMessage({ text: `"${country?.name?.common}" is already in your bucket list.`, type: 'info' });
      }
    }
  };
 


  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='bk-container mt-5 p-4 border rounded'>
            <button className='close-btn' onClick={onClose}>
              <FaTimes />
            </button>
            <h1 className='mb-4'>My Bucket List</h1>

            <ul className='list-unstyled'>
              {bucketList.map(countryCode => {
                const country = countries.find(c => c.cca2 === countryCode);

                return (
                  <li key={countryCode} className='mb-2'>
                    {country && country.capital && country.capital[0]}
                  </li>
                );
              })}
            </ul>
            <button onClick={addToBucketList}>Add to Bucket List</button>

            {/* Example usage of the Message component with a custom className */}
            <Message
              text="Your bucket list is full. You can only save up to 5 countries."
              type="warning"
              className="messages warning-message"
            />
            <Message
              text={`"${country?.name?.common}" added to your bucket list!`}
              type="success"
              className="messages success-message"
            />
            <Message
              text={`"${country?.name?.common}" is already in your bucket list.`}
              type="info"
              className="messages info-message"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketList;
