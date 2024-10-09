var country = ["Yemen","Qatar","Palestine","Syria",'Egypt'];
var years = [1988,1992,2000,1956,1924];
var mix =["Qatar","Palestine",2000,1956,true]


console.log(country);
console.log(country.sort());
console.log(years);
console.log(years.sort());

console.log(mix.sort());

var avg = years.reduce(avg)

console.log("The max value = " + avg);
