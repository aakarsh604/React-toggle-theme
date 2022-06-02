
import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {isLight } = useContext(ThemeContext);
  console.log(isLight)
  return (
    <div className={`App ${isLight? "dark" : "light"}`}>
            <Navbar/>
    </div>
  );
}
export default App;
