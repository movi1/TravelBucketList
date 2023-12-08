import React from 'react';
import { FaTimes } from 'react-icons/fa';



export const SaveBucketList = ({ bucketList, countries, onClose }) => {
  
  console.log('Bucket List:', bucketList);
  console.log('Countries:', countries);
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
              {bucketList && bucketList.map(countryCode => {
                const country = countries.find(c => c.cca2 === countryCode);

                return (
                  <li key={countryCode} className='mb-2'>
                    {country && country.capital && country.capital[0]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveBucketList;

