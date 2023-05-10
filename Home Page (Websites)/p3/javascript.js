/* global document */
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global some_unused_var */

function myFunction() {
    var x = document.getElementById("number-input1").value;
    var y = document.getElementById("number-input2").value;
    var z = document.getElementById("number-input3").value;
    var a = parseInt(x, 10);
    var b = parseInt(y, 10);
    var c = parseInt(z, 10);
    var max = 0;
    var min = 0;
    var range = 0;
    var median = 0;
    var mean = 0;
    
    //min calculation
    
    if (a < b) {
        if (a < c) {
            min = a;
        } else min = c;
    } else if (b < c) {
        min = b;
    } else min = c;
    
    //max calculation
    
    if (a > b) {
        if (a > c) {
            max = a;
        } else max = c;
    } else if (b > c) {
        max = b;
    } else max = c;
    
    //range calculation
    
    range = max - min;
    
    //median calculation
    
    median = (a + b + c) - (max + min)
    
    //mean calculation
    
    mean = (a + b + c) / 3;
    document.getElementById("max").innerHTML = "max = " + max;
    document.getElementById("min").innerHTML = "min = " + min;
    document.getElementById("mean").innerHTML = "mean = " + mean;
    document.getElementById("median").innerHTML = "median = " + median;
    document.getElementById("range").innerHTML = "range = " + range;
}
