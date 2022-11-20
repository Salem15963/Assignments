function alwaysHungry(arr) {
    var counter=0;
for (var i=0; i<arr.length;i++)
{
    if(arr[i]=="food")
    {
        counter++;
        console.log("yummy");
    }

}
if(counter==0){
    console.log("I'm hungry");
}

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



/* ---------------Always Hungry-------------- */


function highPass(arr, cutoff) {
    var filteredArr = [];var x=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>cutoff)
        {
            filteredArr[x]= arr[i];
            x++
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



/* -----------High Pass Filte----------- */



function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0;i<arr.length;i++)
    {
    sum=sum+arr[i];
    }  
    var count = 0;
    var avg = sum/arr.length;
    for (var i=0;i<arr.length;i++)
    {
        if(avg<arr[i])
        count++;

    }

    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log( "/* -----------betterThanAverage---------------  */");
console.log(result); // we expect back 4




/* -----------betterThanAverage---------------  */


function reverse(arr) {
var arr2=[];
for (var i=0;i<arr.length;i++)
    {
    arr2[i]=arr[arr.length-i-1];
    }  
return arr2;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



/* -----------reverse ---------------  */

function fibonacciArray(n) {
// the [0, 1] are the starting values of the array to calculate the rest from
var fibArr = [0, 1];

for (var i=2;i<n;i++)
    {
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
    }  
return fibArr;
}

var result = fibonacciArray(10);
console.log(result);