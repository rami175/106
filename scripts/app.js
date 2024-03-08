function saveTask() {
	console.log("Saving..........");

	const title = $("#inputTitle").val();
	const description = $("#inputDescription").val();
	const startData = $("#inputStartDate").val();
	const budget = $("#inputBudget").val();
	const status = $("#inputStatus").val();
	const color = $("#inputColor").val();

	let task = new Task(title, description, startData, budget, status, color);
	console.log(task);

	// save to server

	$.ajax({
		type: "POST",
		url: "http://fsdiapi.azurewebsites.net/api/tasks/",
		data: JSON.stringify(task),
		contentType: "application/json",
		success: function (response) {
			console.log(response);
		},
		error: function (error) {
			console.log(error);
		},
	});
}

function testRequest() {
	$.ajax({
		type: "GET",
		url: "http://fsdiapi.azurewebsites.net/",
		success: function (response) {
			console.log(response);
		},
		error: function (error) {
			console.log(error);
		},
	});
}

function init() {
	$("#btnSave").click(saveTask);
}

window.onload = init;
