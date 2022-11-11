const mensaje = (idElemento, texto = '') => {
	if (texto === '') {
		document.getElementById('id_texterror').innerHTML = ''
		document.getElementById('id_caja_error').style.display = 'none'
		document.getElementById(idElemento).style.borderColor = "#00e600"
	} else {
		document.getElementById('id_texterror').innerHTML = texto
		document.getElementById('id_caja_error').style.display = 'block'
		document.getElementById(idElemento).style.borderColor = "#ff0000"
	}
}
// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_persona() {
	alert('entro en comprobar_form_persona');
	if(comprobar_dni() && comprobar_nombre() && comprobar_apellido() && comprobar_fecha() && comprobar_email() && comprobar_direccion() && comprobar_telefono()){
		return true
	}
	return false
}

function comprobar_form_persona_search() {
	alert('entro en comprobar_form_persona');
	if(comprobar_dni_search() && comprobar_nombre_search() && comprobar_apellido_search() && comprobar_fecha_search() && comprobar_email_search() && comprobar_direccion_search() && comprobar_telefono_search()){
		return true
	}
	return false
}








function comprobar_dni() {
	if (!MaxSize('id_dni', 9)) {
		mensajeKO('id_dni', 'dni_mayor_ko');
		return false;
	}

	if (!MinSize('id_dni', 9)) {
		mensajeKO('id_dni','dni_menor_ko');
		return false;
	}

	let numero, letr, letra
	var expresion_regular_dni
	let dni = document.getElementById('id_dni').value;

	expresion_regular_dni = /^[0-9]{8}[a-zA-Z]$/;

	if (expresion_regular_dni.test(dni) == true) {
		numero = dni.substr(0, dni.length - 1);
		letr = dni.substr(dni.length - 1, 1);
		numero = numero % 23;
		letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
		letra = letra.substring(numero, numero + 1);
		if (letra != letr.toUpperCase()) {
			mensajeKO('id_dni','dni_letra_incorrecta');
		} else {
			mensajeOK('id_dni');
			return true;
		}
	} else {
		mensajeKO('id_dni', 'dni_formato_ko');
		return false;
	}

	mensajeOK('id_dni');
	return true;
}


function comprobar_nombre() {
	if (!MinSize('id_nombre', 3)) {
		mensajeKO('id_nombre', 'nombre_menor_ko');
		return false;
	}

	if (!MaxSize('id_nombre', 45)) {
		mensajeKO('id_nombre','nombre_mayor_ko');
		return false;
	}
	if (!Sololetras('id_nombre')) {
		mensajeKO('id_nombre', 'nombre_formato_ko');
		return false;
	}


	mensajeOK('id_nombre');
	return true;


}

function comprobar_apellido() {
	if (!MinSize('id_apellido', 5)) {
		mensajeKO('id_apellido','apellido_menor_ko')
		return false;
	}

	if (!MaxSize('id_apellido', 100)) {
		mensajeKO('id_apellido','apellido_mayor_ko')
		return false;
	}
	if (!Sololetras('id_apellido')) {
		mensajeKO('id_apellido','apellido_formato_ko');
		return false;
	}
	mensajeOK('id_apellido')
	return true;


}


function comprobar_fecha() {

	if (!MinSize('id_fecha_nacimiento', 5)) {
		mensajeKO('id_fecha_nacimiento', 'fecha_menor_ko')
		return false;
	}

	if (!MaxSize('id_fecha_nacimiento', 100)) {
		mensajeKO('id_fecha_nacimiento',)
		return false;
	}
	let fecha = document.getElementById('id_fecha_nacimiento').value;
	let expresion = /^[0-9]{4}[/-]{1}[0-9]{2}[/-]{1}[0-9]{2}/;
	if (!expresion.test(fecha)) {
		mensajeKO('id_fecha_nacimiento', 'fecha_formato_ko');
		return false;
	}
	mensajeOK('id_fecha_nacimiento');
	return true;
}

