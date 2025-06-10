  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector("nav ul");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
