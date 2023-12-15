import React, { useEffect, useState } from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import SignInSide from './pages/Login';
import SignUp from './pages/SignUp';
import Analytics from './pages/Analytics';
// import Profile from './pages/Profile';
import HistoryLogin from './pages/HistoryLogin';
import database from './firebase-config';
import Setting from './pages/Setting';




export default function App(){


  const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("auth_status");
    console.log("isAuth", isAuth)
    if (isAuth &&  JSON.parse(isAuth) === true) {
      console.log("isAuth", "render children")
      return children;
    }
    else {
      console.log('isauth', "navigate to login")
      // user is not authenticated
      return <Navigate to="/login" />;
    }
  };

    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="/analytics" exact element={<ProtectedRoute><Analytics /></ProtectedRoute>}/>
          {/* <Route path="/analytics" exact element={<Analytics />} /> */}
          <Route path="/login" exact element={<SignInSide />}/>
          <Route path="/signup" exact element={<SignUp />}/>
          <Route path="/historyLogin" exact element={<ProtectedRoute><HistoryLogin /></ProtectedRoute>} />
          <Route path="/setting" exact element={<ProtectedRoute><Setting /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}