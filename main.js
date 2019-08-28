console.log("Hello World!");

function helloWorld(){
    document.writeln('Hello World!');
}
function showTime(){
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    // setInterval('time()',1000);    
}