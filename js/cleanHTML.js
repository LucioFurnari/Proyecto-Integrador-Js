
export function cleanHTML(elem){
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild)
    }
}