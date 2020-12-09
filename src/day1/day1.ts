export function getEntries(searchedNumber: number, numbers: number[]): object {
    for (let numberOne of numbers) {
        for (let numberTwo of numbers) {
            if (numberOne + numberTwo == searchedNumber) {
                return { numberOne, numberTwo }
            }
        }
    }
    return {}
}