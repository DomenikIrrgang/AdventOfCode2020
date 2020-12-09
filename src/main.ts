import * as fs from "fs"

function getEntries(searchedNumber: number, numbers: number[]): object {
    for (let numberOne of numbers) {
        for (let numberTwo of numbers) {
            if (numberOne + numberTwo == searchedNumber) {
                return { numberOne, numberTwo }
            }
        }
    }
    return {}
}

function getEntriesWithThreeNumbers(searchedNumber: number, numbers: number[]): object {
    for (let numberOne of numbers) {
        for (let numberTwo of numbers) {
            for (let numberThree of numbers) {
                if (numberOne + numberTwo + numberThree == searchedNumber) {
                    return { numberOne, numberTwo, numberThree }
                }
            }
        }
    }
    return {}
}

const lines = fs.readFileSync("./input").toString().split("\n")
let numbers = []
for (let line of lines) {
    numbers.push(+line)
}
let result = getEntriesWithThreeNumbers(2020, numbers)
console.log(result["numberOne"] * result["numberTwo"] * result["numberThree"])
