const container = document.querySelector("#tha-container");
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
  let tha = document.createElement("div");
  tha.innerHTML = "Day " + day_nos[i];
  tha.setAttribute("class", "tha");
  tha.setAttribute("id", i + 1);
  tha.addEventListener("click", () => {
    window.location.href =
      "/Front-End-Dev/Day " +
      day_nos[i] +
      `${parseInt(day_nos[i]) >= 16 ? "/build" : ""}`;
  });
  container.appendChild(tha);
}
