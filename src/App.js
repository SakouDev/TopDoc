import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';

function App() {

  const [navbarLinks, setNavbarLinks] = useState(true)

  return (
    <Router>
      <Navbar navbarLinks={navbarLinks} setNavbarLinks={setNavbarLinks} />
      <Routes>
        <Route path='' element={<LandingPage />}></Route>
        <Route path='/connexion' element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
