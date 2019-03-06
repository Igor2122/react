class Clock {
  constructor (hours, minutes, seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }


  render () {
    this.element = document.createElement('div');
    this.element.className = 'clock';
    this.element.innerHTML = `
        <div class="clock">
          <div class="control">
            <button id="btn-hours-up" class="digit-btn">+</button>
            <div id="digits-hours" class="digits hours">${this.hours}</div>
            <button id="btn-hours-down" class="digit-btn">-</button>
          </div>
          <div class="separator">:</div>
          <div class="control">
            <button id="btn-minutes-up" class="digit-btn">+</button>
            <div id="digits-minutes" class="digits minutes">${this.minutes}</div>
            <button id="btn-minutes-down" class="digit-btn">-</button>
          </div>
          <div class="separator">:</div>
          <div class="control">
            <div id="digits-seconds" class="digits minutes">${this.seconds}</div>
          </div>
          <button class="startTimer">Start Timer</button> 
        </div>
    `;

    let timerStartBtn = this.element.querySelector('.startTimer');

    timerStartBtn.addEventListener('click', () => {
      this.timer();
    })

    return this.element;

  }


  mount(parent) {
    parent.appendChild(this.render());
    
  }

  timer () {
    setInterval(() => {
      this.update();
      if(this.seconds <= 0) {
        this.seconds = 60;
        this.minutes--;
      }
      this.seconds --;
    }, 1000);
    
  }

  
  
  update () {
    

    let hoursDigits = this.element.querySelector('#digits-hours');
    let minutesDigits = this.element.querySelector('#digits-minutes');
    let secondsDigits = this.element.querySelector('#digits-seconds')
    secondsDigits.textContent = this.seconds;
    minutesDigits.textContent = this.minutes;
    hoursDigits.textContent = this.hoursDigits;
  }

}