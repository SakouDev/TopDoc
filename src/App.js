import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<LandingPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
