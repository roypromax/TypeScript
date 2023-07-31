function varTest() {
    var x = 10;
    var status = true;
    if (status) {
        var x = 11;
        console.log(x);
    }
    console.log(x);
}
varTest();
function letTest() {
    var x = 20;
    if (true) {
        var x_1 = "Hello";
        console.log(x_1);
    }
    console.log(x);
}
letTest();
var directions = 4;
console.log(directions);
