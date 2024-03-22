const menuItems = document.querySelectorAll("#menu li");
const contentContainers = document.querySelectorAll('[class^="faq-menu"]');

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    contentContainers.forEach((container) => {
      container.style.display = "none";
    });
    contentContainers[index].style.display = "block";

    menuItems.forEach((item) => {
      item.classList.remove("active-menu");
    });

    menuItem.classList.add("active-menu");
  });
});

const dropdown = document.querySelectorAll(".dropdownItem");
dropdown.forEach((dropdowns) => {
  dropdowns.addEventListener("click", () => {
    dropdowns.classList.toggle("active");
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
