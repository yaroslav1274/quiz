const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('#start');
const firstTimer = document.querySelector('#timer1');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const lemon = document.querySelector('#lemon1');
const secondTimer = document.querySelector('#timer2');
const tesla = document.querySelector('#tesla1');

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    gsap.to(screens[0], {duration: 0.1, marginTop: '-100vh', ease: "bounce"});

    runFirstTimer(10);

    lemon.addEventListener('click', () => {
        gsap.to(screens[1], {duration: 0.1, marginTop: '-100vh', ease: "bounce", delay: 5});

        setTimeout(runSecondTimer, 5000, 20);
        tesla.addEventListener('click', () => {
            gsap.to(screens[2], {duration: 0.1, marginTop: '-100vh', ease: 'elastic', delay: 5});
        });
    });
});


function runFirstTimer(time) {
    let timerId = setInterval(() => {
        firstTimer.innerHTML = `00:${time}`;
        if (time === 0) {
            clearInterval(timerId);
            gsap.to(screens[0], {duration: 0.1, marginTop: '0', ease: 'elastic', delay: 5});
            image.style.pointerEvents = 'auto';
        } else if (time < 10) {
            firstTimer.innerHTML = `00:0${time}`;
        }
        time--;
        lemon.addEventListener('click', () => {
            clearInterval(timerId);
            image1.style.pointerEvents = 'auto';
        });
    }, 1000);
}

function runSecondTimer(time) {
    let timerId = setInterval(() => {
        secondTimer.innerHTML = `00:${time}`;
        if (time === 0) {
            clearInterval(timerId);
            gsap.to(screens[1], {duration: 0.1, marginTop: '0', ease: 'elastic', delay: 5});
            image.style.pointerEvents = 'auto';
        } else if (time < 10) {
            secondTimer.innerHTML = `00:0${time}`;
        }
        time--;
        tesla.addEventListener('click', () => {
            clearInterval(timerId);
            image2.style.pointerEvents = 'auto';
        });
    }, 1000);

}