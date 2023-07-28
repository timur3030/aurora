document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal"),
    formBtn = document.querySelector(".form__btn"),
    userName = document.querySelector("#name"),
    userTel = document.querySelector("#tel"),
    hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".header__menu"),
    menuList = document.querySelectorAll(".header__menu-link"),
    promoImg = document.querySelector(".promo__img"),
    header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (
      document.documentElement.scrollTop + 96 >
      window.getComputedStyle(promoImg).height.replace(/px/g, "")
    ) {
      header.classList.add("header_color");
    } else {
      header.classList.remove("header_color");
    }
  });

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("hamburger_active");
  });

  menuList.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("hamburger_active");
    });
  });

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
        $("form").trigger("reset");
      });
      return false;
    });
  });

  // Событие touch на каждом продукте во время касания

  const productItems = document.querySelectorAll(".products__item");
  const productImgs = document.querySelectorAll(".products__img");

  productItems.forEach((item, i) => {
    item.addEventListener("touchstart", () => {
      productImgs[i].style.cssText =
        "padding: 3px; border: 2px black solid;";
    });
    item.addEventListener("touchend", () => {
      productImgs[i].style.cssText = "";
    });
  });
});
