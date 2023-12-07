function ConfirmarBebida() {
    try {
        var comboComida = document.getElementById("ComidaElegida");
        var comida = comboComida.options[comboComida.selectedIndex].text;
        switch (comida) {
            case "Carne en salsa":
                if (confirm("¿Deseas vino tinto como bebida?") == true) {
                    document.getElementById("BebidaElegida").selectedIndex = 0;
                }
                break;
            case "Pescado entero":
                if (confirm("¿Deseas vino blanco como bebida?") == true) {
                    document.getElementById("BebidaElegida").selectedIndex = 1;
                }
                break;
            case "Guarnición":
                if (confirm("¿Deseas agua como bebida?") == true) {
                    document.getElementById("BebidaElegida").selectedIndex = 2;
                }
                break;
        }
    } catch (error) {
        alert(error);
    }
}
function Ordenar() {
    var comboComida = document.getElementById("ComidaElegida");
    var comida = comboComida.options[comboComida.selectedIndex].text;
    var comboBebida = document.getElementById("BebidaElegida");
    var bebida = comboBebida.options[comboBebida.selectedIndex].text;

    var row = document.createElement("tr");
    row.innerHTML = `<tr class="table-primary" >
    <td class = "dcomida" scope="row">${comida}</td>
    <td class = "dbebida">${bebida}</td>
    <td class = "dtotal">₡${CalculaPrecioOrden()}</td>
</tr>`;
    document.getElementById("tablebody").appendChild(row);
}
function CalculaPrecioOrden() {
    let PrecioComida = Number.parseInt(document.getElementById("ComidaElegida").value);
    let PrecioBebida = Number.parseInt(document.getElementById("BebidaElegida").value);
    return PrecioBebida + PrecioComida;
}
function llenaFactura(){
    let facturaTexto = "";
    let calculo = ""
    var elemetosComidas = document.querySelectorAll(".dcomida");
    var elemetosBebidas = document.querySelectorAll(".dbebida");
    var elementosTotales = document.querySelectorAll(".dtotal");
    
    for (let index = 0; index < elemetosComidas.length; index++) {
        if(index==0){
        facturaTexto += "COMIDAS\n";
        }
        facturaTexto += "   -" +elemetosComidas[index].innerHTML + "\n";
    }
    for (let index = 0; index < elemetosBebidas.length; index++) {
        if(index==0){
        facturaTexto += "BEBIDAS\n";
        }
        facturaTexto += "   -" + elemetosBebidas[index].innerHTML + "\n";
    }
    for (let index = 0; index < elementosTotales.length; index++) {
    calculo += elementosTotales[index].innerHTML.substring(1) + "+";
    }
    let total = eval(calculo.substring(0,calculo.length-1));
    facturaTexto += "IMPUESTO\n";
    facturaTexto += "   ₡" + calcularImpuesto(total) + "\n";
    facturaTexto += "TOTAL\n";
    facturaTexto += "   ₡" + (parseInt(total) + parseInt(calcularImpuesto(total)));
    document.getElementById("Factura").innerHTML = facturaTexto;
    document.getElementById("pagar").style.display = "block";

}
function calcularImpuesto(total){
return total * 0.13;
}
function pagar(){
    var date = new Date();
    let fecha = date.getDate() + "/"+ (date.getMonth()+1) + "/" + date.getFullYear();
    if(confirm("¿Esta seguro de pagar esta orden?")){
    alert("Se ha registrado el pago el día " + fecha);
    resetControls();
    }
    
}
function resetControls(){
location.reload();
}
