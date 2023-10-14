import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import  {Home}  from './container';

function App() {
  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/home/*" element={<Home />} />

          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App