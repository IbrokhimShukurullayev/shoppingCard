import React from 'react';
import {Routes , Route} from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Single from "./pages/singleProduct/Single"
import Auth from './pages/auth/Auth';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
      <Route path="/" element={<Auth />} >
        <Route path="/admin" element={<Admin />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
