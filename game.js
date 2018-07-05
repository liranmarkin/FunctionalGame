// import * as interface from './ui'
// import {levels} from './levels'

function number_compare(x, y)
{
    return !isNaN(x) && !isNaN(y) && math.abs(x - y) < 0.0005
}

function set_level(new_level, callback = () => {})
{
	function show_examples(level)
	{
		const func = level.func
		for (const input of level.examples)
			write_message(`Input = ${input} | Output = ${Number(level.func(input).toFixed(5))}`)
	}

	level_ind = new_level
	set_level_header(new_level)
	localStorage.setItem("level", new_level)
	clear_message()
	callback()
	if (check_level(level_ind))
		show_examples(levels[level_ind])
}

function check_level(level_ind)
{
	if(level_ind >= levels.length){
		write_message("Reached highest level!")
		return false
	}
	return true
}

// used by 'take test' button
function test()
{
	function test_level(level)
	{
		const func = level.func

		for (const input of level.tests)
		if (!number_compare(func(input), parseFloat(ask(input))))
			return false

		return true
	}

	if (!check_level(level_ind)) return

	const level = levels[level_ind]
	if (test_level(level)) {
		set_level(level_ind + 1, () => write_message(`You passed the test :)<br />The last function was: ${level.info}`))
	} else {
		write_message("You failed the test :(")
	}
}

// used by 'query' button
function query()
{
	function query_level(level)
	{
		const input = parseFloat(get_input())
		if (isNaN(input)) 					  write_message("Input must be a number!")
		else if (level.tests.includes(input)) write_message("Can't ask it, it is in the test!")
		else 								  write_message(`Input = ${input} | Output = ${level.func(input)}`)
	}

	check_level(level_ind) && query_level(levels[level_ind])
	clear_input()
}

// used by 'reset progress' button
function reset()
{
	if (confirm_reset()){
		set_level(0)
	}
}

// called when document is loaded
function init()
{
    var level_ind = 0
    level_ind = parseInt(localStorage.getItem("level")) || 0
	set_level(level_ind)
}