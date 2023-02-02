import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './Components/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //Logged out
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (<Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </BrowserRouter>

    </div>
  );
}

export default App;
