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
    page.style.fontSize = '1.5rem';
    headerText.style.top = '25%';
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.fontSize = '2rem';
    }
    fixedButton.classList.add('pressed');
  } else if (fixedButton.classList.contains('pressed')) {
    page.style.fontSize = '1.2rem';
    headerText.style.top = '30%';
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.fontSize = '1.2rem';
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

function changeGrayscale() {
  const fixedButton = document.getElementById('grayscale');
  if (!fixedButton.classList.contains('grayscale')) {
    fixedButton.classList.add('grayscale');
    Array.from(document.getElementsByTagName('*')).forEach((el) => {
      //el.style.filter = 'grayscale(100%)';
      el.classList.add('grayscale');
    });
  } else {
    fixedButton.classList.remove('grayscale');
    Array.from(document.getElementsByTagName('*')).forEach((el) => {
      //el.style.filter = 'grayscale(0%)';
      el.classList.remove('grayscale');
    });
  }
}
