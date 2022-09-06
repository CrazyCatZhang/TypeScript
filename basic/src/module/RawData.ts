//boolean
let isDone: boolean = false
console.log(isDone)

let createdByNewBoolean: Boolean = new Boolean(1);
console.log(createdByNewBoolean)

let createdByBoolean: boolean = Boolean(1)
console.log(createdByBoolean)

//void null undefined
function alertName(): void {
    console.log('Hello')
}

alertName()

let unusable: void = undefined
console.log(unusable)

let u: undefined = undefined
let n: null = null

//Tuple
let x: [string, number]
x = ['hello', 10]
// x[2] = 'world'
// console.log(x[5].toString())

// Enum
enum Color {Red, Green, Blue}

let c: Color = Color.Green
console.log(c)

//Any
let notSure: any = 4
notSure = "maybe a string instead"
console.log(notSure)
notSure = false
console.log(notSure)

//type assertion
let someValue: any = "this is a string"

let strLength: number = (someValue as string).length
console.log(strLength)
