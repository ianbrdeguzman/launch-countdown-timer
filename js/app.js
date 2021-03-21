class Countdown {
    constructor() {
        this.DOMElements = {
            days: document.querySelector('#days'),
            hours: document.querySelector('#hours'),
            minutes: document.querySelector('#minutes'),
            seconds: document.querySelector('#seconds'),
        };
        this.days = 8;
        this.hours = 23;
        this.minutes = 55;
        this.seconds = 41;
    }
    timer() {
        setInterval(() => {
            this.update();
            this.render();
        }, 1000);
    }
    render() {
        this.DOMElements.days.textContent = this.days
            .toString()
            .padStart(2, '0');
        this.DOMElements.hours.textContent = this.hours
            .toString()
            .padStart(2, '0');
        this.DOMElements.minutes.textContent = this.minutes
            .toString()
            .padStart(2, '0');
        this.DOMElements.seconds.textContent = this.seconds
            .toString()
            .padStart(2, '0');
    }
    update() {
        if (this.seconds != 0) {
            this.seconds--;
        } else if (this.minutes != 0 && this.seconds == 0) {
            this.seconds = 59;
            this.minutes--;
        } else if (this.hours != 0 && this.minutes == 0) {
            this.seconds = 59;
            this.minutes = 59;
            this.hours--;
        } else if (this.days != 0 && this.hours == 0) {
            this.seconds = 59;
            this.minutes = 59;
            this.hours = 23;
            this.days--;
        } else if (
            this.days == 0 &&
            this.hours == 0 &&
            this.minutes == 0 &&
            this.seconds == 0
        ) {
            this.days = 8;
            this.hours = 23;
            this.minutes = 55;
            this.seconds = 41;
        }
    }
}

const c = new Countdown();
c.timer();
