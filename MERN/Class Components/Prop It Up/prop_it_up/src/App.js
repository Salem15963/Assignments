import React from 'react'
import './App.css'
import MyNewComponent from './Component/MyNewComponent'; 

function App(){
return(
  <div className="App" >
    <MyNewComponent firstName="Omar" lastName="Salem" age={28} hairColor="Black"/>
    <MyNewComponent firstName="ali" lastName="rabah" age={29} hairColor="Black"/>
    <MyNewComponent firstName="hamodeh" lastName="abbas" age={95} hairColor="White"/>
    <MyNewComponent firstName="zaid" lastName="janz" age={28} hairColor="Red"/>
  </div>
);
}

export default App;