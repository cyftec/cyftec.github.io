const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const activePath = currentPath === "blog-detail.html" ? "blogs.html" : currentPath;
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === activePath) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("form[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = form.querySelector("[data-form-notice]");
    if (notice) {
      notice.textContent = "Thanks. Your message is ready for a static-site form backend.";
    }
    form.reset();
  });
});
