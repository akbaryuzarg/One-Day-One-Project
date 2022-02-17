const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
   const now = new Date;
   const seconds = now.getSeconds();
   const minutes = now.getMinutes(); 
   const hours = now.getHours(); 

   // DETIK
   const secondsDeg = ((seconds / 60) * 360) + 90;
   if (secondsDeg != 90) {
      secondHand.style.transform = `rotate(${secondsDeg}deg)`
   } else {
      secondHand.style.transition = 'none';
      secondHand.style.transform = `rotate(${secondsDeg}deg)`
   }

   // MENIT
   const minutesDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
   if (minutesDeg != 90) {
      minuteHand.style.transform = `rotate(${minutesDeg}deg)`
   } else {
      minuteHand.style.transition = 'none';
      minuteHand.style.transform = `rotate(${minutesDeg}deg)`
   }

   // JAM
   const hoursDeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
   if (hoursDeg != 90) {
      hourHand.style.transform = `rotate(${hoursDeg}deg)`
   } else {
      hourHand.style.transition = 'none';
      hourHand.style.transform = `rotate(${hoursDeg}deg)`
   }
}
setDate();
setInterval(setDate, 1000);