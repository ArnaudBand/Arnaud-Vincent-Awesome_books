// variables

const listBtn = document.querySelector('.list-btn');
const blockDisplay = document.querySelector('.block');
const addBtn1 = document.querySelector('.adde-btn-1');
const formSection = document.querySelector('.form-section');
const contactBtn = document.querySelector('.contact-btn');
const contactSection = document.querySelector('.contact_section');
const clockDisplay = document.querySelector('.clock');

listBtn.addEventListener('click', () => {
  blockDisplay.style.display = 'flex';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBtn1.addEventListener('click', () => {
  blockDisplay.style.display = 'none';
  formSection.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  blockDisplay.style.display = 'none';
  formSection.style.display = 'none';
});

function displayClock() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  let days = date.getDate();
  const yrs = date.getFullYear();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let period = 'AM';

  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs -= 12;
    period = 'PM';
  }

  if (days === 1) {
    days = `${days}st`;
  } else if (days === 2) {
    days = `${days}nd`;
  } else if (days === 3) {
    days = `${days}rd`;
  } else {
    days = `${days}st`;
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  const time = `${month}, ${days}/ ${yrs} ${hrs}:${mins}:${secs}  ${period}`;
  setInterval(displayClock, 1000);

  clockDisplay.innerHTML = time;
}

displayClock();
