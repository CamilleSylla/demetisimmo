export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function renderCollection (array, key) {

    const result = []

    const mapping = array.map(el => {
        if(!result.some(res => res ===  el.acf[key])) {
            result.push(el.acf[key])
        }
    })
    return result
}