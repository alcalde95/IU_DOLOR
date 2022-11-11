

function comprobar_form_accion() {
	alert('entro en comprobar_form_accion');

	if (comprobar_id_accion() && comprobar_nombre_accion() && comprobar_descrip_accion()) {
		return true;
	}
	else {
		return false;
	}
}

function comprobar_form_accion_search() {
	alert('entro en comprobar_form_accion');

	if (comprobar_id_accion_search() && comprobar_nombre_accion_search() && comprobar_descrip_accion_search()) {
		return true;
	}
	else {
		return false;
	}
}



function comprobar_id_accion() {

	if (!MinSize('id_accion', 1)) {
		mensajeKO('id_accion', 'id_accion_menor_ko')
		return false;
	}

	if (!MaxSize('id_accion', 4)) {
		mensajeKO('id_accion', 'id_accion_mayor_ko')
		return false;
	}


	
	if (!SoloNumeros('id_accion')) {

		mensajeKO('id_accion','id_accion_formato_ko');

	}


	mensajeOK('id_accion');
	return true;

}

function comprobar_id_accion_search() {

	if (!MaxSize('id_accion', 4)) {
		mensajeKO('id_accion', 'id_accion_mayor_ko')
		return false;
	}


	
	if (!SoloNumeros('id_accion')) {

		mensajeKO('id_accion', 'id_accion_formato_ko');

	}


	mensajeOK('id_accion');
	return true;

}



function comprobar_nombre_accion() {
	if (!MinSize('nombre_accion', 6)) {
		mensajeKO('nombre_accion','nombre_universal_menor_ko');
		return false;
	}

	if (!MaxSize('nombre_accion', 48)) {
		mensajeKO('nombre_accion', 'nombre_universal_mayor_ko');
		return false;
	}
	if (Sololetras('nombre_accion')) {
		mensajeKO('nombre_accion', 'nombre_universal_formato_ko');
		return false;
	}


	mensajeOK('nombre_accion');
	return true;


}

function comprobar_nombre_accion_search() {
	
	if (!MaxSize('nombre_accion', 48)) {
		mensajeKO('nombre_accion', 'nombre_universal_mayor_ko');
		return false;
	}
	if (Sololetras('nombre_accion')) {
		mensajeKO('nombre_accion', 'nombre_universal_formato_ko');
		return false;
	}


	mensajeOK('nombre_accion');
	return true;


}

function comprobar_descrip_accion() {
	if (!MinSize('descrip_accion', 20)) {
		mensajeKO('descrip_accion','descrip_universal_menor_ko');
		return false;
	}

	if (!MaxSize('descrip_accion', 200)) {
		mensajeKO('descrip_accion', 'descrip_universal_mayor_ko');
		return false;
	}

	/*	if (caracteresRestringidos('descrip_accion')) { revisar
			mensajeKO('descrip_accion', 'El nombre sólo puede contener letras');
			return false;
		}
	*/

	mensajeOK('descrip_accion');
	return true;


}

function comprobar_descrip_accion_search() {

	if (!MaxSize('descrip_accion', 200)) {
		mensajeKO('descrip_accion', 'descrip_universal_mayor_ko');
		return false;
	}

	/*	if (caracteresRestringidos('descrip_accion')) { revisar
			mensajeKO('descrip_accion', 'El nombre sólo puede contener letras');
			return false;
		}
	*/

	mensajeOK('descrip_accion');
	return true;


}


// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDaccionBack() {

	alert('peticion a back add');
	ADDaccionajax();


}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITaccionBack() {

	alert('peticion a back edit');
	EDITaccionajax();

}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEaccionBack() {

	alert('peticion a back delete');
	DELETEaccionajax();
}

function peticionSEARCHaccionBack() {

	alert('peticion a back delete');
	SEARCHaccionajax();
}



function add_accion() {

	if (comprobar_form_accion()) {
		peticionADDaccionBack();
	}


}


