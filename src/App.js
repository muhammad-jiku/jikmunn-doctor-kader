import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';
import ServicesDetails from './Pages/Services/ServicesDetails/ServicesDetails';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Authentication/LogIn/Login';
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import Feedbacks from './Pages/Feedbacks/Feedbacks/Feedbacks';
import './App.css';

function App() {
  return (
    <div className="mainSection">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequiredAuth>
              <ServicesDetails />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/feedbacks" element={<Feedbacks />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
