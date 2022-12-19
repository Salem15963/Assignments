import React from "react";
import { useParams } from "react-router";

import {
  Routes,
  Route
} from "react-router-dom";
    

const Welcome = (props) => {
  const {} = useParams(); // matches our :city in our Routes
    
  return (
    <h1  className="welcome">Welcome</h1>
  );
}

const Word = (props) => {
  const { word} = useParams(); // matches our :city in our Routes
  
  return (
  <>
    {isNaN(word)? <h1 className="welcome">The Word is: { word }!</h1>:
      <h1 className="welcome">The Number is: { word }!</h1>
    }</>
  )
  
}

const Color = (props) => {
  const { word } = useParams(); // matches our :city in our Routes
  const { Bcolor } = useParams(); // matches our :city in our Routes
  const { Fcolor } = useParams(); // matches our :city in our Routes
    
  return (
    <h1 style={{color: Fcolor , backgroundColor:Bcolor}} className="welcome">The Word is: { word }!</h1>
  );
} 
    
function Home() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Welcome />}/>
        <Route path="/:word" element={<Word />}/>
        <Route path="/:word/:Bcolor/:Fcolor" element={<Color />}/>
      </Routes>

    </div>
  );
}
    
export default Home;
