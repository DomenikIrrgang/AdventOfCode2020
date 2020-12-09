import * as fs from "fs"

interface DatabaseEntry {
    password: string
    passwordPolicy: PasswordPolicy
}

interface PasswordPolicy {
    minimumAmount: number
    maximumAmount: number
    letter: string
}

function isPasswordValid(password: string, passwordWordPolicy: PasswordPolicy): boolean {
    return (password.charAt(passwordWordPolicy.minimumAmount - 1) == passwordWordPolicy.letter ||
        password.charAt(passwordWordPolicy.maximumAmount - 1) == passwordWordPolicy.letter) &&
        password.charAt(passwordWordPolicy.minimumAmount - 1) != password.charAt(passwordWordPolicy.maximumAmount - 1)
}

function countValidPasswords(database: DatabaseEntry[]): number {
    let counter = 0
    for (let databaseEntry of database) {
        if (isPasswordValid(databaseEntry.password, databaseEntry.passwordPolicy)) {
            counter++
        }
    }
    return counter
}

function parseDatabaseFile(path: string): DatabaseEntry[] {
    let database = []
    const lines = fs.readFileSync("./input2").toString().split("\n")
    for (let line of lines) {
        let content = line.split(" ")
        database.push({
            password: content[2],
            passwordPolicy: {
                minimumAmount: content[0].split("-")[0],
                maximumAmount: content[0].split("-")[1],
                letter: content[1].replace(":", ""),
            }
        })
    }
    return database
}

console.log(countValidPasswords(parseDatabaseFile("./input2")))

/*
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
*/