function comprobar_email() {

	if (!MinSize('id_email', 8)) {
		mensajeKO('id_email', 'email_menor_ko')
		return false;
	}

	if (!MaxSize('id_email', 45)) {
		mensajeKO('id_email', 'email_mayor_ko')
		return false;
	}

	let expr = /^[a-z0-9\-\_\.\']+[a-z0-9\-\_\']\@[a-z0-9\-\_\'][a-z0-9\-\_\.\']*.[a-z0-9\-\_\.\']+$/;
	let val = document.getElementById('id_email').value;
	if (!expr.test(val)) {
		mensajeKO('id_email','email_formato_ko');
		return false;

	}
	mensajeOK('id_email');
	return true;


}

function comprobar_direccion() {

	if (!MinSize('id_direccion', 8)) {
		mensajeKO('id_direccion', 'direccion_menor_ko')
		return false;
	}

	if (!MaxSize('id_direccion', 45)) {
		mensajeKO('id_direccion', 'direccion_mayor_ko')
	}
//acordarse de poner la comprobación pertinente aquí
	mensajeOK('id_direccion');
	return true;

}

function comprobar_telefono() {

	if (!MinSize('id_telefono', 9)) {
		mensajeKO('id_telefono', 'tlf_menor_ko')
		return false;
	}

	if (!MaxSize('id_telefono', 9)) {
		mensajeKO('id_telefono','tlf_mayor_ko')
		return false;
	}


	let val = document.getElementById('id_telefono').value;
	let expr1 = /([0-9]){9}/g;
	if (!expr1.test(val)) {
		mensajeKO('id_telefono','tlf_formato_ko');
		return false;
	}

	let expr2 = /[6-9][0-9]{8}/;

	if (!expr2.test(val)) {
		mensajeKO('id_telefono','tlf_formato_esp_ko');
		return false;
	}

	mensajeOK('id_telefono');
	return true;

}



function comprobar_foto() {
	let fot=document.getElementById('id_foto').value;
	if(fot!=""){
		if (!MinSize('id_foto', 6)) {
			mensajeKO('id_foto', 'foto_menor_ko')
			return false;
		}
	
		if (!MaxSize('id_foto', 40)) {
			mensajeKO('id_foto', 'foto_mayor_ko')
			return false;
		}
		if (!SololetrasYpunto('id_foto')) {//acordarme revisar esto
			mensajeKO('id_foto','foto_formato_ko')
			return false;
		}
		if (!extensionOK('id_foto')) {
			mensajeKO('id_foto','foto_extension_ko')
			return false;
		}
		mensajeOK('id_foto');
		return true;
	}
	mensajeOK('id_foto');
		return true;

}



function comprobar_dni_search() {

	if (!MaxSize('id_dni', 9)) {
		mensajeKO('id_dni', 'dni_mayor_ko');
		return false;
	}

	var expresion_regular_dni
	let dni = document.getElementById('id_dni').value;

	expresion_regular_dni = /^[0-9]{0,8}[a-zA-Z]{0,1}$/;

	if (!expresion_regular_dni.test(dni) == true) {
		mensajeKO('id_dni', 'dni_formato_ko');
		return false;
	}
	
	mensajeOK('id_dni');
	return true;
}


function comprobar_nombre_search() {


	if (!MaxSize('id_nombre', 45)) {
		mensajeKO('id_nombre', 'nombre_mayor_ko');
		return false;
	}
	if (!Sololetras('id_nombre')) {
		mensajeKO('id_nombre', 'nombre_formato_ko');
		return false;
	}


	mensajeOK('id_nombre');
	return true;


}

function comprobar_apellido_search() {


	if (!MaxSize('id_apellido', 100)) {
		mensajeKO('id_apellido', 'apellido_mayor_ko')
		return false;
	}
	if (!Sololetras('id_apellido')) {
		mensajeKO('id_apellido', 'apellido_formato_ko');
		return false;
	}
	
	mensajeOK('id_apellido');
	return true;


}


function comprobar_fecha_search() {


	if (!MaxSize('id_fecha_nacimiento', 100)) {
		mensajeKO('id_fecha_nacimiento', 'fecha_mayor_ko')
		return false;
	}
	mensajeOK('id_fecha_nacimiento');
	return true;
}

function comprobar_email_search() {


	if (!MaxSize('id_email', 45)) {
		mensajeKO('id_email', 'email_mayor_ko')
		return false;
	}

	
	mensajeOK('id_email');
	return true;


}

function comprobar_direccion_search() {

	if (!MaxSize('id_direccion', 45)) {
		mensajeKO('id_direccion', 'direccion_mayor_ko')
	}

	mensajeOK('id_direccion');
	return true;

}

function comprobar_telefono_search() {


	if (!MaxSize('id_telefono', 9)) {
		mensajeKO('id_telefono', 'tlf_mayor_ko')
		return false;
	}


	let val = document.getElementById('id_telefono').value;
	let expr1 = /([0-9]){0,9}/g;
	if (!expr1.test(val)) {
		mensajeKO('id_telefono', 'tlf_formato_ko');
		return false;
	}

	

	mensajeOK('id_telefono');
	return true;

}



function comprobar_foto_search() {

	

	if (!MaxSize('id_foto', 40)) {
		mensajeKO('id_foto', 'foto_mayor_ko')
		return false;
	}
	if (!SololetrasYpunto('id_foto')) {//acordarme revisar esto
		mensajeKO('id_foto', 'foto_formato_ko')
		return false;
	}
	
	mensajeOK('id_foto');
	return true;

}




function peticionADDpersonaBack() {
	
	alert('peticion a back add');
	ADDpersonaajax();

}
function peticionEDITpersonaBack() {

	alert('peticion a back edit');
	EDITpersonaajax();

}
function peticionDELETEpersonaBack() {

	alert('peticion a back delete');
	DELETEpersonaajax();

}

function peticionSEARCHpersonaBack() {

	alert('peticion a back search');
	SEARCHpersonaajax();

}



function add_persona() {

	if (comprobar_form_persona()) {
		peticionADDpersonaBack();
	}

}


function edit_persona() {

	if (comprobar_form_persona()) {
		peticionEDITpersonaBack();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_persona() {

	peticionDELETEpersonaBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_persona() {
	if(comprobar_form_persona_search()){
		peticionSEARCHpersonaBack();
	}
	
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformpersona() {

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly', false);
	$("#id_dni").val('');
	$("#id_dni").on('blur', false);
	$("#id_nombre").attr('readonly', false);
	$("#id_nombre").val('');
	$("#id_apellidos").attr('readonly', false);
	$("#id_apellidos").val('');
	$("#id_fecha_nacimiento").attr('readonly', false);
	$("#id_fecha_nacimiento").val('');
	$("#id_email").attr('readonly', false);
	$("#id_email").val('');
	$("#id_foto").attr('readonly', false);
	$("#id_foto").val('');
	$("#id_direccion").attr('readonly', false);
	$("#id_direccion").val('');
	$("#id_telefono").attr('readonly', false);
	$("#id_telefono").val('');


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_persona").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: none');

	setLang();

}

/**
 *  crearformADDusuario() creado con javascript
 *  Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html 
 * Se crea una input image para actuar como un input submit y que el formulario 
 * llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
 * y se ejecuta el action
 * 
 */
function personaADDAjaxPromesa() {

	crearformoculto('id_form_persona', '');
	insertacampo('id_form_persona', 'controlador', 'persona');
	insertacampo('id_form_persona', 'action', 'ADD');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function ADDpersonaajax() {

	var idioma = getCookie('lang');
	alert('1');
	await personaADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'add_persona_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_persona').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	
	window.location.reload();	
}


function crearformADDpersona() {

	// resetear el formulario
	resetearformpersona();

	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	document.getElementById('id_nombre').onblur = comprobar_nombre;
	document.getElementById('id_nombre').value = '';

	document.getElementById('id_apellido').onblur = comprobar_apellido;
	document.getElementById('id_apellido').value = '';

	document.getElementById('id_fecha_nacimiento').onblur = comprobar_fecha;
	document.getElementById('id_fecha_nacimiento').value = '';

	document.getElementById('id_direccion').onblur = comprobar_direccion;
	document.getElementById('id_direccion').value = '';

	document.getElementById('id_telefono').onblur = comprobar_telefono;
	document.getElementById('id_telefono').value = '';

	document.getElementById('id_email').onblur = comprobar_email;
	document.getElementById('id_email').value = '';

	document.getElementById('id_foto').onblur = comprobar_foto;
	document.getElementById('id_foto').value = '';



	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_persona;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_persona').style.display = 'block';


}

//  () creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action


function personaEDITjaxPromesa() {

	crearformoculto('id_form_persona', '');
	insertacampo('id_form_persona', 'controlador', 'persona');
	insertacampo('id_form_persona', 'action', 'EDIT');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function EDITpersonaajax() {

	var idioma = getCookie('lang');

	await personaEDITjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'edit_persona_OK';
			}
			mensajeOK(res.code);
			window.location.reload();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_persona').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	
}



function crearformEDITpersona(dni, nombre, apellido, fecha_nacimiento, direccion, telefono, email, foto,) {

	// resetear al formulario
	resetearformpersona();

	// se crea el action del formulario 
	$("#id_form_persona").attr('action', 'http://193.147.87.202/procesaform.php');

	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly', true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);
	$("#id_nombre").blur(comprobar_nombre);
	$("#id_nombre").val(nombre);
	$("#id_apellido").blur(comprobar_apellido);
	$("#id_apellido").val(apellido);
	$("#id_fecha_nacimiento").blur(comprobar_fecha);
	$("#id_fecha_nacimiento").val(fecha_nacimiento);
	$("#id_email").blur(comprobar_email);
	$("#id_email").val(email);
	$("#id_foto").blur(comprobar_foto);
	$("#id_foto").val(foto);
	$("#id_direccion").blur(comprobar_direccion);
	$("#id_direccion").val(direccion);
	$("#id_telefono").blur(comprobar_telefono);
	$("#id_telefono").val(telefono);


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_persona);

	// se muestra el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function personaDELETEjaxPromesa() {

	crearformoculto('id_form_persona', '');
	insertacampo('id_form_persona', 'controlador', 'persona');
	insertacampo('id_form_persona', 'action', 'DELETE');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function DELETEpersonaajax() {

	var idioma = getCookie('lang');

	await personaDELETEjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'delete_persona_OK';
			}
			mensajeOK(res.code);
			window.location.reload();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_persona').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	
}

function crearformDELETEpersona(dni, nombre, apellido, fecha_nacimiento, direccion, telefono, email, foto) {

	resetearformpersona();

	$("#id_form_persona").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_dni").attr('readonly', 'true')
	$("#id_dni").val(dni);


	$("#id_nombre").val(nombre);
	$("#id_apellido").val(apellido);
	$("#id_fecha_nacimiento").val(fecha_nacimiento);
	$("#id_email").attr('readonly', 'true')
	$("#id_email").val(email);
	$("#id_foto").val(foto);
	$("#id_direccion").val(direccion);
	$("#id_telefono").val(telefono);


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_persona);

	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

function personaSEARCHAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'persona');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','dni', document.getElementById('id_dni').value);
	insertacampo('form_generico','nombre_persona', document.getElementById('id_nombre').value);
	insertacampo('form_generico','apellidos_persona', document.getElementById('id_apellido').value);
	insertacampo('form_generico','fechaNacimiento_persona', document.getElementById('id_fecha_nacimiento').value);
	insertacampo('form_generico','direccion_persona', document.getElementById('id_direccion').value);
	insertacampo('form_generico','telefono_persona', document.getElementById('id_telefono').value);
	insertacampo('form_generico','email_persona', document.getElementById('id_email').value);
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				alert('res.ok != true');
				reject(res);
			}
			else{
				alert('res.ok == true');
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			alert('fail!!!:' + jqXHR.status);
			mensajeHTTPFAIL(jqXHR.status);
		});
	}
	)
}


