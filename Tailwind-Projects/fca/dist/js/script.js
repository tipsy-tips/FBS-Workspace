const menuItems = document.querySelectorAll("#menu li");
const contentContainers = document.querySelectorAll('[class^="faq-menu"]');

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    // Hide all content containers
    contentContainers.forEach((container) => {
      container.style.display = "none";
    });

    // Display the content container corresponding to the clicked menu item
    contentContainers[index].style.display = "block";

    // Remove active-menu class from all menu items
    menuItems.forEach((item) => {
      item.classList.remove("active-menu");
    });

    // Add active-menu class to the clicked menu item
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
