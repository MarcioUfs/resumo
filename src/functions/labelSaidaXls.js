const meses = [
    { valor: "01", mes: "JAN" }, { valor: "02", mes: "FEV" }, { valor: "03", mes: "MAR" }, { valor: "04", mes: "ABR" }, { valor: "05", mes: "MAI" }, { valor: "06", mes: "JUN" },
    { valor: "07", mes: "JUL" }, { valor: "08", mes: "AGO" }, { valor: "09", mes: "SET" }, { valor: "10", mes: "OUT" }, { valor: "11", mes: "NOV" }, { valor: "12", mes: "DEZ" }
]
async function labelSaidaXls(entrada) {
    let saidaNome = ''
    if (entrada) {
        let splitMes = entrada.split("/")[1]
        let splitAno = entrada.split("/")[2]
        for (const ele of meses) {
            if (splitMes === ele.valor) {
                saidaNome = `${ele.mes}-`
            }
        }
        saidaNome += splitAno;
        return saidaNome
    }
}
module.exports = labelSaidaXls;