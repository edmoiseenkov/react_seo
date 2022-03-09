import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import { Home } from './Home';
import { NFTPage } from './NFTPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nft-page" element={<NFTPage />} />
      </Routes>
    </div>
  );
}

export default App;