function edit_accion() {
	if (comprobar_form_accion()) {
		peticionEDITaccionBack();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_accion() {

	peticionDELETEaccionBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_accion() {

	if(comprobar_form_accion_search()){
		peticionSEARCHaccionBack()
	
	}
	

}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformaccion() {

	// quitar el readonly de los atributos
	$("#id_accion").attr('readonly', false);
	$("#id_accion").val('');
	$("#id_accion").on('blur', false);
	$("#nombre_accion").attr('readonly', false);
	$("#nombre_accion").val('');
	$("#nombre_accion").on('blur', false);
	$("#descrip_accion").attr('readonly', false);
	$("#descrip_accion").val('');
	$("#descrip_accion").on('blur', false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_accion").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: none');

}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action
function accionADDjaxPromesa() {

	crearformoculto('id_form_accion', '');
	insertacampo('id_form_accion', 'controlador', 'accion');
	insertacampo('id_form_accion', 'action', 'ADD');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_accion").serialize(),
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

async function ADDaccionajax() {

	var idioma = getCookie('lang');

	await accionADDjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'add_accion_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_accion').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}
function crearformADDaccion() {

	// resetear el formulario
	resetearformaccion();

	// se rellena el action del formulario
	document.getElementById('id_form_accion').action = 'http://193.147.87.202/procesaform.php';

	document.getElementById('id_accion').onblur = comprobar_id_accion;
	document.getElementById('id_accion').value = '';
	document.getElementById('nombre_accion').onblur = comprobar_nombre_accion;
	document.getElementById('nombre_accion').value = '';
	document.getElementById('descrip_accion').onblur = comprobar_descrip_accion;
	document.getElementById('descrip_accion').value = '';

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_accion;

	// se muestra el formulario
	document.getElementById('id_caja_formulario_accion').style.display = 'block';

}

//  () creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function accionEDITjaxPromesa() {

	crearformoculto('id_form_accion', '');
	insertacampo('id_form_accion', 'controlador', 'accion');
	insertacampo('id_form_accion', 'action', 'EDIT');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_accion").serialize(),
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

async function EDITaccionajax() {

	var idioma = getCookie('lang');

	await accionEDITjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'edit_accion_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_accion').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}

function crearformEDITaccion(id_accion, nombre_accion, descrip_accion) {

	// resetear al formulario
	resetearformaccion();

	// se crea el action del formulario 
	$("#id_form_persona").attr('action', 'http://193.147.87.202/procesaform.php');

	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_accion").attr('readonly', true);
	$("#id_accion").blur(comprobar_id_accion);
	$("#id_accion").val(id_accion);
	$("#nombre_accion").blur(comprobar_nombre_accion);
	$("#nombre_accion").val(nombre_accion);
	$("#descrip_accion").blur(comprobar_descrip_accion);
	$("#descrip_accion").val(descrip_accion);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_accion);

	// se muestra el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function accionDELETEjaxPromesa() {

	crearformoculto('id_form_accion', '');
	insertacampo('id_form_accion', 'controlador', 'accion');
	insertacampo('id_form_accion', 'action', 'DELETE');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_accion").serialize(),
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

async function DELETEaccionajax() {

	var idioma = getCookie('lang');

	await accionDELETEjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'delete_accion_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	document.getElementById('id_form_accion').remove();
	document.getElementById('id_imagen_enviar_form').remove();
	window.location.reload();
}


function crearformDELETEaccion(id_accion, nombre_accion, descrip_accion) {

	resetearformaccion();

	$("#id_form_accion").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_accion").attr('readonly', 'true')
	$("#id_accion").val(id_accion);


	$("#id_accion").val(id_accion);
	$("#nombre_accion").val(nombre_accion);
	$("#descrip_accion").val(descrip_accion);



	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_accion);

	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

function accionSEARCHAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'accion');
	insertacampo('form_generico', 'action', 'SEARCH');
	insertacampo('form_generico', 'id_accion', document.getElementById('id_accion').value);
	insertacampo('form_generico', 'nombre_accion', document.getElementById('nombre_accion').value);
	insertacampo('form_generico', 'descrip_accion', document.getElementById('descrip_accion').value);
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


async function SEARCHaccionajax() {

	var idioma = getCookie('lang');

	await accionSEARCHAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'search_accion_OK';
			}
			getListAcciones(res.resource);
			//mensajeOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
	setLang();
	document.getElementById('form_generico').remove();

}

function crearformSEARCHaccion() {

	// reseteo el formulario
	resetearformaccion();

	// creo la accion para el formulario y el onsubmit
	//$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_accion").on('submit', search_accion);

	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_accion").attr('readonly', false);
	$("#id_accion").blur(comprobar_id_accion_search);
	$("#id_accion").val('');

	// pongo el campo de nombre_persona editable y le asocio la funcion para el onblur
	$("#nombre_accion").attr('readonly', false)
	$("#nombre_accion").blur(comprobar_nombre_accion_search);
	$("#nombre_accion").val('');

	// pongo el campo de apellidos_persona editable y le asocio la funcion para el onblur
	$("#descrip_accion").attr('readonly', false)
	$("#descrip_accion").blur(comprobar_descrip_accion_search);
	$("#descrip_accion").val('');


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	//botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src = "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_accion").on('click', search_accion);
	//$("#id_form_persona").append(botonsubmit);

	setLang();

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}




function crearformSHOWCURRENTaccion(id_accion, nombre_accion, descrip_accion) {

	resetearformaccion();

	$("#id_form_accion").attr('action', 'http://193.147.87.202/procesaform.php');

	$("#id_accion").attr('readonly', 'true')
	$("#id_accion").val(id_accion);

	$("#nombre_accion").attr('readonly', 'true')
	$("#nombre_accion").val(nombre_accion);
	$("#descrip_accion").attr('readonly', 'true')
	$("#descrip_accion").val(descrip_accion);



	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/detail4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);

	$("#id_caja_formulario_accion").attr('style', 'display: block');


}

