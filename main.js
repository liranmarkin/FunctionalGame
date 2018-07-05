// initialize page
$(document).ready(() => {
	init()
})

$("#input").keyup((event) => {
	if (13 == event.which) // Enter
		query()
})

$("#reset_btn").click(reset)
$("#query_btn").click(query)
$("#test_btn").click(test)