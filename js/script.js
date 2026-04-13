async function loadHTML(path, containerId) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    const text = await response.text();
    document.getElementById(containerId).innerHTML = text;
  } catch (error) {
    console.error(error);
  }
}

function setActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });
}

function setupMenuToggle() {
  const nav = document.getElementById('main-nav');
  const menuToggle = document.getElementById('menu-toggle');
  menuToggle?.addEventListener('click', () => {
    nav?.classList.toggle('show');
  });
}

function initCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  if (slides.length > 1) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5500);
  }
}

function submitForm(event) {
  event.preventDefault();
  const status = document.getElementById('contact-status');
  if (status) {
    status.textContent = 'Thanks! Your message has been recorded (demo).';
  }
  event.target.reset();
  return false;
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadHTML('partials/header.html', 'header-placeholder');
  await loadHTML('partials/footer.html', 'footer-placeholder');
  setupMenuToggle();
  setActiveNavLink();
  initCarousel();

  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', submitForm);
});
