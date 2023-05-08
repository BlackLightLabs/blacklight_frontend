import logo from './logo.svg';
import './App.css';
import Background from "./components/Background";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";

function App() {
    const color = "blue";
    return (
        <div className="App">
            <NavBar color={color}/>
            <Background color={color}/>
            <HomeScreen/>
        </div>
    );
}

export default App;
