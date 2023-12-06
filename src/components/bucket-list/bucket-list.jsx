

import { Routes, Route } from 'react-router-dom';
import { MapSearch } from '../map/MapSearch';




export const BucketList = () => {
    console.log('BucketList component is rendering.');
    return (
      <Routes>   
        <Route index element={<MapSearch />} />
      </Routes>
    );
  };