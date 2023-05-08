import './App.css';
import Background from "./components/Background";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";

function App() {
    const color = "pink";
    return (
        <div className="App">
            <NavBar color={color}/>
            <Background color={color}/>
            <HomeScreen color={color}/>
        </div>
    );
}

export default App;
