const myInterval = setInterval(updateTime, 1000); // Run function every second

function updateTime() {
    let time = document.getElementById('clock');
    let date = new Date(); // get current time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //Adding zeros to all time
    hours = hours < 10 ? "0" + hours : hours; 
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time.textContent = hours + ":" + minutes + ":" + seconds;
}