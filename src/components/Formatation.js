export function FormatName(inputString) {
    const formattedString = inputString.toLowerCase().replace(/ /g, '-');
    return formattedString;
}

export function FormatPrices(price) {
    const formatCurrency = {
        style: 'currency',
        currency: 'BRL'
    }
    return price.toLocaleString('pt-BR', formatCurrency)
}