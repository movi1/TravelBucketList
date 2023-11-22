// import { Routes, Route } from 'react-router-dom'; // UNCOMMENT WHEN WE START BUILDING THE ROUTE PAGES
import {Header} from './components/header/header'
import './App.css';

function App() {
  return (
    <div className="App">

      <Header /> {/* this will be on every page */}

      {/* UNCOMMENT THE ROUTES BELOW AS WE START BUILDING EACH PAGE */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pack-your-list" element={<PackYourList />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/signup-login" element={<SignUpLogin />} />
      </Routes> */}

    </div>
  );
}

export default App;
