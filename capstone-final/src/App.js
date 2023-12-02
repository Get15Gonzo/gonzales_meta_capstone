import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import Modal from './components/Modal';

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<MultiStepForm />} />
          <Route path="/complete" element={ <Modal />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
