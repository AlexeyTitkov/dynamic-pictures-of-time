const time = document.querySelector("#time"),
    greeting = document.querySelector("#greeting"),
    name = document.querySelector("#name"),
    plans = document.querySelector("#focus");

const showAmPm = true;

const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
};

const addZero = (number) => (number < 10 ? "0" + number : number);


const setBg = () => {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 6) {
        greeting.textContent = "Good Night,"
        document.body.style.backgroundImage = 'url("./assets/atNight.jpg")';
    }
    else if (hour < 12) {
        greeting.textContent = "Good Morning,"
        document.body.style.backgroundImage = 'url("./assets/inTheMorning.jpg")';

    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon,'
        document.body.style.backgroundImage = 'url("./assets/inTheAfternoon.jpg")';
    } else {
        greeting.textContent = 'Good Evening,'
        document.body.style.backgroundImage = 'url("./assets/inTheEvening.jpg")';
    }

};
const setName = (e) => {
    if (e.type === 'keypress') {
        if (e.key === 'Enter') {
            localStorage.setItem("name", e.target.innerHTML);
            getName()
            name.blur();
        }
        localStorage.setItem("name", e.target.innerHTML);
    }
};

const getName = () => {
    if (localStorage.getItem("name") === null ||
        localStorage.getItem("name").length === 0) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
};


name.addEventListener("keypress", setName);


showTime();
setBg();
getName();