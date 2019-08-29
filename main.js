console.log("Hello World!");

function helloWorld(){
    document.writeln('Hello World!');
}
function showTime(){
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    // setInterval('time()',1000);    
}

function showDayMonYear(str){
    var dateObj = new Date();
    
    var month = dateObj.getUTCMonth(); //months from 1-12
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    date = months[month] + " " + day + ", "+ year;
    document.getElementById("date").innerHTML = date
} 