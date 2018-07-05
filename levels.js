/*
	ideas:	
		primes
		number of on bits in binray representation

	add generic function, more parameters:
		x, y => x * y
		x, y => x + y
		x, y => x xor y
		string => length
		string => every letter doubles (stutter 2)

	check if input is valid using function, different options
*/

// memoize utility. TODO: make it decorator
function memoize(func)
{
	let cache = {}
	return function(...args) 
	{
		if (args in cache)
			return cache[args]
		return cache[args] = func(args)
	}
}

// functions for levels
function fib(x)
{
	return x <= 2 ? 1 : fib(x - 1) + fib(x - 2)
}
fib = memoize(fib)

function digit_sum(x)
{
	return x.toString().split('').map(Number).reduce((a, b) => a + b)
}

const levels = [
	{
		func: (x) => x + 1,
		examples: [4, 6],
		tests: [9, 15],
		info: "Plus 1"
	},
	{
		func: (x) => x - 2,
		examples: [10, 14],
		tests: [6, 1],
		info: "Minus 2"
	},
	{
		func: (x) => 3 * x,
		examples: [4, 9],
		tests: [7, 12],
		info: "Times 3"
	},
	{
		func: (x) => 2 * x - 3,
		examples: [6, 8],
		tests: [9, 11],
		info: "Times 2 minus 3"
	},
	{
		func: math.abs,
		examples: [0, -2],
		tests: [9, -15],
		info: "Absolute value"
	},
	{
		func: (x) => x / 4,
		examples: [1, 6, 12],
		tests: [16, 22, 25],
		info: "Divide by 4"
	},
	{
		func: math.floor,
		examples: [12.521, -23.7],
		tests: [-4.58, 5.926, 19],
		info: "Floor"
	},
	{
		func: math.ceil,
		examples: [12.521, -23.7],
		tests: [-4.58, 5.926, 19],
		info: "Ceil"
	},
	{
		func: (x) => x * x,
		examples: [3, 6],
		tests: [8, 10],
		info: "Squared numbers"
	},
	{
		func: (x) => x % 8,
		examples: [0, 9, 15, 44],
		tests: [7, 18, 51, 101],
		info: "Modulo 8"
	},
	{
		func: (x) => math.combinations(x + 1, 2),
		examples: [4, 6],
		tests: [10, 12],
		info: "Triangular numbers"
	},
	{
		func: (x) => 1 / x,
		examples: [1, 8, 100],
		tests: [50, 20, 6, 0.25],
		info: "1/x"
	},
	{
		func: (x) => math.pow(2, x),
		examples: [3, 5],
		tests: [6, 10],
		info: "Powers of two"
	},
	{
		func: (x) => x * x * x + 1,
		examples: [3, 7],
		tests: [5, 8],
		info: "Cube numbers plus 1"
	},
	{
		func: math.factorial,
		examples: [4, 6],
		tests: [7, 8],
		info: "Factorial"
	},
	{
		func: (x) => math.combinations(x + 2, 3),
		examples: [4, 6],
		tests: [5, 8],
		info: "Tetrahedral numbers"
	},
	{
		func: fib,
		examples: [3, 4, 5],
		tests: [11, 14],
		info: "Fibonacci sequence"
	},
	{
		func: digit_sum,
		examples: [6, 91, 7901],
		tests: [57, 82691, 1111111],
		info: "Sum of digits"
	},
	{
		func: math.log10,
		examples: [42, 64, 100],
		tests: [1000, 87, 12345],
		info: "Log in base of 10"
	},
	{
		func: math.sin,
		examples: [0, 0.11, -0.52, math.pi],
		tests: [math.pi / 2, -2],
		info: "Sine"
	},
	{
		func: math.cos,
		examples: [0, 0.11, -0.52, math.pi],
		tests: [math.pi / 2, -2],
		info: "Cosine"
	},
	{
		func: (x) => math.combinations(2 * x, x) / (x + 1),
		examples: [4, 9],
		tests: [7, 10],
		info: "Catalan numbers"
	}
]