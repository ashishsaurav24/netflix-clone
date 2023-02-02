import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './Components/LoginScreen';

function App() {
  const user = null;
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