async function SEARCHpersonaajax() {
	
	var idioma = getCookie('lang');
	
	await personaSEARCHAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_persona_OK';	}
			getListPersonas(res.resource);
			//mensajeOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}

function crearformSEARCHpersona() {

	// reseteo el formulario
	resetearformpersona();

	// creo la accion para el formulario y el onsubmit
	//$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_persona").on('submit', search_persona);

	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);
	$("#id_dni").val('');

	// pongo el campo de nombre_persona editable y le asocio la funcion para el onblur
	$("#id_nombre").attr('readonly', false)
	$("#id_nombre").blur(comprobar_nombre_search);
	$("#id_nombre").val('');

	// pongo el campo de apellidos_persona editable y le asocio la funcion para el onblur
	$("#id_apellido").attr('readonly', false)
	$("#id_apellido").blur(comprobar_apellido_search);
	$("#id_apellido").val('');

	// pongo el campo de fechaNacimiento_persona editable y le asocio la funcion para el onblur
	$("#id_fecha_nacimiento").attr('readonly', false)
	$("#id_fecha_nacimiento").blur(comprobar_fecha_search);
	$("#id_fecha_nacimiento").val('');

	// pongo el campo de direccion_persona editable y le asocio la funcion para el onblur
	$("#id_direccion").attr('readonly', false)
	$("#id_direccion").blur(comprobar_direccion_search);
	$("#id_direccion").val('');

	// pongo el campo de telefono_persona editable y le asocio la funcion para el onblur
	$("#id_telefono").attr('readonly', false)
	$("#id_telefono").blur(comprobar_telefono_search);
	$("#id_telefono").val('');

	// pongo el campo de email_persona editable y le asocio la funcion para el onblur
	$("#id_email").attr('readonly', false)
	$("#id_email").blur(comprobar_email_search);
	$("#id_email").val('');

	// pongo el campo de foto_persona editable y le asocio la funcion para el onblur
	$("#id_foto").attr('readonly', false)
	$("#id_foto").blur(comprobar_foto_search);
	$("#id_foto").val('');

	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	//botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src = "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_persona").on('click', search_persona);
	//$("#id_form_persona").append(botonsubmit);

	setLang();

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}




