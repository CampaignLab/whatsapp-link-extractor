const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    console.log(reader.result);
  });

  reader.readAsText(file);
});
