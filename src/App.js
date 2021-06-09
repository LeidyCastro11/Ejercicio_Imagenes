import logo from './utils/images/logo.svg';
import './App.css';
import Todo from './Components/Todo';
import Cuerpo from './Components/Cuerpo';
import Footer from './Components/Footer';
import Title from './Components/Title'

function App() {
  return (
    <div className="App">
      <Title />
      <Todo />
      <Cuerpo />
      <Footer />
    </div>
  );
}

export default App;
