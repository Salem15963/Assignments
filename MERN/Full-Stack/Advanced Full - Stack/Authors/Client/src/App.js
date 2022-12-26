import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css';
import Dashboard from './views/Dashboard';
import CreateAuthor from './views/CreateAuthor';

function App() {
    return (
    <div className="App">
         <Routes>
             <Route element={<Dashboard/>} path="/" />
             <Route element={<CreateAuthor/>} path="/createAuthor" />
             <Route element={<Detail/>} path="/authors/:id" />
        <Route element={<Update/>} path="/authors/:id/edit"/>
         </Routes>                         
    </div>
    );
    
}

export default App;

