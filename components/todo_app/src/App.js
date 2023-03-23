import logo from './logo.svg';
import './App.css';
import Home from "./Home.jsx"
import Todo from "./Todo"
function App() {
  return (
    <div className="App">
      <div className="home">
        <Home/>
      </div>
      <div className="todo">
        <Todo/>
      </div>
    </div>
  );
}

export default App;
