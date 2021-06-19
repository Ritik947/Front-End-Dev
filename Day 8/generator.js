var BLOCKS = 4;

function generateGrid(frame) {
  var container = document.createElement("div");
  var text = "Hello World!";
  var blockDiv, textSpan;  // used in the for loop

  container.className = "container2";
  document.getElementsByClassName(frame.replace("#", "")).appendChild(container);

  for(var i = 0; i < BLOCKS; i++) {
    blockDiv = document.createElement("div");
    blockDiv.className = "block";
    textSpan = document.createElement("span");
    textSpan.append("Div created");  // see note about browser compatibility
    blockDiv.append(textSpan);
    container.append(blockDiv);
  }
}