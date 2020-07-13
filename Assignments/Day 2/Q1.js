var date = new Date;

var d = date.getDay();
var p1 = document.getElementById('Q1_1');

if(d == 0){
    p1.innerHTML = "Today is : Sunday";
}
else if(d == 1){
    p1.innerHTML = "Today is : Monday";
}
else if(d == 2){
    p1.innerHTML = "Today is : Tuesday";
}
else if(d == 3){
    p1.innerHTML = "Today is : Wednesday";
}
else if(d == 4){
    p1.innerHTML = "Today is : Thursday";
}
else if(d == 5){
    p1.innerHTML = "Today is : Friday";
}
else if(d == 6){
    p1.innerHTML = "Today is : Saturday";
}


var p2 = document.getElementById("Q1_2");

var hours = date.getHours();

if(hours>12){
    hours = hours%12 + " PM";
} else{
    hours = hours%12 + " PM";
}

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var time = "Current Time : " + hours + " : " + minutes + " : " + seconds;

p2.innerHTML = time;