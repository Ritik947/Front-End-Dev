const thaGridClass = document.querySelector("#tha-list");

// const createHrefElement = (day_no) => {
//   let anchor = document.createElement("a");
//   anchor.href = "/Day " + day_no;
//   anchor.innerHTML = "Day " + day_no;
// };

const day_nos = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "16",
  "17",
];

for (let i = 0; i < day_nos.length; i++) {
  let pix = document.createElement("div");
  let text = document.createElement("p");
  text.innerHTML = "Day " + day_nos[i];
  pix.setAttribute("class", "pix");
  pix.setAttribute("id", i + 1);
  pix.addEventListener("click", () => {
    window.location.href =
      "/Front-End-Dev/Day " +
      day_nos[i] +
      `${day_nos[i] >= "16" ? "/build" : ""}`;
  });
  pix.appendChild(text);
  thaGridClass.appendChild(pix);
}
