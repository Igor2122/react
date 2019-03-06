const clockUpdate = (clock) => {
  hoursDigits = document.querySelector('#digits-hours');
  minutesDigits = document.querySelector('#digits-minutes');

  hoursDigits.innerHTML = clock.hours;
  minutesDigits.innerHTML = clock.minutes;
}
const clockControls = document.querySelector('.clock');

let amPm = document.createElement('div');
amPm.textContent = 'Am';
let changeAmpm = document.createElement('button');
changeAmpm.textContent = 'Set Am Pm'
clockControls.appendChild(changeAmpm);
clockControls.appendChild(amPm);

let counter = 0;
changeAmpm.addEventListener('click', ()=> {
  if(counter % 2) {
    amPm.textContent = 'AM'
  } else {
    amPm.textContent = 'PM';
  }
  counter ++;
  console.log(counter);
})


document.addEventListener('DOMContentLoaded', () => {
  let clock = {
    hours: 10,
    minutes: 2
  }

  clockUpdate(clock);

  
    clockControls.addEventListener('click', e => {

      
      if(clock.minutes === 60 ){
        clock.minutes = 0;
        clock.hours ++;
      }

      // if(clock.hours === 12) {
      //   clock.hours = 0;
      // }

      
      if(e.target.id === 'btn-hours-up'){
        clock.hours ++;
      } else if (e.target.id === 'btn-hours-down') {
        clock.hours --;
      }

      if(e.target.id === 'btn-minutes-up') {
        clock.minutes ++;
      } else if(e.target.id === 'btn-minutes-down') {
        clock.minutes --;
      }

      if(clock.minutes < 0) {
        clock.minutes = 59;
      }

      if(clock.hours === 0) {
        clock.hours = 12;
      } 


      clockUpdate(clock);

      
      
    })
  




});


