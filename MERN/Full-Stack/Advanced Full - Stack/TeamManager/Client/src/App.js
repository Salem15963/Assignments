import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css';
import Dashboard from './views/Dashboard';
import CreatePlayer from './views/CreatePlayer';
import Status from './views/Status'

function App() {
    return (
    <div className="App">
         <Routes>
             <Route element={<Dashboard/>} path="/" />
             <Route element={<Status/>} path="/playerStatus" />
             <Route element={<CreatePlayer/>} path="/createPlayer" />
             <Route element={<Detail/>} path="/players/:id" />
        <Route element={<Update/>} path="/players/:id/edit"/>
         </Routes>                         
    </div>
    );
    
}

export default App;

