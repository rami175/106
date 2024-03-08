function saveTask() {
	console.log("Saving..........");

	const title = $("#inputTitle").val();
	const description = $("#inputDescription").val();
	const startData = $("#inputStartDate").val();
	const budget = $("#inputBudget").val();
	const status = $("#inputStatus").val();
	const color = $("#inputColor").val();

	console.log(title, description, startData, budget, status, color);
}

function init() {
	$("#btnSave").click(saveTask);
}

window.onload = init;
