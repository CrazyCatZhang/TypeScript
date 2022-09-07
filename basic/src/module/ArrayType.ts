//Array Generic
let fibonacci: Array<number> = [1, 1, 2, 3, 5]
console.log(fibonacci)

//Interface Array
interface NumberArr {
    [index: number]: number
}

let interfaceArray: NumberArr = [1, 1, 2, 3, 5]

interface IArguments {
    [index: number]: any

    length: number
    callee: Function
}

function sun() {
    let args: IArguments = arguments
}


