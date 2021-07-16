function GenerateMeme({ form, setMeme, meme }) {
  const params = Object.keys(form)
    .map((key) => {
      if (key === "boxes") {
        let boxurl = "";
        Object.keys(form.boxes).forEach((index) => {
          boxurl +=
            "&boxes[" +
            encodeURIComponent(index) +
            "][text]=" +
            encodeURIComponent([form.boxes[index].text]);
        });
        return boxurl;
      } else {
        return encodeURIComponent(key) + "=" + encodeURIComponent(form[key]);
      }
    })
    .join("&");
  return (
    <button
      onClick={() => {
        if (form.boxes.length !== meme.box_count) return null;
        fetch("https://api.imgflip.com/caption_image", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params,
        })
          .then((res) => {
            return res.json();
          })
          .then((resData) => {
            setMeme({ ...meme, url: resData.data.url });
          });
      }}
    >
      Generate Meme
    </button>
  );
}

export default GenerateMeme;
