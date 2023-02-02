import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './Components/LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log(userAuth)
      } else {
        //Logged out
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
