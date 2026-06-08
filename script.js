const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const activePath =
  currentPath === "blog-detail.html" ? "blogs.html" : currentPath;
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === activePath) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("form[data-mailto-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = form.querySelector("[data-form-notice]");
    const formData = new FormData(form);
    const recipient = form.dataset.recipient || "";
    const inquiryType = formData.get("type") || "General";
    const subject = `Inquiry: ${inquiryType}`;
    const body = formData.get("message") || "";

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (notice) {
      notice.textContent = "Your email app should open with a prefilled draft.";
    }
  });
});
