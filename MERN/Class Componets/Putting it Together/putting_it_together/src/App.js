import React from 'react'
import './App.css'
import NewComponent from './Component/NewComponent'; 

function App(){
return(
  <div className="App" >
    <NewComponent firstName="Omar" lastName="Salem" age={28} hairColor="Black"/>
    <NewComponent firstName="hamodeh" lastName="abbas" age={122} hairColor="White"/>
  </div>
  );

}

export default App;