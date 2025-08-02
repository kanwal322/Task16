
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

function highlightCurrentStep() {
  const today = new Date();
  document.querySelectorAll('.timeline-item').forEach(item => {
    const start = new Date(item.dataset.start);
    const end = new Date(item.dataset.end);
    if (today >= start && today <= end) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
highlightCurrentStep();


const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
