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

document.querySelectorAll('input[name="style-filter"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const filter = this.value;

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});
