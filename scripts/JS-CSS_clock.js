const clockHand = document.querySelector('.clock__hand');
const secondHand = document.querySelector('.clock__hand_style_second');
const minuteHand = document.querySelector('.clock__hand_style_min');
const hourHand = document.querySelector('.clock__hand_style_hour');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (secondHand.style.transform == '444deg') {
    clockHand.style.transition = 'all 0s';
  } else  if (secondHand.style.transform == '0deg') {
    clockHand.style.transition = 'all .05s';
  }

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 12) * 6) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