function crearformSHOWCURRENTpersona(dni, nombre, apellido, fecha_nacimiento, email, foto, direccion, telefono, es_jubilado, descripcion) {

	resetearformpersona();

	$("#id_form_persona").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_dni").attr('readonly', 'true')
	$("#id_dni").val(dni);

	$("#id_nombre").attr('readonly', 'true')
	$("#id_nombre").val(nombre);
	$("#id_apellido").attr('readonly', 'true')
	$("#id_apellido").val(apellido);
	$("#id_fecha_nacimiento").attr('readonly', 'true')
	$("#id_fecha_nacimiento").val(fecha_nacimiento);
	$("#id_email").attr('readonly', 'true')
	$("#id_email").val(email);
	$("#id_foto").attr('readonly', 'true')
	$("#id_foto").val(foto);
	$("#id_direccion").attr('readonly', 'true')
	$("#id_direccion").val(direccion);
	$("#id_telefono").attr('readonly', 'true')
	$("#id_telefono").val(telefono);


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/detail4.png";	
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);

	$("#id_caja_formulario_persona").attr('style', 'display: block');


}




function devolverpersonasAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'persona');
	insertacampo('form_generico', 'action', 'SEARCH');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function devolverpersonasajax() {

	var idioma = getCookie('lang');

	await devolverpersonasAjaxPromesa()
		.then((res) => {

			getListPersonas(res.resource);

		})
		.catch((res) => {
			mensajeFAIL(res.code);
			setLang(idioma);
		});

	document.getElementById('form_generico').remove();
}


function getListPersonas(listapersonas) {

	document.getElementById('id_datospersonas').innerHTML = '';

	for (let persona of listapersonas) {

		datosfila = "'" + persona.dni + "'," + "'" + persona.nombre_persona + "'," + "'" + persona.apellidos_persona + "'," + "'" + persona.fechaNacimiento_persona + "'," + "'" + persona.direccion_persona + "'," + "'" + persona.telefono_persona + "'," + "'" + persona.email_persona + "'," + "'" + persona.foto_persona + "'";

		lineatabla = '<tr><td>' + persona['dni'] + '</td><td>' + persona['nombre_persona'] + '</td><td>' + persona['apellidos_persona'] + '</td><td>' + persona['fechaNacimiento_persona'] + '</td><td>' + persona['direccion_persona'] + '</td><td>' + persona['telefono_persona'] + '</td><td>' + persona['email_persona'] + '</td><td>' + persona['foto_persona'] + "</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITpersona(' + datosfila + ');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEpersona(' + datosfila + ');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTpersona(' + datosfila + ')";></td>';

		lineatabla += botonedit + botondelete + botonshowcurrent + "</tr>";

		$("#id_datospersonas").append(lineatabla);
	}

}


