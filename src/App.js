import './App.css';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import Signup from './Pages/Signup';
import NoPageFound from './Pages/NoPageFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
