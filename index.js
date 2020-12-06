/*if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
}
*/



let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

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

