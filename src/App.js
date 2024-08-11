import { Route, Routes } from 'react-router';
import './App.css';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import TopGainers from './views/TopGainers/TopGainers';
import TopLosers from './views/TopLosers/TopLosers';
import About from './views/About/About';
import Navbar from './components/Navbar/Navbar';
import CoinDetails from './views/CoinPage/CoinDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/top-gainers' element={<TopGainers />} />
        <Route path='/top-losers' element={<TopLosers />} />
        <Route path='/about' element={<About />} />
        <Route path='/:id/:coinName' element={<CoinDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
