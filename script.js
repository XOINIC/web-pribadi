const currentYear = document.querySelector("[data-current-year]");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll(
    ".main-content > header, .main-content > .resume-section, .footer-card, .footer-education"
);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("reveal-on-scroll"));
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => observer.observe(element));
}
