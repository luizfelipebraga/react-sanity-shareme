import {useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./container/Home";

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.stringify(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
