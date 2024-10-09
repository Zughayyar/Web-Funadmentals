console.log("page loaded...");

var a = document.getElementById("main-video").volume;
var x = document.getElementById("main-video").controls;
var y = document.getElementById("main-video").autoplay;
var z = document.getElementById("main-video").seeking;

console.log("The Volume = " + x);
console.log("The Controls = " + y);
console.log("The Autoplay = " + z);
console.log("The seeking = " + a);


function make_play(element) {
    element.play();
}

function make_pause(element) {
    element.pause()
}

function make_control(element) {
    element.controls = true;
}

function kill_control(element) {
    element.controls = false;
}