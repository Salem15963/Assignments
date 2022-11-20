var element=document.querySelector(".za3bot");
var counter=0;

function funny(){
counter = counter + 1;
element.innerText = counter;

}


function doSomething() {
    alert("Contact Us at 1700100100");
}


function changeSort(selectedSorting){ //changeSort(value)
    console.log(selectedSorting) //Price or Best Selling or
    var Omar = document.querySelector("#sortMe"); //<strong id="sortMe">Best Selling</strong>
    console.log(Omar)
    Omar.innerText = selectedSorting
}