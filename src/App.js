// import logo from './logo.svg';
import edward from "./images/Edward.png";
import "./App.css";
import NavBar from "./Navbar/Navbar";
function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <p className="description">Hi this is Sabriana</p>
        <img src={edward} />
      </div>
    </div>
  );
}

export default App;
