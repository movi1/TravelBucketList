import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MapSearch } from './components/map/MapSearch';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header /> {/* this will be on every page */}

      {/* UNCOMMENT THE ROUTES BELOW AS WE START BUILDING EACH PAGE */}

      <Routes>
        <Route path="/" element={<MapSearch />} />
        <Route path="/about" element={<div>
          <h1>About us!</h1>
          <h2>Lauren Cole</h2>
          <p>My favourite hobby is playing video games, I like it because:
            <ul>It helps me relax</ul>
            <ul>I can do it alone</ul>
          </p>
        </div>}/>
        <Route path="/pack-your-list" />
        <Route path="/bucket-list" />
        <Route path="/signup-login" />
      </Routes>

      <Footer /> {/* this will be on every page */}

    </div>
  );
  
}
  
export default App;
