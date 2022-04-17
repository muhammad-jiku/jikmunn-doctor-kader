import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Authentication/LogIn/Login';
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import DoctorsDetails from './Pages/Doctors/DoctorsDetails/DoctorsDetails';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route
          path="/doctor/:doctorId"
          element={
            <RequiredAuth>
              <DoctorsDetails />
            </RequiredAuth>
          }
        ></Route>
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
