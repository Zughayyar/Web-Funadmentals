function counter(num) {
    for (var i=0;i<num;i++) {
        console.log(i);
    }
    return i
}

var x = counter(10);
console.log(x);


function create_array(size) {
    var new_array = []
    for (var i=0;i<size;i++) {
        new_array.push(0);
    }
    return new_array;
}

var y = create_array(5);
console.log(y);