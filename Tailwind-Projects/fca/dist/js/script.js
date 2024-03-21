const dropdown = document.querySelectorAll(".dropdownItem");
dropdown.forEach((dropdowns) => {
  dropdowns.addEventListener("click", () => {
    dropdowns.classList.toggle("active");
  });
});
