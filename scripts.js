const tarifa = 200;
const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const totalAPagar = document.getElementById("totalAPagar");
const botonResumen = document.getElementById("resumen")

console.log("hi");
function calculoPago() {
    let total = cantidad.value * tarifa;
    switch (categoria.value) {
        case "estudiante": total = ( cantidad.value * tarifa * 0.2);
            break;
        case "trainee": total = ( cantidad.value * tarifa * 0.5);
            break;
        case "junior": total = ( cantidad.value * tarifa * 0.85);
            break;
        default: break;

            
    }
    console.log("bye");
    totalAPagar.textContent = `Total a Pagar : \$${total}`
}

botonResumen.addEventListener("click",(e)=>{
    e.preventDefault();
    calculoPago();
}
)

