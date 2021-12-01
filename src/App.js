import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Price from './components/Price';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav className='navigator'>
        <Link to='/home'>Home</Link>
        <Link to='/price'>Price</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
