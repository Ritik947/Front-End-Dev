let btn = document.getElementById("btn-submit");
let wrap = document.getElementById("wrapper");
btn.addEventListener("click", () => {
  btn.classList.toggle("invisible");
  showQuote();
});

// function draw(ctx, dashLen, dashOffset, speed, txt, x, y, i) {
//   ctx.font = "10px Baloo 2, cursive, sans-serif";
//   ctx.lineWidth = 0;
//   ctx.strokeStyle = ctx.fillStyle = "black";

//   (function loop() {
//     ctx.clearRect(x, y, 60, 150);
//     ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
//     dashOffset -= speed;
//     // ctx.strokeText(txt[i], x, 90);
//     if (dashOffset > 0) requestAnimationFrame(loop);
//     else {
//       ctx.fillText(txt[i], x, 90);
//       dashOffset = dashLen;
//       x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
//       y += ctx.lineHeight * Math.random();
//       if (i < txt.length) requestAnimationFrame(loop);
//     }
//   })();
// }

function showQuote() {
  fetch("https://animechan.vercel.app/api/random").then(function (res) {
    if (res.status != 200) {
      console.log("Encountered an error \n Code " + res.status);
      return;
    }
    res.json().then(function (data) {
      let quote = data;
      console.log(quote);
      //   let ctx = document.querySelector("canvas").getContext("2d"),
      //     dashLen = 20,
      //     dashOffset = dashLen,
      //     speed = 30,
      //     txt = quote.quote,
      //     x = 0,
      //     y = 0,
      //     i = 0;
      //   draw(ctx, dashLen, dashOffset, speed, txt, x, y, i);
      let box = document.createElement("div");
      let source = document.createElement("div");
      source.id = "source";
      box.id = "quote";
      wrap.appendChild(box);
      box.innerText = quote.quote;
      wrap.appendChild(source);
      source.innerHTML = quote.character + "<br/>(" + quote.anime + ")";
    });
  });
}