function devolveracciones() {

	datosacciones = new Array();
	controlacciones = 0;
	dnibase = '11111';
	numeroacciones = 5;

	for (let i = 0; i < numeroacciones; i++) {

		accion = new Array();
		dnibase = String(Number(dnibase) + Number(23));
		accion['id_accion'] = dnibase + 'A';
		accion['nombre_accion'] = 'login' + i;
		accion['descrip_accion'] = 'login' + i;

		datosacciones[i] = accion;
	}

	return datosacciones;

}

function devolveraccionesAjaxPromesa() {

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'accion');
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

async function devolveraccionesajax() {

	var idioma = getCookie('lang');

	await devolveraccionesAjaxPromesa()
		.then((res) => {

			getListAcciones(res.resource);

		})
		.catch((res) => {
			mensajeFAIL(res.code);
			setLang(idioma);
		});

	document.getElementById('form_generico').remove();
}

function getListAcciones(listaacciones) {

	document.getElementById('id_datosacciones').innerHTML = '';


	for (let accion of listaacciones) {

		datosfila = "'" + accion.id_accion + "'," + "'" + accion.nombre_accion + "'," + "'" + accion.descrip_accion + "'";

		lineatabla = '<tr><td>' + accion['id_accion'] + '</td><td>' + accion['nombre_accion'] + '</td><td>' + accion['descrip_accion'] + "</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITaccion(' + datosfila + ');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEaccion(' + datosfila + ');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTaccion(' + datosfila + ')";></td>';

		lineatabla += botonedit + botondelete + botonshowcurrent + "</tr>";

		$("#id_datosacciones").append(lineatabla);
	}

}

async function pintarselectaccionesAjax(deshabilitado = false, convacio = false, accion=null) {
	var idioma = getCookie('lang');

	await devolveraccionesAjaxPromesa()
		.then((res) => {
			let accion_select = crearselect(convacio,'id_id_accion','id_accion', 'id_accion', 'nombre_accion', res.resource, accion);
			$("#caja_select_acc").append(accion_select);
			if (deshabilitado){
				$("#id_id_accion:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		
}