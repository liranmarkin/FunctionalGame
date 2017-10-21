
const number_prompt = message => parseFloat( prompt(message) )

const ask = input => number_prompt("what is the answer for the input:\n" + input + "\n?")

const test_level = level => {
	const func = level.func

	for(const input of level.tests)
	if(func(input) != ask(input))
		return false

	return true
}

const query_level = level => {
	const input = number_prompt("what is your input?")
	if(isNaN(input)) 					 alert("Input must be a number!")
	else if(level.tests.includes(input)) alert("Can't ask it")
	else 								 alert("Result = " + level.func(input))
}

const setLevelHeader = level_num => document.getElementById("level").innerHTML = "Level: " + (level_num)

let cur_level = localStorage.getItem("cur_level") || 0;
setLevelHeader(cur_level)


const check_level = level_num => {
	if(level_num >= levels.length){
		alert("Reached highest level!")
		return false
	}
	return true
}

const test = () => {
	if(!check_level(cur_level)) return

	if(test_level(levels[cur_level])){
		alert("You passed! :)")
		setLevelHeader(++cur_level)
		localStorage.setItem("cur_level", cur_level)
	}
	else
		alert("You failed :(")
}

const query = () => check_level(cur_level) && query_level(levels[cur_level])

const set_level = level => {
	localStorage.setItem("cur_level", level)
	location.reload()
}

const reset = () => set_level(0)