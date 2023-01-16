import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apiKey = process.env.REACT_NEWSAPP_API;
  const pageSize = 7;

  const [progress, setProgress] = useState(0)


  return (
    <div>
      <BrowserRouter>

        <NavBar />
        {/* react topLoadingBar */}
        <LoadingBar height={2} color='#f11946' progress={progress} />

        <Routes>

          <Route path="/" element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country='in' apiKey={apiKey} category='general' />
          } />

          <Route path="/business" element={
            <News setProgress={setProgress} key="business" pageSize={pageSize} country='in' apiKey={apiKey} category='business' />
          } />

          <Route path="/entertainment" element={
            <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' apiKey={apiKey} category='entertainment' />
          } />

          <Route path="/health" element={
            <News setProgress={setProgress} key="health" pageSize={pageSize} country='in' apiKey={apiKey} category='health' />
          } />

          <Route path="/science" element={
            <News setProgress={setProgress} key="science" pageSize={pageSize} country='in' apiKey={apiKey} category='science' />
          } />

          <Route path="/sports" element={
            <News setProgress={setProgress} key="sports" pageSize={pageSize} country='in' apiKey={apiKey} category='sports' />
          } />

          <Route path="/technology" element={
            <News setProgress={setProgress} key="technology" pageSize={pageSize} country='in' apiKey={apiKey} category='technology' />
          } />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;