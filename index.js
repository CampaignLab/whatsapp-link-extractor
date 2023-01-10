// File input field
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  printFileElements(file);
});

// File Drop
const dropArea = document.defaultView;
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const file = event.dataTransfer.files[0];
  printFileElements(file);
});
// Prevent default drag and drop behavior
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});

const printFileElements = (file) => {
  const reader = new FileReader();
  reader.readAsText(file);

  reader.addEventListener("load", () => {
    // let data = reader.result.split("\n");
    let fileLinks = extractLinks(reader.result);
    fileLinks.forEach((message) => {
      let newElement = document.createElement("li");
      newElement.textContent = message;

      let fullChat = document.getElementById("full-chat");
      fullChat.appendChild(newElement);
    });
  });
};

function extractLinks(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex);
}
