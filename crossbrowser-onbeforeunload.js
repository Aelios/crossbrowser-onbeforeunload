window.onbeforeunload = function (e) {
	var message = "Are you sure ?";
	var firefox = /Firefox[\/\s](\d+)/.test(navigator.userAgent);
	if (firefox) {
		//Add custom dialog
		//Firefox does not accept window.showModalDialog(), window.alert(), window.confirm(), and window.prompt() furthermore
		var custom_div = document.createElement("div");
        document.body.appendChild(custom_div);
        custom_div.style.visibility = "hidden";
		custom_div.innerHTML = message; 
        var left = document.body.clientWidth / 2 - custom_div.clientWidth / 2;
        custom_div.style.left = left + "px";
        custom_div.style.visibility = "visible";        
	}
	return message;
}