const bigNumber = document.getElementById("mainNumber");
const which = document.getElementById("which");
const eventKey = document.getElementById("key");
const eventCode = document.getElementById("code");

document.addEventListener("keydown", (event) => {
    console.log(event);
    mainNumber.innerHTML = event.which;
    which.innerHTML = event.which;
    eventKey.innerHTML = event.key;
    eventCode.innerHTML = event.code;
});