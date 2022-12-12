import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/test/test';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='' element={<Test/>}></Route>
          <Route path='/LandingPage' element={<LandingPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
