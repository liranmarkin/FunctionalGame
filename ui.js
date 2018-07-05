
function ask(input)
{
	return prompt(`Input = ${input}\nOutput = `)
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

function set_level_header(level_ind)
{
    $("#level").html(`Level: ${level_ind}`)
}

function get_input()
{
    return $("#input").val()
}

function clear_input()
{
    $("#input").val("")
}

function confirm_reset()
{
	return confirm("Are you sure you want to reset your progress?")
}