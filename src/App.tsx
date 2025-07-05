import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './Appointment';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
