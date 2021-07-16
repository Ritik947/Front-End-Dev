import { useState } from "react";
import GenerateMeme from "./MemeGenerator";

function Meme({ meme, setMeme }) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "RitikGour",
    password: "ImageFlip@1234",
    boxes: [],
  });
  return (
    <div className="meme">
      <img src={meme.url} alt="" />
      <div className="caption-container">
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>
      <div className="button-container">
        <GenerateMeme form={form} setMeme={setMeme} meme={meme} />
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
}

export default Meme;
