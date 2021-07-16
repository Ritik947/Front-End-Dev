import "./App.css";
import { useEffect, useState } from "react";
import Templates from "./components/Templates";
import Meme from "./components/Meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <header>Meme Maker</header>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} key="template" />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
