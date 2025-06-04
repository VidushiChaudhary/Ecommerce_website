import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Components/Home';
import Signup from './assets/Components/Signup';
import Login from './assets/Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

