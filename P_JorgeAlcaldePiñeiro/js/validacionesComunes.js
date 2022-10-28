function ponerinvisibleerror(){
	document.getElementById('id_caja_error').style.display='none';
}

function ponerinvisibleformusuario(){
	document.getElementById('id_caja_formulario_usuario').style.display = 'none';
}

function ponerinvisibleformpersona(){
	document.getElementById('id_caja_formulario_persona').style.display = 'none';
}

function ponerinvisibleformaccion(){
	document.getElementById('id_caja_formulario_accion').style.display = 'none';
}
function ponerinvisibleformfuncionalidad(){
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'none';
}

function ponerinvisibleformrol(){
	document.getElementById('id_caja_formulario_rol').style.display = 'none';
}

function mensajeKO(idElemento, texto){

	document.getElementById('id_texterror').innerHTML = texto;
	document.getElementById('id_caja_error').style.display = 'block';
	document.getElementById(idElemento).style.borderColor = "#ff0000";

}

function mensajeOK(idElemento){

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
function insertacampo(idform, name, value){
	
	formulario = document.getElementById(idform);
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}

function mensajeactionOK(codigo){

	//document.getElementById('id_texterror').innerHTML = codigo;
	document.getElementById('id_texterror').classList.add(codigo);
	document.getElementById('id_caja_error').style.borderColor = "#00e600"; 
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

function mensajeFAIL(codigoerror){

	//document.getElementById('id_texterror').innerHTML = codigoerror;
	document.getElementById('id_texterror').classList.add(codigoerror); 
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

/**Función para mostrar mensaje de error cuando fallan las peticiones ajax*/
function mensajeHTTPFAIL(status){
	var idioma = getCookie('lang');
	
	if (status === 500) {
	mensajeFAIL("MENSAJE_ERROR_INTERNO");
	} else if (status === 403) {
	mensajeFAIL("ERROR_AUTENTICACION");
	} else if (status === 0){
	mensajeFAIL("ERR_CONNECTION_REFUSED");
	}

	setLang();
}



function cerrarMensajeError(){
	document.getElementById('id_texterror').classList.remove;
	//codigoanterior = document.getElementById('id_texterror').classList;
	//document.getElementById('id_texterror').classList.remove(codigoanterior);
	document.getElementById('id_caja_error').style.display = 'none';
}

function size_minimo(idElemento,longitudminima){

	let elemento;
	elemento = document.getElementById(idElemento).value;
	if (elemento.length < longitudminima){
		return false;
	}
	else{
		return true;
	}
}

function size_maximo(idElemento,longitudmaxima){
	
	elemento = document.getElementById(idElemento).value;
	if (elemento.length > longitudmaxima){
		return false;
	}
	else{
		return true;
	}
}

function letras_sin_acento_y_numeros(idElemento){

	caracteres = /^[a-zA-Z0-9]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function letras_con_acento_guion_y_espacio(idElemento){

	caracteres = /^[a-zA-Z0-9\s\-]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function numeros_y_barra_diagonal(idElemento){

	caracteres = /^[0-9\-]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_telefono(idElemento){

	caracteres = /^[6-9][0-9]{8}$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function solo_numeros(idElemento){

	caracteres = /^[0-9]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function caracteres_email(idElemento){

	caracteres = /^[a-z0-9\-\_\.\'\@]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_email(idElemento){

	caracteres = /^[a-z0-9\-\_\.\']+[a-z0-9\-\_\']\@[a-z0-9\-\_\'][a-z0-9\-\_\.\']*.[a-z0-9\-\_\.\']+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function caracteres_foto(idElemento){

	caracteres = /^[a-zA-Z0-9\.\/\\]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_foto(idElemento){

	caracteres = /^[a-zA-Z0-9\\\/\.]+\.(png|jpg)$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_direccion(idElemento){

	caracteres = /^[a-zA-Z0-9Á-ÿ\s\/\-\,\'\º\ª]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function encriptarpassword(){
	document.getElementById('id_contrasena').value = hex_md5(document.getElementById('id_contrasena').value);
	return true;
}