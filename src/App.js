import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import FunctionContextComponents from './components/FunctionContextComponents';

export const ThemeContext = React.createContext();

function App() {

  const [ darkTheme , setDarkTheme ] = useState( true );

  function toggleTheme (){

    setDarkTheme(prev => !prev);
  }


  return (
  <>
  <ThemeContext.Provider value = {darkTheme}>

  <button onClick={toggleTheme}> ToggleTheme</button>
  
  <FunctionContextComponents/>
  
  </ThemeContext.Provider>
  </>
  );
}

export default App;
