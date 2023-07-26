import './App.css';
import RoutesScreeen from './components/navigation/Routes';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
         <RoutesScreeen />
    </Router>
  );
}

export default App;
