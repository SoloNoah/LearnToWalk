const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      burger.classList.toggle('toggle');
    });
  }
};

function scrollToTop() {
  var scrollToTopBtn = document.getElementById('logo');
  var rootElement = document.documentElement;
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function videoFocus() {
  const videoBtn = document.getElementsByClassName('btn-floating');
  videoBtn.focus();
}

function changeFontSize() {
  const page = document.getElementById('page');
  const headerText = document.getElementById('text-wrapper');
  const fixedButton = document.getElementById('text-scale');
  const buttons = document.getElementsByTagName('A');

  if (!fixedButton.classList.contains('pressed')) {
    page.style.fontSize = '1.4rem';
    headerText.style.top = '25%';
    for (let i = 0; i < buttons.length; i++) {
      if (!buttons[i].classList.contains('fixed-btn')) buttons[i].style.fontSize = '1.4rem';
      else {
        buttons[i].style.fontSize = '1.2rem';
      }
    }
    fixedButton.classList.add('pressed');
  } else if (fixedButton.classList.contains('pressed')) {
    page.style.fontSize = '1.2rem';
    headerText.style.top = '30%';
    for (let i = 0; i < buttons.length; i++) {
      if (!buttons[i].classList.contains('fixed-btn')) buttons[i].style.fontSize = '1.2rem';
    }
    fixedButton.classList.remove('pressed');
  }
}

function changeContrast() {
  const sections = document.getElementsByClassName('sec');
  const navbar = document.getElementsByTagName('NAV');
  const fixedButton = document.getElementById('contrast');

  if (!sections[0].classList.contains('blackend')) {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.add('blackend');
    }
    navbar[0].classList.add('blackend');
    fixedButton.classList.add('pressed');
  } else if (sections[0].classList.contains('blackend')) {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('blackend');
    }
    navbar[0].classList.remove('blackend');
    fixedButton.classList.remove('pressed');
  }
}

function turnToTheLight() {
  const sections = document.getElementsByClassName('sec');
  const navbar = document.getElementsByTagName('NAV');
  const fixedButton = document.getElementById('lightmode');

  if (!sections[0].classList.contains('light')) {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.add('light');
    }
    navbar[0].classList.add('light');
    fixedButton.classList.add('pressed');
  } else if (sections[0].classList.contains('light')) {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('light');
    }
    navbar[0].classList.remove('light');
    fixedButton.classList.remove('pressed');
  }
}

function changeGrayscale() {
  const fixedButton = document.getElementById('grayscale');
  if (!fixedButton.classList.contains('grayscale')) {
    fixedButton.classList.add('grayscale');
    Array.from(document.getElementsByTagName('*')).forEach((el) => {
      console.log(el);
      el.classList.add('grayscale');
    });
  } else {
    fixedButton.classList.remove('grayscale');
    Array.from(document.getElementsByTagName('*')).forEach((el) => {
      el.classList.remove('grayscale');
    });
  }
}

navSlide();
