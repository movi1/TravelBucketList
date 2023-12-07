import React from 'react';

export const SaveBucketList = ({ bucketList, countries, }) => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='bk-container mt-5 p-4 border rounded'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveBucketList;
