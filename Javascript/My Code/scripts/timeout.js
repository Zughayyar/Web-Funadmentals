function message() {
    console.log("Delayed message");
}

console.log("Start");
setTimeout(message,5000);
console.log("End")