import './App.css';
import NewComponent from './Component/NewComponent'; 
function App() {
  return (
    <div className="App">
<NewComponent firstName="Omar" lastName="Salem" age={ 30 } hairColor="Brown" /> 
<NewComponent firstName="Zaid" lastName="judi" age={ 8 } hairColor="Black" /> 
<NewComponent firstName="Fadi" lastName="salman" age={ 43 } hairColor="Blond" /> 
<NewComponent firstName="zahi" lastName="jundob" age={ 64 } hairColor="White" /> 
    </div>
  );
}

export default App;
