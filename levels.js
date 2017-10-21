
const factorial = x => x < 2 ? 1 : x*factor(x-1)

const fib = x => x <= 2 ? 1 : fib(x-1) + fib(x-2)

const levels = [
	{
		func: x => x+1,
		tests: [9, 15]
	},
	{
		func: x => x*x,
		tests: [8, 10]
	},
	{
		func: x => x*(x+1)/2,
		tests: [12]
	},
	{
		func: x => Math.pow(2, x),
		tests: [6]
	},
	{
		func: factorial,
		tests: [7]
	},
	{
		func: fib,
		tests: [11]
	},
]