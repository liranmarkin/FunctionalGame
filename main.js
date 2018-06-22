
function number_prompt(message)
{
	return parseFloat( prompt(message) )
}

function ask(input)
{
	return number_prompt(`Input = ${input}\nOutput = `)
}

function write_message(message)
{
	const message_element =
		`<div class="row alert alert-primary" role="alert">
			<h2>${message}</h2>
		</div>`
	$("#message-list").prepend(message_element)
}

function clear_message()
{
	$("#message-list").empty()
}

function set_level(new_level, callback = () => {})
{
	function show_examples(level)
	{
		const func = level.func
		for (const input of level.examples)
			write_message(`Input = ${input} | Output = ${level.func(input)}`)
	}

	function set_level_header(level_ind)
	{
		$("#level").html(`Level: ${level_ind}`)
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
		if (func(input) != ask(input))
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
		const input = parseFloat($("#input").val())
		if (isNaN(input)) 					  write_message("Input must be a number!")
		else if (level.tests.includes(input)) write_message("Can't ask it, it is in the test!")
		else 								  write_message(`Input = ${input} | Output = ${level.func(input)}`)
	}

	check_level(level_ind) && query_level(levels[level_ind])
	$("#input").val("")
}

// used by 'reset progress' button
function reset()
{
	if (confirm("Are you sure you want to reset your progress?")){
		set_level(0)
	}
}


// initialize page

let level_ind = 0;
$(document).ready(() => {
	level_ind = parseFloat(localStorage.getItem("level")) || 0
	set_level(level_ind)
})

$("#input").keyup((event) => {
	if (13 == event.which)
		query()
})