/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SMOOTH SCROLL ====================*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
function reveal() {
  const reveals = document.querySelectorAll(".section");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal(); // Call once on page load

/*==================== SKILLS BAR ANIMATION ====================*/
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skills__percentage");

  skillBars.forEach((bar) => {
    const windowHeight = window.innerHeight;
    const elementTop = bar.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      bar.style.transition = "width 1s ease-in-out";
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
animateSkillBars();

/*==================== PROJECT CARDS HOVER EFFECT ====================*/
const projectCards = document.querySelectorAll(".projects__card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

/*==================== FORM VALIDATION ====================*/
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
      showMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("Por favor, insira um email válido.", "error");
      return;
    }

    // If validation passes
    showMessage(
      "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      "success",
    );
    contactForm.reset();
  });
}

function showMessage(text, type) {
  // Remove existing message
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const message = document.createElement("div");
  message.className = `form-message ${type}`;
  message.textContent = text;
  message.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: .5rem;
        text-align: center;
        font-weight: 500;
        animation: fadeIn 0.3s ease;
        ${type === "success" ? "background-color: #d4edda; color: #155724;" : "background-color: #f8d7da; color: #721c24;"}
    `;

  contactForm.appendChild(message);

  // Remove message after 5 seconds
  setTimeout(() => {
    message.remove();
  }, 5000);
}

/*==================== TYPING EFFECT ====================*/
const homeTitle = document.querySelector(".home__title span");

if (homeTitle) {
  const text = homeTitle.textContent;
  homeTitle.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      homeTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing effect after page loads
  window.addEventListener("load", () => {
    setTimeout(typeWriter, 500);
  });
}

/*==================== COUNTER ANIMATION ====================*/
function animateCounters() {
  const counters = document.querySelectorAll(".about__info-title");

  counters.forEach((counter) => {
    const text = counter.textContent;
    const number = parseInt(text);

    if (!isNaN(number) && !counter.classList.contains("counted")) {
      const windowHeight = window.innerHeight;
      const elementTop = counter.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        counter.classList.add("counted");
        let count = 0;
        const increment = number / 50;

        const updateCount = () => {
          if (count < number) {
            count += increment;
            counter.textContent = Math.ceil(count) + "+";
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = number + "+";
          }
        };

        updateCount();
      }
    }
  });
}

window.addEventListener("scroll", animateCounters);
animateCounters();

/*==================== DARK LIGHT THEME (OPTIONAL) ====================*/
// This is a bonus feature that can be uncommented if desired
/*
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
*/

/*==================== LAZY LOADING IMAGES ====================*/
const images = document.querySelectorAll("img");

const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
      observer.unobserve(img);
    }
  });
}, imageOptions);

images.forEach((img) => {
  img.style.opacity = "0";
  img.style.transform = "translateY(20px)";
  img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  imageObserver.observe(img);
});

/*==================== CONSOLE MESSAGE ====================*/
console.log(
  "%c Portfólio de Edson Hagmayer ",
  "background: hsl(230, 69%, 61%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;",
);
console.log(
  "%c Desenvolvido com HTML, CSS e JavaScript ",
  "color: hsl(230, 69%, 61%); font-size: 14px;",
);
