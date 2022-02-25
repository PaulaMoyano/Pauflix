import './App.css';
import MainScreen from './components/MainScreen';
import logo from "./assets/pauflix_logo.png"

function App() {
  return (
    <div className="app">
      <nav>
        <img src={logo} alt="Pauflix logo" />
      </nav>
      <MainScreen />
    </div>
  );
}

export default App;
