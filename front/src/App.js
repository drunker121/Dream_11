import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Success from './components/Success';
import Front from './components/Front'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Front/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<SignUpPage/>} />
          <Route path='/Success' element={<Success/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;