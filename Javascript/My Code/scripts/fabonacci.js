// DEFINE sequence of integer numbers F.
// DEFINE index n of the sequence >= 0.
// DEFINE first number F[0]= 0.
// DEFINE second number F[1] = 1.
// INPUT ask user to give index > 1.
// LOOP from n = 2 to n = user input.
    // STORE variable nextNumber F[n] = F[n-1] + F[n-2]
    // STORE variabe nextNumber to the sequence.
// OUTPOT print the variable nextNumber.


/*
var f = [0,1]
var userInput = 7;

for (var n=2;n<=userInput;n++) {
    var nextNumber = f[n-1] + f[n-2];
    f.push(nextNumber);
}

console.log(nextNumber); */

var x = 1;
var y = 0;
var temp;

var userInput = 12;

while (userInput >= 0) {
    temp = x;
    x = x + y;
    y = temp;
    userInput--;

}

console.log(y);


// Claculate the area of a rectangle:
// 1- INPUT ask user to enter a the wdith.
// 2- INPUT ask user to enter b the height.
// 3- STORE variable area to equal a * b
// 4- OUTPU print area.

//var a = 5;      //entered by user
//var b = 10;     // enterd by user

//var area = a * b;

//console.log("Area of Rectangle = " + area);

/////////////////////////////////////////////////////
