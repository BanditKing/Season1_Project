const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");
const scrollToTopBtn = document.querySelector(".arrowBtn"); // 상단이동 버튼

//네비게이션 이동
function movegallery() {
    event.preventDefault();
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: "smooth" });
        }
    }

function moveabout() {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth"});
    }
}

function movecontact() {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth"});
            }
}

//이미지 관련
function openImg(src) {
    popup.style.display = "flex";
    popupImg.src = src;
}

closeBtn.onclick = function() {
    popup.style.display = "none";
}





//이미지 필터링
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


emailjs.init("m7fsG79GFvNINTJsE"); // API키

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 기본 제출 방지


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("이름:", name);
    console.log("이메일:", email);
    console.log("메시지:", message);

    // EmailJS API
    emailjs.send("service_gfgsf9l", "template_a6bzc9e", {
        from_name: name,
        from_email: email,
        message: message
    }).then(response => {
        alert("메일을 전송했습니다! 좋은 의견 감사합니다!");
        console.log("메일 전송 성공:", response); //f12

        document.getElementById("contactForm").reset(); // 전송 후 폼 초기화
    }).catch(error => {
        console.error("실패요.", error); //f12
        alert("전송 오류.");
    });
});

//버튼
document.getElementById("toggleButton").addEventListener("click", function() {
    var formBox = document.getElementById("contactForm");
    if (formBox.style.display === "none" || formBox.style.display === "") {
        formBox.style.display = "block";
        this.textContent = "폼 닫기";
    } else {
        formBox.style.display = "none";
        this.textContent = "폼 열기";
    }
});

//상단 이동
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
