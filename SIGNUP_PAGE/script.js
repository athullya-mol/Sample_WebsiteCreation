var input1 = document.getElementById("form3Example3c");
var input2 = document.getElementById("form3Example4c");
var input3 = document.getElementById("form3Example4cd");

console.log(input1.value);
console.log(input2.value);
function run()
{
    if(input2.value==input3.value)
    {
        console.log("matched");
    }
}