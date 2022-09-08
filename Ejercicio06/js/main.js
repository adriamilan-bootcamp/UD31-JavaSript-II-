
function watch() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var min = fecha.getMinutes();
    var sec = fecha.getSeconds();

    document.getElementById("hora").innerHTML = hora;
    document.getElementById("minutos").innerHTML = min;
    document.getElementById("segundos").innerHTML = sec;
}

setInterval(watch, 1000)