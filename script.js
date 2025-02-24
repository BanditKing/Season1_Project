const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

function movegallery() {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: "smooth" });
        }
    }

function moveabout() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth"});
    }
}

function movecontact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth"});
            }
}

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
        filterGallery(filter);
});
          });

          window.onload =function() {
          const startUp = document.querySelector('input[value= "all"]');
          startUp.checked = true;
          filterGallery('all');
          };

       function filterGallery(filter) {
           document.querySelectorAll('.gallery-item').forEach(item => {
               if (filter === 'all' || item.classList.contains(filter)) {
                   item.classList.add('active'); // 선택한 카테고리의 이미지 보이기
               } else {
                   item.classList.remove('active'); // 나머지 이미지 숨기기
               }
           });
       }


emailjs.init("");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("", "", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(response => {
        alert("메일을 전송했습니다 좋은 의견 감사합니다!");

        document.getElementById("contact-form").reset()
    }).catch(error => {
        console.error("현재 메일을 보낼 수 없습니다.", error);
    });
});
