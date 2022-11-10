function comprobar_form_funcionalidad() {
	alert('entro en comprobar_form_rol');

	if (comprobar_id_funcionalidad() && comprobar_nombre_funcionalidad() && comprobar_descrip_funcionalidad()) {
		return true;
	}
	else {
		return false;
	}
}

function comprobar_form_funcionalidad_search() {
	alert('entro en comprobar_form_funcionalidad_search');

	if (comprobar_id_funcionalidad_search() && comprobar_nombre_funcionalidad_search() && comprobar_descrip_funcionalidad_search()) {
		return true;
	}
	else {
		return false;
	}
}



function comprobar_id_funcionalidad() {

	if (!MinSize('id_funcionalidad', 1)) {
		mensajeKO('id_funcionalidad', 'id_funcionalidad_menor_ko')
		return false;
	}

	if (!MaxSize('id_funcionalidad', 4)) {
		mensajeKO('id_funcionalidad', 'id_funcionalidad_mayor_ko')
		return false;
	}


	if (!SoloNumeros('id_funcionalidad')) {

		mensajeKO('id_funcionalidad', 'id_funcionalidad_formato_ko');

	}



	mensajeOK('id_funcionalidad');
	return true;

}

function comprobar_id_funcionalidad_search() {

	if (!MaxSize('id_funcionalidad', 4)) {
		mensajeKO('id_funcionalidad', 'id_funcionalidad_mayor_ko')
		return false;
	}


	if (!SoloNumeros('id_funcionalidad')) {

		mensajeKO('id_funcionalidad', 'id_funcionalidad_formato_ko');

	}


	mensajeOK('id_funcionalidad');
	return true;

}



function comprobar_nombre_funcionalidad() {
	if (!MinSize('nombre_funcionalidad', 6)) {
		mensajeKO('nombre_funcionalidad', 'nombre_universal_menor_ko');
		return false;
	}

	if (!MaxSize('nombre_funcionalidad', 48)) {
		mensajeKO('nombre_funcionalidad', 'nombre_universal_mayor_ko');
		return false;
	}
	if (Sololetras('nombre_funcionalidad')) {
		mensajeKO('nombre_funcionalidad', 'nombre_universal_formato_ko');
		return false;
	}


	mensajeOK('nombre_funcionalidad');
	return true;


}

function comprobar_nombre_funcionalidad_search() {

	if (!MaxSize('nombre_funcionalidad', 48)) {
		mensajeKO('nombre_funcionalidad', 'nombre_universal_mayor_ko');
		return false;
	}
	if (Sololetras('nombre_funcionalidad')) {
		mensajeKO('nombre_funcionalidad', 'nombre_universal_formato_ko');
		return false;
	}


	mensajeOK('nombre_funcionalidad');
	return true;


}

function comprobar_descrip_funcionalidad() {
	if (!MinSize('descrip_funcionalidad', 20)) {
		mensajeKO('descrip_funcionalidad', 'descrip_universal_menor_ko');
		return false;
	}

	if (!MaxSize('descrip_funcionalidad', 200)) {
		mensajeKO('descrip_funcionalidad', 'descrip_universal_mayor_ko');
		return false;
	}

	/*	if (caracteresRestringidos('descrip_accion')) { revisar
			mensajeKO('descrip_accion', 'El nombre sólo puede contener letras');
			return false;
		}
	*/

	mensajeOK('descrip_funcionalidad');
	return true;


}

function comprobar_descrip_funcionalidad_search() {

	if (!MaxSize('descrip_funcionalidad', 200)) {
		mensajeKO('descrip_funcionalidad', 'descrip_universal_mayor_ko');
		return false;
	}

	/*	if (caracteresRestringidos('descrip_accion')) { revisar
			mensajeKO('descrip_accion', 'El nombre sólo puede contener letras');
			return false;
		}
	*/

	mensajeOK('descrip_funcionalidad');
	return true;


}





// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDfuncionalidadBack() {

	alert('peticion a back add');
	ADDfuncionalidadajax();
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITfuncionalidadBack() {

	alert('peticion a back edit');
	EDITfuncionalidadajax();

}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEfuncionalidadBack() {

	alert('peticion a back delete');
	DELETEfuncionalidadajax();
}

function peticionDELETEfuncionalidadBack() {

	alert('Entrando a search funcionalidad');
	SEARCHfuncionalidadajax();
}


