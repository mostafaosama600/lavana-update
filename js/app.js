let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
    let dataNow = new Date().getTime();

    let dateDiff = countDownDate - dataNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuts = Math.floor((dateDiff % (1000 * 60 * 60 * 60)) / (1000 *60));
    let second = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000);
    
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minuts").innerHTML = minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".second").innerHTML = second < 10 ? `0${second}` : second;

    if(dateDiff < 0){
        clearInterval(counter);
    }

},1000);