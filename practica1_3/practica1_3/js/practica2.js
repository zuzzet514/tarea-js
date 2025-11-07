const porcentajePropina = 0.1

let totalFactura = prompt('Ingresa el total de tu factura') * 1

if (isNaN(totalFactura)) {
    alert('Error: no es un número')
} else {
    let propina = totalFactura * porcentajePropina

    console.log(`El total de la factura es ${totalFactura} y la propina es de ${propina}`)
}
