function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var arr = new Array();
var sum = 0;
for (var i = 0; i < 10; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
for (var a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}
console.log("tổng các số fibonacci trong mảng là :" + sum);
