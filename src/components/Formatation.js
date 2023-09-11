export function FormatName(inputString) {
    const formattedString = inputString.toLowerCase().replace(/ /g, '-');
    return formattedString;
}