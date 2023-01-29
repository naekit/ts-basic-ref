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
