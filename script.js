if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

showImages = function () {
  var divImages = document.getElementById("images");
  
  if (divImages.style.display === "none") {
    divImages.style.display = "block";
  } else {
    divImages.style.display = "none";
  }
};
