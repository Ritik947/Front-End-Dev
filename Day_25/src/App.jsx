import "./App.css";
import Input from "./components/InputData";
import WeatherCard from "./components/WeatherCard";
import ToggleTheme from "./components/ToggleTheme";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <header className="App-header">Weather App</header>
      <Input />
      <WeatherCard />
      <ToggleTheme />
    </div>
  );
}

export default App;
