
const number_prompt = message => parseFloat( prompt(message) )

const ask = (input) => number_prompt(`Input = ${input}\nOutput = `)

const test_level = (level) => {
	const func = level.func

	for (const input of level.tests)
	if (func(input) != ask(input))
		return false

	return true
}
const write_message = (message) => {
	const message_element =
		`<div class="row alert alert-primary" role="alert">
			<h2>${message}</h2>
		</div>`
	$("#message-list").prepend(message_element)
}

const clear_message = () => $("#message-list").empty()

const query_level = (level) => {
	const input = parseFloat($("#input").val())
	if (isNaN(input)) 					  write_message("Input must be a number!")
	else if (level.tests.includes(input)) write_message("Can't ask it, it is in the test!")
	else 								  write_message(`Input = ${input} | Output = ${level.func(input)}`)
}

const show_examples = (level) => {
	const func = level.func
	for (const input of level.examples)
		write_message(`Input = ${input} | Output = ${level.func(input)}`)
}

const set_level_header = (level_ind) => $("#level").html(`Level: ${level_ind}`)

const set_level = (new_level, callback = () => {}) => {
	level_ind = new_level
	set_level_header(new_level)
	localStorage.setItem("level", new_level)
	clear_message()
	callback()
	if (check_level(level_ind))
		show_examples(levels[level_ind])
}

const check_level = (level_ind) => {
	if(level_ind >= levels.length){
		write_message("Reached highest level!")
		return false
	}
	return true
}

const test = () => {
	if (!check_level(level_ind)) return

	if (test_level(levels[level_ind])){
		set_level(level_ind + 1, () => write_message("You passed the test! :)"))
	} else {
		write_message("You failed the test :(")
	}
}

const query = () => {
	check_level(level_ind) && query_level(levels[level_ind])
	$("#input").val("")
}

const reset = () => {
	if (confirm("Are you sure you want to reset your progress?")){
		localStorage.setItem("level", 0)
		location.reload()
	}
}

let level_ind = 0;
$(document).ready(() => {
	level_ind = parseFloat(localStorage.getItem("level")) || 0
	set_level(level_ind)
})

$("#input").keyup((event) => {
	if (13 == event.which)
		query()
})