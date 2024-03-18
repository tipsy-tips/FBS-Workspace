const burgerbtn = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burgerbtn.addEventListener("click", () => {
  burgerbtn.classList.toggle("open");
  headerA.classList.toggle("open");
});
