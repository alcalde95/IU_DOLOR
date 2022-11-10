function cerrarMensajeKO(){

	codigos = String(document.getElementById('id_texterror').classList);
	codigos = codigos.split(' ');
	for (let codigo of codigos){
		document.getElementById('id_texterror').classList.remove(codigo);
	}
	document.getElementById('id_texterror').innerHTML = '';
	document.getElementById('id_caja_error').style.borderColor = "";
	document.getElementById('id_caja_error').style.display = 'none';

}

function deleteAllCookies() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		setCookie(name, '');
	}
}

function desconectar() {
	deleteAllCookies();
	window.location.href = "login.html";
}

function ponerinvisibleerror() {
	document.getElementById('id_caja_error').style.display = 'none';
}

function ponerinvisibleformusuario() {
	document.getElementById('id_caja_formulario_usuario').style.display = 'none';
}

function ponerinvisibleformpersona() {
	document.getElementById('id_caja_formulario_persona').style.display = 'none';
}

function ponerinvisibleformaccion() {
	document.getElementById('id_caja_formulario_accion').style.display = 'none';
}
function ponerinvisibleformfuncionalidad() {
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'none';
}

function ponerinvisibleformrol() {
	document.getElementById('id_caja_formulario_rol').style.display = 'none';
}



function mensajeKO(idElemento, codigoerror){

	document.getElementById('id_texterror').classList.add(codigoerror); 
	//document.getElementById('id_texterror').innerHTML = codigoerror;
	document.getElementById('id_caja_error').style.display = 'block';
	document.getElementById(idElemento).style.borderColor = "#ff0000";
	setLang();

}



function mensajeOK(idElemento) {

	document.getElementById('id_texterror').innerHTML = '';
	document.getElementById('id_caja_error').style.display = 'none';
	document.getElementById(idElemento).style.borderColor = "#00e600";

}

/**Función para crear un formulario oculto*/
function crearformoculto(name, action){

	if ( $("#" + name).length == 0) {

		var formu = document.createElement('form');
		document.body.appendChild(formu);
	    formu.name = name;
	    formu.action = action; 
	    formu.id = name;  
	    formu.style.display = "none";

	} 
}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(idform, name, value) {

	formulario = document.getElementById(idform);
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}

function mensajeactionOK(codigo) {

	//document.getElementById('id_texterror').innerHTML = codigo;
	document.getElementById('id_texterror').classList.add(codigo);
	document.getElementById('id_caja_error').style.borderColor = "#00e600";
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

function mensajeFAIL(codigoerror) {

	//document.getElementById('id_texterror').innerHTML = codigoerror;
	document.getElementById('id_texterror').classList.add(codigoerror);
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

/**Función para mostrar mensaje de error cuando fallan las peticiones ajax*/
function mensajeHTTPFAIL(status) {
	var idioma = getCookie('lang');

	if (status === 500) {
		mensajeFAIL("MENSAJE_ERROR_INTERNO");
	} else if (status === 403) {
		mensajeFAIL("ERROR_AUTENTICACION");
	} else if (status === 0) {
		mensajeFAIL("ERR_CONNECTION_REFUSED");
	}

	setLang();
}



function cerrarMensajeError(){
	document.getElementById('id_texterror').classList.remove(document.getElementById('id_texterror').classList);
	//codigoanterior = document.getElementById('id_texterror').classList;
	//document.getElementById('id_texterror').classList.remove(codigoanterior);
	document.getElementById('id_caja_error').style.display = 'none';
}

function MinSize(idElemento, minSize) {

	let elemento;
	elemento = document.getElementById(idElemento).value;
	if (elemento.length < minSize) {
		return false;
	}
	else {
		return true;
	}
}

function MaxSize(idElemento, maxSize) {

	elemento = document.getElementById(idElemento).value;

	if (elemento.length > maxSize) {
		return false;
	}
	else {
		return true;
	}
}


function letrassinacentoynumeros(idElemento) {
	let expr = /^[a-zA-Z0-9]*$/;
	let valor = document.getElementById(idElemento).value;
	if (!expr.test(valor)) {
		return false;
	}
	return true;
}


function caracteresRestringidos(idElemento) {
	let expr = /[=<>$#{}\][]*/;
	let valor = document.getElementById(idElemento).value;
	if (!expr.test(valor)) {
		return false;
	}
	return true;
}

function SoloNumeros(idElemento) {
	let val = document.getElementById(idElemento).value;
	let expr1 = /^[0-9]*$/;
	if (!expr1.test(val)) {
		return false;
	}
	return true;
}

function Sololetras(idElemento) {
	let expr = new RegExp('^[a-zA-Z]*$');
	let valor = document.getElementById(idElemento).value;
	if (!expr.test(valor)) {
		return false;
	}
	return true;
}

function SololetrasYpunto(idElemento) {
	let expr = new RegExp('^[a-zA-Z\.]*$');
	let valor = document.getElementById(idElemento).value;
	if (!expr.test(valor)) {
		return false;
	}
	return true;
}

function extensionOK(idElemento) {
	let valor = document.getElementById(idElemento).value;
	let expr1 = /\.png$/;
	let expr2 = /\.jpg$/;

	if (!expr1.test(valor) && !expr2.test(valor)) {
		return false;
	}
	return true;
}


function encriptarpassword() {
	document.getElementById('id_contrasena').value = hex_md5(document.getElementById('id_contrasena').value);
	return true;
}

function incluircabecera() {

	$("#id_caja_superior").html = "";
	let incluir = "<table id='id_tabla_idiomas'>" +
		"<tr>" +
		"<td onclick=\"setLang(\'ES\');\">ES</td>" +
		"<td onclick=\"setLang(\'EN\');\">EN</td>" +
		"<td onclick=\"setLang(\'GA\');\">GA</td>" +
		"</tr>" +
		"</table>";

	if (getCookie('usuarioSistema') === null) {
		let temp = "Usuario :" + getCookie('usuarioSistema');
		incluir += temp + "<br><a href='javascript:desconectar();'>Desconectar</a>";
	}

	$("#id_caja_superior").append(incluir);

}

function esta_autenticado(){
	if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
			window.location.href = "login.html";
	 }
	 else{
		 let temp = "Usuario: "+getCookie('usuarioSistema');
		 temp += "<br><a href='javascript:desconectar();'>Desconectar</a>";
		 $("#id_caja_superior").append(temp);
	 }
	
}