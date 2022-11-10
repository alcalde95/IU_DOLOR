

function comprobar_form_rol() {
	alert('entro en comprobar_form_rol');

	if (comprobar_id_rol() && comprobar_nombre_rol() && comprobar_descrip_rol()) {
		return true;
	}
	else {
		return false;
	}
}

function comprobar_form_rol_search() {
	alert('entro en comprobar_form_rol_search');

	if (comprobar_id_rol_search() && comprobar_nombre_rol_search() && comprobar_descrip_rol_search()) {
		return true;
	}
	else {
		return false;
	}
}



function comprobar_id_rol() {

	if (!MinSize('id_rol', 1)) {
		mensajeKO('id_rol', 'id_rol_menor_ko')
		return false;
	}

	if (!MaxSize('id_rol', 4)) {
		mensajeKO('id_rol', 'id_rol_mayor_ko')
		return false;
	}


	if (!SoloNumeros('id_rol')) {

		mensajeKO('id_rol', 'id_rol_formato_ko');

	}



	mensajeOK('id_rol');
	return true;

}

function comprobar_id_rol_search() {

	if (!MaxSize('id_rol', 4)) {
		mensajeKO('id_accion', 'id_rol_mayor_ko')
		return false;
	}


	if (!SoloNumeros('id_rol')) {

		mensajeKO('id_rol', 'id_rol_formato_ko');

	}


	mensajeOK('id_rol');
	return true;

}



function comprobar_nombre_rol() {
	if (!MinSize('nombre_rol', 6)) {
		mensajeKO('nombre_rol', 'nombre_universal_menor_ko');
		return false;
	}

	if (!MaxSize('nombre_rol', 48)) {
		mensajeKO('nombre_rol', 'nombre_universal_mayor_ko');
		return false;
	}
	if (!Sololetras('nombre_rol')) {
		mensajeKO('nombre_rol', 'nombre_universal_formato_ko');
		return false;
	}


	mensajeOK('nombre_rol');
	return true;


}

function comprobar_nombre_rol_search() {

	if (!MaxSize('nombre_rol', 48)) {
		mensajeKO('nombre_rol', 'nombre_universal_mayor_ko');
		return false;
	}
	if (!Sololetras('nombre_rol')) {
		mensajeKO('nombre_rol', 'nombre_universal_formato_ko');
		return false;
	}


	mensajeOK('nombre_rol');
	return true;


}

function comprobar_descrip_rol() {
	if (!MinSize('descrip_rol', 20)) {
		mensajeKO('descrip_rol', 'descrip_universal_menor_ko');
		return false;
	}

	if (!MaxSize('descrip_rol', 200)) {
		mensajeKO('descrip_rol', 'descrip_universal_mayor_ko');
		return false;
	}

	/*	if (caracteresRestringidos('descrip_accion')) { revisar
			mensajeKO('descrip_accion', 'El nombre sólo puede contener letras');
			return false;
		}
	*/

	mensajeOK('descrip_rol');
	return true;


}

function comprobar_descrip_rol_search() {

	if (!MaxSize('descrip_rol', 200)) {
		mensajeKO('descrip_rol', 'descrip_universal_mayor_ko');
		return false;
	}

	/*	if (caracteresRestringidos('descrip_accion')) { revisar
			mensajeKO('descrip_accion', 'El nombre sólo puede contener letras');
			return false;
		}
	*/

	mensajeOK('descrip_rol');
	return true;


}





// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDrolBack() {

	alert('peticion a back add');
	ADDrolajax();
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITrolBack() {

	alert('peticion a back edit');
	EDITrolajax();

}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETErolBack() {

	alert('peticion a back delete');
	DELETErolajax();
}

// devolverroles()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad rol

function peticionSEARCHrolBack() {
	alert('peticion a back search');
	SEARCHrolajax();
}

// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_rol() {

	if (comprobar_form_rol()) {
		peticionADDrolBack();
	}


}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_rol() {
	if (comprobar_form_rol()) {
		peticionEDITrolBack();
	}
}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_rol() {

	peticionDELETErolBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_rol() {

	if (comprobar_form_rol_search()) {
		peticionSEARCHrolBack();
	}

}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformrol() {

	// quitar el readonly de los atributos
	$("#id_rol").attr('readonly', false);
	$("#id_rol").val('');
	$("#id_rol").on('blur', false);
	$("#nombre_rol").attr('readonly', false);
	$("#nombre_rol").val('');
	$("#nombre_rol").on('blur', false);
	$("#descrip_rol").attr('readonly', false);
	$("#descrip_rol").val('');
	$("#descrip_rol").on('blur', false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_rol").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: none');

}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action
function rolADDjaxPromesa() {

	crearformoculto('id_form_rol', '');
	insertacampo('id_form_rol', 'controlador', 'rol');
	insertacampo('id_form_rol', 'action', 'ADD');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_rol").serialize(),
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

async function ADDrolajax() {

	var idioma = getCookie('lang');

	await rolADDjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'add_rol_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_rol').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}
function crearformADDrol() {

	// resetear el formulario
	resetearformrol();

	// se rellena el action del formulario
	document.getElementById('id_form_rol').action = 'http://193.147.87.202/procesaform.php';

	document.getElementById('id_rol').onblur = comprobar_id_rol;
	document.getElementById('id_rol').value = '';
	
	document.getElementById('nombre_rol').onblur = comprobar_nombre_rol;
	document.getElementById('nombre_rol').value = '';
	
	document.getElementById('descrip_rol').onblur = comprobar_descrip_rol;
	document.getElementById('descrip_rol').value = '';

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);

	document.getElementById('id_imagen_enviar_form').onclick = add_rol;

	// se muestra el formulario
	document.getElementById('id_caja_formulario_rol').style.display = 'block';

}


function rolEDITjaxPromesa() {

	crearformoculto('id_form_rol', '');
	insertacampo('id_form_rol', 'controlador', 'rol');
	insertacampo('id_form_rol', 'action', 'EDIT');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_rol").serialize(),
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

async function EDITrolajax() {

	var idioma = getCookie('lang');

	await rolEDITjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'edit_rol_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_rol').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}

function crearformEDITrol(id_rol, nombre_rol, descrip_rol) {

	// resetear al formulario
	resetearformrol();

	// se crea el action del formulario 
	$("#id_form_persona").attr('action', 'http://193.147.87.202/procesaform.php');

	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_rol").attr('readonly', true);
	$("#id_rol").blur(comprobar_id_rol);
	$("#id_rol").val(id_rol);
	$("#nombre_rol").blur(comprobar_nombre_rol);
	$("#nombre_rol").val(nombre_rol);
	$("#descrip_rol").blur(comprobar_descrip_rol);
	$("#descrip_rol").val(descrip_rol);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_rol);

	// se muestra el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function rolDELETEjaxPromesa() {

	crearformoculto('id_form_rol', '');
	insertacampo('id_form_rol', 'controlador', 'rol');
	insertacampo('id_form_rol', 'action', 'DELETE');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_rol").serialize(),
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

async function DELETErolajax() {

	var idioma = getCookie('lang');

	await rolDELETEjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'delete_rol_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_rol').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}


