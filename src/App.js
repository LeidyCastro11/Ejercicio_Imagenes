import logo from './utils/images/logo.svg';
import './App.css';
import Todo from './Components/Todo';
import Cuerpo from './Components/Cuerpo';
import Footer from './Components/Footer';
import Title from './Components/Title'
import GlobalStyles from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Title />
      <Todo />
      <Cuerpo />
      <Footer />
    </div>
  );
}

export default App;
