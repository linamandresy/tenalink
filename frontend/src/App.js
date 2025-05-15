import './App.css';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Gemini_api from './Components/Gemini_api';
import MainPage from './Page/Main_Page';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/geminiApi" element={<Gemini_api/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
