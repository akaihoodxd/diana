window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
function updateCountdown() {
    const startDate = new Date("2025-01-22T00:00:00");
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    if (timeDifference < 0) {
        document.getElementById("countdown").innerHTML = "Скоро этот день наступит!";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("countdown").innerHTML = ` ${days} дней, ${hours} часов и ${minutes} минут.`;
    }
}

setInterval(updateCountdown, 1000);