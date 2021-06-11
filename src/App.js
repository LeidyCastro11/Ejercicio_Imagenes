import logo from './utils/images/logo.svg';
import './App.css'
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App"> 
        <Router>
          <GlobalStyles />
          <switch>
            <Route path="/" exact component={Home} /> </switch>
            <switch>
            <Route path="/contact" exact component={Contact} /></switch>
        </Router>
    </div>
    
      
  
  );
}

export default App;
