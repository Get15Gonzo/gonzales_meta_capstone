import './App.css';
import Home from './components/Home'
import Form from './components/Form'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
