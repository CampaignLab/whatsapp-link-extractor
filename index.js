const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    let data = reader.result.split("\n");
    data.forEach((message, i) => {
      let newElement = document.createElement("li");
      // `message-${i}`
      newElement.textContent = message;

      let fullChat = document.getElementById("full-chat");
      fullChat.appendChild(newElement);
    });

    // document.getElementById("full-chat").textContent = reader.result;
  });

  reader.readAsText(file);
});

const dropArea = document.defaultView;

// Listen for file drop
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  event.stopPropagation();

  // Get the file
  const file = event.dataTransfer.files[0];
  console.log(file);

  // Do something with the file
});

// Prevent default drag and drop behavior
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
