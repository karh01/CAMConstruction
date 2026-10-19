function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks) {
    navLinks.classList.toggle("show");
  }
}

window.addEventListener("resize", () => {
  const navLinks = document.getElementById("nav-links");
  if (navLinks && window.innerWidth > 768) {
    navLinks.classList.remove("show");
  }
});

document.documentElement.classList.add("js");
const slideElements = document.querySelectorAll("[data-slide-in]");

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const slideObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  slideElements.forEach((element) => slideObserver.observe(element));
} else {
  slideElements.forEach((element) => element.classList.add("is-visible"));
}