// devolverroles()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad rol


// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_funcionalidad() {

	if (comprobar_form_funcionalidad()) {
		peticionADDfuncionalidadBack();
	}



}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_funcionalidad() {
	if (comprobar_form_funcionalidad()) {
		peticionEDITfuncionalidadBack();
	}
}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_funcionalidad() {

	peticionDELETEfuncionalidadBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_funcionalidad() {

	if (comprobar_nombre_funcionalidad_search()) {
		peticionDELETEfuncionalidadBack();
	}

}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformfuncionalidad() {

	// quitar el readonly de los atributos
	$("#id_funcionalidad").attr('readonly', false);
	$("#id_funcionalidad").val('');
	$("#id_funcionalidad").on('blur', false);
	$("#nombre_funcionalidad").attr('readonly', false);
	$("#nombre_funcionalidad").val('');
	$("#nombre_funcionalidad").on('blur', false);
	$("#descrip_funcionalidad").attr('readonly', false);
	$("#descrip_funcionalidad").val('');
	$("#descrip_funcionalidad").on('blur', false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_funcionalidad").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: none');

}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action
function funcionalidadADDjaxPromesa() {

	crearformoculto('id_form_funcionalidad', '');
	insertacampo('id_form_funcionalidad', 'controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad', 'action', 'ADD');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_funcionalidad").serialize(),
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

async function ADDfuncionalidadajax() {

	var idioma = getCookie('lang');

	await funcionalidadADDjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'add_funcionalidad_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_funcionalidad').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}
function crearformADDfuncionalidad() {

	// resetear el formulario
	resetearformfuncionalidad();

	// se rellena el action del formulario
	document.getElementById('id_form_funcionalidad').action = 'http://193.147.87.202/procesaform.php';

	document.getElementById('id_funcionalidad').onblur = comprobar_id_funcionalidad;
	document.getElementById('id_funcionalidad').value = '';

	document.getElementById('nombre_funcionalidad').onblur = comprobar_nombre_funcionalidad;
	document.getElementById('nombre_funcionalidad').value = '';

	document.getElementById('descrip_funcionalidad').onblur = comprobar_descrip_funcionalidad;
	document.getElementById('descrip_funcionalidad').value = '';

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_funcionalidad;

	// se muestra el formulario
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'block';

}

//  () creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function funcionalidadEDITjaxPromesa() {

	crearformoculto('id_form_funcionalidad', '');
	insertacampo('id_form_funcionalidad', 'controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad', 'action', 'EDIT');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_funcionalidad").serialize(),
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

async function EDITfuncionalidadajax() {

	var idioma = getCookie('lang');

	await funcionalidadEDITjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'edit_funcionalidad_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_funcionalidad').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}

function crearformEDITfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad) {

	// resetear al formulario
	resetearformfuncionalidad();

	// se crea el action del formulario 

	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_funcionalidad").attr('readonly', true);
	$("#id_funcionalidad").blur(comprobar_id_funcionalidad);
	$("#id_funcionalidad").val(id_funcionalidad);
	$("#nombre_funcionalidad").blur(comprobar_nombre_funcionalidad);
	$("#nombre_funcionalidad").val(nombre_funcionalidad);
	$("#descrip_funcionalidad").blur(comprobar_descrip_funcionalidad);
	$("#descrip_funcionalidad").val(descrip_funcionalidad);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_funcionalidad);

	// se muestra el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function funcionalidadDELETEjaxPromesa() {

	crearformoculto('id_form_funcionalidad', '');
	insertacampo('id_form_funcionalidad', 'controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad', 'action', 'DELETE');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_funcionalidad").serialize(),
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

async function DELETEfuncionalidadajax() {

	var idioma = getCookie('lang');

	await funcionalidadDELETEjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'delete_funcionalidad_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_funcionalidad').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}


function crearformDELETEfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad) {

	resetearformfuncionalidad();

	$("#id_form_funcionalidad").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_funcionalidad").attr('readonly', 'true')
	$("#id_funcionalidad").val(id_funcionalidad);


	$("#id_funcionalidad").val(id_funcionalidad);
	$("#nombre_funcionalidad").val(nombre_funcionalidad);
	$("#descrip_funcionalidad").val(descrip_funcionalidad);



	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_funcionalidad);

	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

function funcionalidadSEARCHAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'funcionalidad');
	insertacampo('form_generico', 'action', 'SEARCH');
	insertacampo('form_generico', 'id_funcionalidad', document.getElementById('id_funcionalidad').value);
	insertacampo('form_generico', 'nombre_funcionalidad', document.getElementById('nombre_funcionalidad').value);
	insertacampo('form_generico', 'descrip_funcionalidad', document.getElementById('descrip_funcionalidad').value);
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


async function SEARCHfuncionalidadajax() {

	var idioma = getCookie('lang');

	await funcionalidadSEARCHAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'search_funcionalidad_OK';
			}
			getListFuncionalidades(res.resource);
			//mensajeOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
	setLang();
	document.getElementById('form_generico').remove();

}

function crearformSEARCHfuncionalidad() {

	// reseteo el formulario
	resetearformfuncionalidad();

	// creo la accion para el formulario y el onsubmit
	//$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_funcionalidad").on('submit', search_funcionalidad);

	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_funcionalidad").attr('readonly', false);
	$("#id_funcionalidad").blur(comprobar_id_funcionalidad_search);
	$("#id_funcionalidad").val('');

	// pongo el campo de nombre_persona editable y le asocio la funcion para el onblur
	$("#nombre_funcionalidad").attr('readonly', false)
	/$("#nombre_funcionalidad").blur(comprobar_nombre_funcionalidad_search);
	$("#nombre_funcionalidad").val('');

	// pongo el campo de apellidos_persona editable y le asocio la funcion para el onblur
	$("#descrip_funcionalidad").attr('readonly', false)
	$("#descrip_funcionalidad").blur(comprobar_descrip_funcionalidad_search);
	$("#descrip_funcionalidad").val('');


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	//botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src = "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_funcionalidad").on('click', search_funcionalidad);
	//$("#id_form_persona").append(botonsubmit);

	setLang();

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}



function crearformSHOWCURRENTfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad) {

	resetearformfuncionalidad();

	$("#id_form_funcionalidad").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_funcionalidad").attr('readonly', 'true')
	$("#id_funcionalidad").val(id_funcionalidad);

	$("#nombre_funcionalidad").attr('readonly', 'true')
	$("#nombre_funcionalidad").val(nombre_funcionalidad);
	$("#descrip_funcionalidad").attr('readonly', 'true')
	$("#descrip_funcionalidad").val(descrip_funcionalidad);



	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/detail4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);

	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');


}

function devolverfuncionalidades() {

	datosfuncionalidades = new Array();
	controlfuncionalidades = 0;
	dnibase = '11111';
	numerofuncionalidades = 5;

	for (let i = 0; i < numerofuncionalidades; i++) {

		funcionalidad = new Array();
		dnibase = String(Number(dnibase) + Number(23));
		funcionalidad['id_funcionalidad'] = dnibase + 'A';
		funcionalidad['nombre_funcionalidad'] = 'login' + i;
		funcionalidad['descrip_funcionalidad'] = 'login' + i;

		datosfuncionalidades[i] = funcionalidad;
	}

	return datosfuncionalidades;

}

function devolverfuncionalidadesAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'funcionalidad');
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

async function devolverfuncionalidadesajax() {

	var idioma = getCookie('lang');

	await devolverfuncionalidadesAjaxPromesa()
		.then((res) => {

			getListFuncionalidades(res.resource);

		})
		.catch((res) => {
			mensajeFAIL(res.code);
			setLang(idioma);
		});

	document.getElementById('form_generico').remove();
}


function getListFuncionalidades(listafuncionalidades) {

	document.getElementById('id_datosfuncionalidades').innerHTML = '';



	for (let funcionalidad of listafuncionalidades) {

		datosfila = "'" + funcionalidad.id_funcionalidad + "'," + "'" + funcionalidad.nombre_funcionalidad + "'," + "'" + funcionalidad.descrip_funcionalidad + "'";

		lineatabla = '<tr><td>' + funcionalidad['id_funcionalidad'] + '</td><td>' + funcionalidad['nombre_funcionalidad'] + '</td><td>' + funcionalidad['descrip_funcionalidad'] + "</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITfuncionalidad(' + datosfila + ');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEfuncionalidad(' + datosfila + ');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTfuncionalidad(' + datosfila + ')";></td>';

		lineatabla += botonedit + botondelete + botonshowcurrent + "</tr>";

		$("#id_datosfuncionalidades").append(lineatabla);
	}

}
