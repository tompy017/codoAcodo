var fullTicket = 200;
var descuentoEstudiantes = 0.8;      // 80% descuento
var descuentoTrainee = 0.5;          // 50% descuento
var descuentoJunior = 0.15;          // 15% descuento

var ticket_price = document.getElementById("ticket_price");
ticket_price.innerHTML += fullTicket.toString();        // insert price on page


var total = 0;

var informarTotal = document.getElementById("informarTotal")
var totalFinal = document.getElementById("totalFinal")
var cantidadTickets = parseInt(document.getElementById("cantidadTickets").value);
var categorias = parseInt(document.getElementById("categorias").value);     // Categoria seleccionada
var resumeBtn = document.getElementById("boton-resumen")
var borrarBtn = document.getElementById("boton-borrar")



function calc_price(){

    // Sin descuento
    if (categorias === 1){
        total = fullTicket * cantidadTickets;
    }
    // Estudiante       
    if (categorias === 2){                                                        
        total = (fullTicket * (1 - descuentoEstudiantes)) * cantidadTickets;
    }
    // Trainee
    if (categorias === 3){
        total = (fullTicket * (1 - descuentoTrainee)) * cantidadTickets;
    }
    // Junior
    if (categorias === 4){
        total = (fullTicket * (1 - descuentoJunior)) * cantidadTickets;
    }

    totalFinal.innerHTML += total;
    informarTotal.style.visibility="visible";


}

resumeBtn.addEventListener("click",calc_price)

console.log()