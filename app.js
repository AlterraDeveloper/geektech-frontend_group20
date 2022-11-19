//HTML - Hyper Text Markup Language
//HTTP - Hyper Text Transfer Protocol
// IP-address 212.112.45.10 8.8.8.8
//DNS - Domain Name Service
//DOM - Document Object Model
//CDN - Content Delivery Network

// document.body.style.backgroundColor = "blue";

main();

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//101 = 2^2*1 + 2^1*0 + 2^0 * 1 = 4 + 0 + 1 = 5

function generateColor() {
  var redHex = getRandomInRange(0, 255).toString(16);
  var greenHex = getRandomInRange(0, 255).toString(16);
  var blueHex = getRandomInRange(0, 255).toString(16);
  return "#".concat(redHex, greenHex, blueHex);
}

// var columnNode = document.getElementsByClassName('col')[0];
var columnNode = document.querySelector(".col");
console.log(columnNode);

function main() {
  var columnNodes = document.querySelectorAll(".col");
  columnNodes.forEach(function (columnNode) {
    var iconNode = columnNode.querySelector("i");
    if (Array.from(iconNode.classList).includes("fa-lock")) return;
    var genColor = chroma.random();
    columnNode.style.backgroundColor = genColor;
    var colorTextNode = columnNode.getElementsByTagName("h2")[0];
    var lumValue = genColor.luminance();
    colorTextNode.style.color = lumValue > 0.5 ? "black" : "white";
    colorTextNode.textContent = genColor;
  });
}

document.body.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (event.code.toLowerCase() !== "space") return;
  main();
});

document.body.addEventListener("click", function (event) {
  var nodeDataType = event.target.dataset.type;
  if (!nodeDataType) return;

  switch (nodeDataType) {
    case "lock":
      var isClickOnButton = event.target.children.length > 0;
      var targetNode = isClickOnButton
        ? event.target.querySelector("i")
        : event.target;
      targetNode.classList.toggle("fa-lock");
      targetNode.classList.toggle("fa-lock-open");
      break;
    case "copy":
      var colorText = event.target.textContent;
      navigator.clipboard.writeText(colorText);
      break;
  }
});
