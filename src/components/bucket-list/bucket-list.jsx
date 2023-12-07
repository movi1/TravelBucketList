import React from 'react';

const BucketList = ({ countries, bucketList, onItemRemove, onClose }) => (
  <div className="bucket-list">
    <h2>My Bucket List</h2>
    <ul>
      {bucketList.map(countryCode => {
        const country = countries.find(c => c.cca2 === countryCode);

        return (
          <li key={countryCode}>
            <div>{country.name.common}</div>
            <button onClick={() => onItemRemove(countryCode)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
    <button onClick={onClose}>
      Close
    </button>
  </div>
);

export default BucketList;
;