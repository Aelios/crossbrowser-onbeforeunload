window.onbeforeunload = function (e) {
	var message = "Are you sure ?";
	var firefox = /Firefox[\/\s](\d+)/.test(navigator.userAgent);
	if (firefox) {
		//Add custom dialog
		var custom_div = document.createElement("div");
		custom_div.innerHTML = message; 
		document.body.appendChild(custom_div);
	}
	return message;
}