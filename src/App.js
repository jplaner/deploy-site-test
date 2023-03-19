import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/pages/Login.js';
import Signup from './components/pages/Signup.js';
import Users from './components/pages/Users.js';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path='/App.js' element={<App />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Users' element={<Users />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
