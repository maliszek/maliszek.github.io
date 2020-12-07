const uploadBtn = document.querySelector(".upload-btn");
const uploadInput = document.querySelector(".upload-input");
const img = document.querySelector("img.image");

const uploadImg = () => {
  uploadInput.click();
};

function handleFile() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

// Register service worker to control making site work offline
window.onload = () => {
    "use strict";
    if('serviceWorker' in navigator) {
        navigator.serviceWorker
                .register('./sw.js')
                .then(function() { console.log('Service Worker Registered'); });
    }
    uploadBtn.addEventListener("click", uploadImg);
    uploadInput.addEventListener("change", handleFile);
};
