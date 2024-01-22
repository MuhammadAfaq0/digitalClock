function updateClock() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.toLocaleString('default', { month: 'long' });
    let day = currentTime.getDate();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    let dateString = day + " " + month + " " + year;
    let timeString = hours + ":" + minutes  + " " + ampm;

    var digitalClockElement = document.getElementById("digital-clock");
    digitalClockElement.innerHTML = "<strong>" + dateString + "</strong><br>" + timeString;
}
setInterval(updateClock, 1000);
updateClock();
