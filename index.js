const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const ampmElement = document.getElementById("ampm");

function localPcClock(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;

    setTimeout(()=>{
        localPcClock();
    }, 1000);
}

localPcClock();