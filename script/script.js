function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let ss = tomorrow - now;
    return Math.floor(ss / 1000);
}
const secondsToTomorrow = getSecondsToTomorrow();
document.getElementById("secondsToTomorrow").textContent = secondsToTomorrow;

