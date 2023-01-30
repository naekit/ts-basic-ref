// primitive typescript types: number, string, boolean, null, undefined, symbol, bigint
// object types: arrays, tuples, enums, any, void, never, unknown
// function types: named, anonymous, arrow, optional, default, rest, overload
// Primitives
let num: number = 1
let str: string = "Hello"
let bool: boolean = true
let nul: null = null
let und: undefined = undefined
let sym: symbol = Symbol("id")
let big: bigint = 100n
// Objects
let arr: number[] = [1, 2, 3]
let tup: [string, number] = ["hello", 10]
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green
let any: any = 4
any = "hello"
any = false
function warnUser(): void {
	console.log("This is my warning message")
}
// More complex types
let hobbies: string[] = ["Sports", "Cooking"]

let person: { name: string; age: number } = {
	name: "Niko",
	age: 26,
}

let people: { name: string; age: number }[] = []

// Type inference or union types
let course: string | number = "TS - Guide"
course = 888
// Type alias
type Person = { name: string; age: number }
let anotherPerson: Person = {
	name: "Niko",
	age: 26,
}
let morePeople: Person[] = []
// Function types
function add(a: number, b: number): number {
	return a + b
}

function printThis(value: any): void {
	console.log(value)
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array]
	return newArray
}
const demoArr = [1, 2, 3]
const updatedArr = insertAtBeginning(demoArr, -1) // [-1, 1, 2, 3]
