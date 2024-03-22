document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector("a[href='#dropdown']");
  const dropdownMenu = document.querySelector(".nav-links-dropdown");

  dropdownToggle.addEventListener("mouseenter", function () {
    dropdownMenu.style.display = "block";

    dropdownToggle.classList.add("active");
  });

  dropdownToggle.addEventListener("mouseleave", function () {
    dropdownMenu.style.display = "none";

    dropdownToggle.classList.remove("active");
  });

  dropdownMenu.addEventListener("mouseenter", function () {
    dropdownMenu.style.display = "block";

    dropdownToggle.classList.add("active");
  });

  dropdownMenu.addEventListener("mouseleave", function () {
    dropdownMenu.style.display = "none";
    dropdownToggle.classList.remove("active");
  });
});

const burgerbtn = document.querySelector(".burger__menu");
const headerA = document.querySelector("nav");
burgerbtn.addEventListener("click", () => {
  burgerbtn.classList.toggle("open");
  headerA.classList.toggle("open");
});

const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});
