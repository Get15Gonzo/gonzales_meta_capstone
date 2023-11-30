import './App.css';
import Home from './components/Home'
import FormPage from './components/FormPage'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<MultiStepForm />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