function crearformDELETErol(id_rol, nombre_rol, descrip_rol) {

	resetearformrol();

	$("#id_form_rol").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_rol").attr('readonly', 'true')
	$("#id_rol").val(id_rol);


	$("#id_rol").val(id_rol);
	$("#nombre_rol").val(nombre_rol);
	$("#descrip_rol").val(descrip_rol);



	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_rol);

	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

function rolSEARCHAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'rol');
	insertacampo('form_generico', 'action', 'SEARCH');
	insertacampo('form_generico', 'id_rol', document.getElementById('id_rol').value);
	insertacampo('form_generico', 'nombre_rol', document.getElementById('nombre_rol').value);
	insertacampo('form_generico', 'descrip_rol', document.getElementById('descrip_rol').value);
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				alert('res.ok != true');
				reject(res);
			}
			else {
				alert('res.ok == true');
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				alert('fail!!!:' + jqXHR.status);
				mensajeHTTPFAIL(jqXHR.status);
			});
	}
	)
}


async function SEARCHrolajax() {

	var idioma = getCookie('lang');

	await rolSEARCHAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'search_rol_OK';
			}
			getListRoles(res.resource);
			//mensajeOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
	setLang();
	document.getElementById('form_generico').remove();

}

function crearformSEARCHrol() {

	// reseteo el formulario
	resetearformrol();

	// creo la accion para el formulario y el onsubmit
	//$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_rol").on('submit', search_rol);

	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_rol").attr('readonly', false);
	$("#id_rol").blur(comprobar_id_rol_search);
	$("#id_rol").val('');

	$("#nombre_rol").attr('readonly', false)
	$("#nombre_rol").blur(comprobar_nombre_rol_search);
	$("#nombre_rol").val('');

	// pongo el campo de apellidos_persona editable y le asocio la funcion para el onblur
	$("#descrip_rol").attr('readonly', false)
	$("#descrip_rol").blur(comprobar_descrip_rol_search);
	$("#descrip_rol").val('');


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	//botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src = "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_rol").on('click', search_rol);
	//$("#id_form_persona").append(botonsubmit);

	setLang();

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}



function crearformSHOWCURRENTrol(id_rol, nombre_rol, descrip_rol) {

	resetearformrol();

	$("#id_form_rol").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_rol").attr('readonly', 'true')
	$("#id_rol").val(id_rol);

	$("#nombre_rol").attr('readonly', 'true')
	$("#nombre_rol").val(nombre_rol);
	$("#descrip_rol").attr('readonly', 'true')
	$("#descrip_rol").val(descrip_rol);


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/detail4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);

	$("#id_caja_formulario_rol").attr('style', 'display: block');


}

function devolverrolesAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'rol');
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

async function devolverrolesajax() {

	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {

			getListRoles(res.resource);

		})
		.catch((res) => {
			mensajeFAIL(res.code);
			setLang(idioma);
		});

	document.getElementById('form_generico').remove();
}

function getListRoles(listaroles) {

	document.getElementById('id_datosroles').innerHTML = '';


	for (let rol of listaroles) {

		datosfila = "'" + rol.id_rol + "'," + "'" + rol.nombre_rol + "'," + "'" + rol.descrip_rol + "'";

		lineatabla = '<tr><td>' + rol['id_rol'] + '</td><td>' + rol['nombre_rol'] + '</td><td>' + rol['descrip_rol'] + "</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITrol(' + datosfila + ');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETErol(' + datosfila + ');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTrol(' + datosfila + ')";></td>';

		lineatabla += botonedit + botondelete + botonshowcurrent + "</tr>";

		$("#id_datosroles").append(lineatabla);
	}

}

async function pintarselectrolesAjax(deshabilitado = false, convacio = false, rol = null) {

	var idioma = getCookie('lang');
	
	await devolverrolesAjaxPromesa()
		.then((res) => {

			let rol_select = crearselect(convacio, 'id_id_rol', 'id_rol', 'id_rol', 'nombre_rol', res.resource, rol);
			$("#caja_select_rol").append(rol_select);
			if (deshabilitado) {
				$("#id_id_rol:not(:selected)").attr('disabled', true);
			}

		})
		.catch((res) => {
			mensajeFAIL(res.code);
			setLang(idioma);
		});

	document.getElementById('form_generico').remove();
}
