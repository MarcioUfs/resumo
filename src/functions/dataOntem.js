function datNow() {
    const dataAtual = new Date();
    const ontem = dataAtual.getTime() - 86400000;
    const ontemConvert = new Date(ontem);
    let dia = ontemConvert.getDate() < 10 ? `0${ontemConvert.getDate()}` : ontemConvert.getDate();
    const mesMaiUm = ontemConvert.getMonth() + 1;
    const mes = mesMaiUm < 10 ? `0${mesMaiUm}` : mesMaiUm;
    const ano = ontemConvert.getFullYear();
    return `${dia}${mes}${ano}`
}
module.exports = datNow;