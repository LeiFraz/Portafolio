import { HashRouter as Router } from 'react-router-dom'; // Cambia BrowserRouter por HashRouter
import { Routes } from './routes/Routes';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
