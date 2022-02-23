function showTime(){
    var date = new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();

    var time = h + ':' + m + ':' + s;

    document.getElementById("clockdisplay").innerText = time;

    document.getElementById("clockdisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();