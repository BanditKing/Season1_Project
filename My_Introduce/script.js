const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

function openImg(src) {
    popup.style.display = "flex";
    popupImg.src = src;
}

closeBtn.onclick = function() {
    popup.style.display = "none";
}

popup.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
