// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty("--vh", `${vh}px`);

// const hamburger = document.querySelector(".hamburger"),
//   menu = document.querySelector(".menu"),
//   closeElem = document.querySelector(".menu__close"),
//   overlay = document.querySelector(".menu__overlay"),
//   menuList = document.querySelectorAll(".menu__link"),
//   contactBtn = document.querySelector(".contacts__btn"),
//   modal = document.querySelector(".modal"),
//   checkbox = document.querySelector(".checkbox"),
//   inputs = document.querySelectorAll(".input");

const modal = document.querySelector(".modal");
const formBtn = document.querySelector(".form__btn");
const userName = document.querySelector("#name");
const userTel = document.querySelector("#tel");

// hamburger.addEventListener("click", () => {
//   menu.classList.add("active");
// });

// closeElem.addEventListener("click", () => {
//   menu.classList.remove("active");
// });

// overlay.addEventListener("click", () => {
//   menu.classList.remove("active");
// });

// menuList.forEach((item) => {
//   item.addEventListener("click", () => {
//     menu.classList.remove("active");
//   });
// });

formBtn.addEventListener("click", () => {
  if (userName.value && userTel.value) {
    modal.classList.add("activate");
    setTimeout(() => {
      modal.classList.remove("activate");
    }, 2000);
  }
});

$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      // $("#consultation, #order").fadeOut();
      // $(".overlay, #thanks").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });
});
