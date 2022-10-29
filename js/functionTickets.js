var fullTicket = 200
var descuentoEstudiantes = 0.8      // 80% descuento
var descuentoTrainee = 0.5          // 50% descuento
var descuentoJunior = 0.15          // 15% descuento

var ticket_price = document.getElementById("valor-de-ticket");
ticket_price.innerHTML += fullTicket;        // insert price on page

var total

var informarTotal = document.getElementById("total-a-pagar")
var totalFinal = document.getElementById("informar-total")
var cantidadTickets = parseInt(document.getElementById("cantidad").value);
var userOption = parseInt(document.getElementById("categorias").value);     // Categoria seleccionada
var resumeBtn = document.getElementById("boton-resumen")
var borrarBtn = document.getElementById("boton-borrar")

function calc_price(){


    // Sin descuento
    if (userOption === 1){
        total = fullTicket * cantidadTickets;
    }
    // Estudiante       
    if (userOption === 2){                                                        
        total = (fullTicket * (1 - descuentoEstudiantes)) * cantidadTickets;
    }
    // Trainee
    if (userOption === 3){
        total = (fullTicket * (1 - descuentoTrainee)) * cantidadTickets;
    }
    // Junior
    if (userOption === 4){
        total = (fullTicket * (1 - descuentoJunior)) * cantidadTickets;
    }

    totalFinal.innerHTML += total;
    informarTotal.style.visibility="visible";

}

resumeBtn.addEventListener("click",calc_price)
// borrarBtn.addEventListener("click", () => {
//     informarTotal.style="hidden";
//     tinformarTotal.innerHTML = "Total a pagar: $";
// })