
const factorial = (x) => x < 2 ? 1 : x * factorial(x - 1)

const fib = (x) => x <= 2 ? 1 : fib(x - 1) + fib(x - 2)

const levels = [
	{
		func: (x) => x + 1,
		examples: [4, 6],
		tests: [9, 15]
	},
	{
		func: (x) => x - 2,
		examples: [10, 14],
		tests: [6, 1]
	},
	{
		func: (x) => 3 * x,
		examples: [4, 9],
		tests: [7, 12]
	},
	{
		func: (x) => 2 * x - 3,
		examples: [6, 8],
		tests: [9, 11]
	},
	{
		func: (x) => Math.abs(x),
		examples: [0, -2],
		tests: [9, -15]
	},
	{
		func: (x) => x * x,
		examples: [3, 6],
		tests: [8, 10]
	},
	{
		func: (x) => x * (x + 1) / 2,
		examples: [2, 4],
		tests: [12]
	},
	{
		func: (x) => Math.pow(2, x),
		examples: [3, 5],
		tests: [6]
	},
	{
		func: factorial,
		examples: [5, 6],
		tests: [7]
	},
	{
		func: fib,
		examples: [3, 4, 5],
		tests: [11]
	},
]