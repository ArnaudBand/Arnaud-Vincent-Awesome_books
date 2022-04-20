// variables

const listBtn = document.querySelector('.list-btn');
const blockDisplay = document.querySelector('.block');
const addBtn1 = document.querySelector('.adde-btn-1');
const formSection = document.querySelector('.form-section');
const contactBtn = document.querySelector('.contact-btn');
const clockDisplay = document.querySelector('.clock')

// eslint-disable-next-line prefer-arrow-callback
listBtn.addEventListener('click', function() {
  blockDisplay.style.display = 'flex';
  formSection.style.display = 'none';
});

addBtn1.addEventListener('click', () => {
  blockDisplay.style.display = 'none';
  formSection.style.display = 'flex';
});
function displayClock() {
  let date = new Date();
  let month = date.toLocaleString('default', {month: 'long'});
  let days = date.getDate();
  let yrs = date.getFullYear();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let period = 'AM';

  if(hrs === 0) {
      hrs = 12;
  } else if(hrs > 12) {
      hrs = hrs - 12;
      period = 'PM'
  }



      if(days == 1) {
          days = `${days}st`;
      }else if(days == 2) {
          days = `${days}nd`;
      }else if(days == 3) {
          days = `${days}rd`;
      }else {
          days = `${days}st`;
      }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = `${month}, ${days}/ ${yrs} ${hrs}:${mins}:${secs}  ${period}`;
  setInterval(displayClock, 1000);

  clockDisplay.innerHTML = time;
}

displayClock();
