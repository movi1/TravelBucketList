import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { MapSearch } from './components/map/MapSearch';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header /> {/* this will be on every page */}

      {/* UNCOMMENT THE ROUTES BELOW AS WE START BUILDING EACH PAGE */}

      <Routes>
        <Route path="/" element={<MapSearch />} />
        <Route path="/about" />
        <Route path="/pack-your-list" />
        <Route path="/bucket-list" />
        <Route path="/signup-login" />
      </Routes>

    </div>
  );
  
}
  
export default App;
