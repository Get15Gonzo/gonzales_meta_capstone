import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes, useNavigate as navigate } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {

  return (
    <>
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<MultiStepForm navigate={navigate} />} />
          <Route path="/complete" element={ <ConfirmedBooking />} />
        </Routes>
    </>

  );
}

export default App;
