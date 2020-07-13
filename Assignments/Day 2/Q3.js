var DATE = new Date;

d = DATE.getDate();
m = DATE.getMonth();
y = DATE.getFullYear();

if(d<10){
    d = '0' + d;
}
if(m<10){
    m = '0' + m;
}

p = document.getElementById("Q3");

p.innerHTML = d + '-' + m + '-' + y;