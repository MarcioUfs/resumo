function datNow() {
    const dataAtual = new Date();
    return dataAtual.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
}
module.exports = datNow;