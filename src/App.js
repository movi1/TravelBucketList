// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import TestimonialCarousel from './components/testimonial-carousel/testimonial-carousel';
import { BucketList } from './components/bucket-list/bucket-list';
import PackList from './components/pack-list/pack-list';
import { Footer } from './components/footer/footer';
import SaveBucketList from './components/map/SaveBucketList';
import 'animate.css/animate.min.css';
import './App.css';

function App() {
  const [isBucketListVisible, setBucketListVisibility] = useState(false);

  const showBucketList = () => {
    console.log('Showing Bucket List');
    setBucketListVisibility(true);
  };

  console.log('isBucketListVisible:', isBucketListVisible);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><AboutUs /><TestimonialCarousel /></>} />
        <Route path="/pack-list" element={<PackList />} />
        <Route
          path="/bucket-list"
          element={<BucketList showBucketList={showBucketList} />}
        />
        <Route path="/signup-login" />
      </Routes>
      {isBucketListVisible && <SaveBucketList />}
      <Footer />
    </div>
  );
}

export default App;
