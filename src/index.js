const dataOntem = require("./functions/dataOntem.js");
const tratarCPF = require("./functions/tratarCpf.js");
const mesesAno = require("./functions/labelSaidaXls.js");
const isObjectEmpty = require("./functions/isObjectEmpty.js");
const filterValues = require("./functions/filterValues.js");
const dataAgora = require("./functions/dataAgora.js");


console.log(dataOntem())
console.log(tratarCPF(12345678900))
console.log(tratarCPF('12345678900'))
console.log(mesesAno('01/03/2022'))
console.log(isObjectEmpty({"tes":"gg"}))
console.log(isObjectEmpty({}))
console.log(filterValues('`[03/}12/20^21'))
console.log(dataAgora())
// console.log()

