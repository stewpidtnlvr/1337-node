function go_to_proxy(){
	var url = document.getElementById('url').value;
	window.location.href="/proxy/" + btoa(url);
	return false
}

/*https://Math-Symbols.stewpidtnlvr.repl.co*/