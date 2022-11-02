function filterValue(entrada) {
    let str = JSON.stringify(entrada)
    if (str.length > 0) {
        let re = str.replace(/(\s{1})(\s)/g, ' ')
            .replace(/[^a-zA-Zà-üÀ-Üª\s0-9-,\/:();]/ig, '')
        return re
    } else {
        return null
    }
}
module.exports = filterValue;