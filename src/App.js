import React from 'react';
import Sidenav from './components/Sidenav';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Devices from './pages/Devices';

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/devices" exact element={<Devices />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
          <Route path="/settings" exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}