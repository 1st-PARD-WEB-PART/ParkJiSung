import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import People from './pages/People';
import Game from './pages/Game';
import MyAppBar from './components/MyAppBar';

const Layout = ({ children }) => (
  <>
    <MyAppBar />
    {children}
  </>
);

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/people" element={<Layout><People /></Layout>} />
        <Route path="/game" element={<Layout><Game /></Layout>} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
