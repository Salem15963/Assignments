var x;
for(x=1;x<=100;x++){
    

if(x%3==0){
    console.log("fizz")
}
else if(x%5==0){
    console.log("buzz")
}
else {
    (x%3==0)&&(x%5==0)
    console.log("fizzbuzz")
}
}