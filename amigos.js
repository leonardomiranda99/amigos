console.log("conectado")
const nombreamigo = document.getElementById("nombre");
 nombreamigo.addEventListener("input", function() {
    if (nombreamigo.value == "h") {
     return console.log("buenas tardes");
    } else {
        return console.log("noches")
    }
 });