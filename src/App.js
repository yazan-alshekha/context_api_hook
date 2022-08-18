
import FunctionContextComponents from './components/FunctionContextComponents';
import { ThemeProvider } from './components/ThemeContext.js'


function App() {
  return (

    <ThemeProvider>

      <FunctionContextComponents />

    </ThemeProvider>
  );
}

export default App;
