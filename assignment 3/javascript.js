

  //Hiển thị thay đổi view less - view more khi nhấn nút để mở rộng cửa sổ
  document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll("#viewMoreBtn");

    titles.forEach((title) => {
      title.addEventListener("click", function () {
        const button = this;
        if (button.getAttribute("aria-expanded") === "true") {
          button.textContent = "View Less";
        } else {
          button.textContent = "View More";
        }
      });
    });
  });

  function submitEmail() {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const name = document.getElementById("name-email").value;
    const error = document.getElementById("error");
    const check = name.match(regex);
    const info = document.querySelector(".info-full");
    const submit = document.querySelector(".submit-email");

    const infoIcon = document.querySelector(".info-icons");

    if (check) {
      info.style.display = "block";
      submit.style.display = "none";
      infoIcon.style.display = "block";
    } else {
      error.innerHTML = "Vui lòng nhập đúng định dạng email";
      error.style.color = "red";
    }
  }
 
