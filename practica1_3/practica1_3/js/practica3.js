const billTotal = [50, 150, 20, 9, 35, 76, 5, 40]
const tips = []

for (let i=0; i<billTotal.length; i++) {
    let tip;

    if (billTotal[i] > 75) {
        tip = billTotal[i] * 0.1
    } else {

        if (billTotal[i] > 30) {
            tip = billTotal[i] * 0.2
        } else {
            tip = billTotal[i] * 0.3
        }
    }

    tips.push(tip)

}

for (let i =0; i<billTotal.length; i++) {
    console.log(`El total de la factura es ${billTotal[i]} y la propina es ${tips[i]}`)
}