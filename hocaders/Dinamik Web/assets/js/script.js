let listItem = document.createElement("option");
let itemText = document.createTextNode("content");
listItem.appendChild(itemText);

document.getElementById("componentId").append(listItem);
// ADD Component function
function addComponent() {
  let listItem = document.createElement("option");
  let itemText = document.createTextNode(
    document.getElementById("addId").value
  );
  listItem.appendChild(itemText);

  document.getElementById("componentId").append(listItem);
  let component = document.getElementById("component").value;
  let componentId = document.getElementById("componentId").value;

  switch (component) {
    case "Div":
      document.getElementById(componentId).innerHTML += addDiv();
      break;
    case "Button":
      document.getElementById(componentId).innerHTML += addButton();
      break;
    case "Link":
      document.getElementById(componentId).innerHTML += addLink();
      break;
    case "Paragraf":
      document.getElementById(componentId).innerHTML += addParagraf();
      break;
    case "Header":
      document.getElementById(componentId).innerHTML += addHeader();
      break;
    case "Image":
      document.getElementById(componentId).innerHTML += addImage();
      break;
  }
}
// ADD div
function addDiv() {
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("addText").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;

  var div =
    "<div id='" +
    addId +
    "' class='bg-" +
    bgColor +
    " " +
    addClass +
    " text-" +
    textColor +
    "'>" +
    Text +
    "</div>";
  return div;
}
// ADD link
function addLink() {
  var href = document.getElementById("addLink").value;
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("addText").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;

  var a =
    "<a id='" +
    addId +
    "' class='bg-" +
    bgColor +
    "href= " +
    href +
    " " +
    addClass +
    " text-" +
    textColor +
    "'>" +
    Text +
    "</a>";
  return a;
}
// ADD Paragraf
function addParagraf() {
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("addText").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;

  var p =
    "<p id='" +
    addId +
    "' class='bg-" +
    bgColor +
    " " +
    addClass +
    " text-" +
    textColor +
    "'>" +
    Text +
    "</p>";
  return p;
}
// ADD Header
function addHeader() {
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("addText").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var headerSize = document.getElementById("headerSize").value;

  var h =
    "<h id='" +
    addId +
    "' class='bg-" +
    bgColor +
    " " +
    headerSize +
    " " +
    addClass +
    " text-" +
    textColor +
    "'>" +
    Text +
    "</h>";
  return h;
}
// ADD Image
function addImage() {
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var image = document.getElementById("image").src;
  var div =
    "<img id='" + addId + " " + addClass + " " + image + "'>" + +"</img>";
  return div;
}

// ADD Button
function addButton() {
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("addText").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;

  var button =
    "<button id='" +
    addId +
    "' class='bg-" +
    bgColor +
    " " +
    addClass +
    " text-" +
    textColor +
    "'>" +
    Text +
    "</button>";
  return button;
}
// Select function
function select() {
  var component = document.getElementById("component").value;

  if (component == "Button") {
    selectButtonShow();
  } else {
    selectButtonHide();
  }
}

function selectButtonHide() {
  document.getElementById("btnSize").style.display = "none";
}
function selectButtonShow() {
  document.getElementById("btnSize").style.display = "block";
}
