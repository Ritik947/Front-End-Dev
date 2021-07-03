import { useState, useEffect } from "react";

const Card = () => {
  const [imgurl, setimgurl] = useState();
  useEffect(() => {
    fetch("https://meme-api.herokuapp.com/gimme/3").then(function (res) {
      res.json().then(function (data) {
        let card = data;
        console.log(card);
        // if (card.nsfw === false)
        setimgurl(card.memes[0].url);
      });
    });
  }, []);

  return (
    <div className="card">
      <img src={imgurl} alt="" />
    </div>
  );
};

export default Card;
