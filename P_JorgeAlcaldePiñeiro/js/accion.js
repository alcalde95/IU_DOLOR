// crearselect(
// id que va tener el select, 
// name que va tener el select, 
// atributo del array datos que utilizamos para el value de cada option, 
// atributo del array datos que vamos utilizar para el text de cada option, 
// array de datos con las filas de la entidad, 
// value que queremos que este como selected en el select)
// devuelve un elemento select
function crearselect(id, name, valueoption, textoption, datos, itemseleccionado){
	rol_select = document.createElement("select");
	rol_select.name = name;
	rol_select.id = id;
	//alert(datos[0][valueoption]);

	for (let i=0;i<datos.length;i++){
		option_rol = document.createElement("option");
		option_rol.value = datos[i][valueoption];
		option_rol.text = datos[i][textoption];

		if (option_rol.value == itemseleccionado){
			option_rol.selected = true;
		}
		rol_select.appendChild(option_rol);
	}
	
	return rol_select;

}

// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDaccionBack(){

	alert('peticion a back add');
	ADDaccionajax();
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITaccionBack(){

	alert('peticion a back edit');
	EDITaccionajax();
	
}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEaccionBack(){

	alert('peticion a back delete');
	EDITaccionajax();
}

// devolverroles()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad rol

function devolverroles(){

	let rol1= new Array();
	rol1['id_rol']='0';
	rol1['nombre_rol']='admin';
	rol1['descrip_rol']='descripcion admin';
	
	let rol2= new Array();
	rol2['id_rol']='1';
	rol2['nombre_rol']='responsable';
	rol2['descrip_rol']='descripcion responsable';

	let rol3= new Array();
	rol3['id_rol']='2';
	rol3['nombre_rol']='coordinador';
	rol3['descrip_rol']='descripcion coordinador';
	
	datosroles = new Array();
	datosroles[0] = rol1;
	datosroles[1] = rol2;
	datosroles[2] = rol3;

	return datosroles;
}

// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_accion(){

	
		peticionADDaccionBack();
	

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_accion(){

		peticionEDITaccionBack();

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_accion(){

	peticionDELETEaccionBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_usuario(){

	if (comprobar_form_usuario_search()){
		return true;
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformaccion(){

	// quitar el readonly de los atributos
	$("#id_accion").attr('readonly',false);
	$("#nombre_accion").attr('readonly',false);
	$("#descrip_accion").attr('readonly',false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_usuario").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

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
}
function crearformADDaccion(){

	// resetear el formulario
	resetearformaccion();

	// se rellena el action del formulario
	document.getElementById('id_form_accion').action = 'http://193.147.87.202/procesaform.php';
	
	document.getElementById('id_accion').value = '';
	document.getElementById('nombre_accion').value = '';
	document.getElementById('descrip_accion').value = '';

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
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
}

function crearformEDITaccion(id_accion,nombre_accion,descrip_accion){

	// resetear al formulario
	resetearformaccion();
	
	// se crea el action del formulario 
	$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_accion").attr('readonly',true);
	//$("#id_accion").blur(comprobar_dni);
	$("#id_accion").val(id_accion);
	//$("#id_nombre").blur(comprobar_nombre);
	$("#nombre_accion").val(nombre_accion);
//	$("#id_descripcion").blur(comprobar_descripcion);
    $("#descrip_accion").val(descrip_accion);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
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
}


function crearformDELETEaccion(id_accion,nombre_accion,descrip_accion){

	resetearformaccion();
	
	$("#id_form_accion").attr('action','http://193.147.87.202/procesaform.php');
	
	$("#id_accion").attr('readonly','true')
	$("#id_accion").val(id_accion);

	
	$("#id_accion").val(id_accion);
	$("#nombre_accion").val(nombre_accion);
	$("#descrip_accion").val(descrip_accion);
	

	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_accion);

	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHaccion(){

	// reseteo el formulario
	resetearformusuario();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_accion").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_accion").on('submit', search_usuario);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_accion").attr('readonly', false);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#nombre_accion").attr('readonly',false);
	$("#descrip_accion").attr('readonly', false);

		
	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("input");
	botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_usuario";
	botonsubmit.title= "Buscar";
	botonsubmit.alt= "Buscar";
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	
	// coloco la imagen para submit en el formulario
	$("#id_form_accion").append(botonsubmit);

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}



function crearformSHOWCURRENTaccion(id_accion,nombre_accion,descrip_accion){

	let data = ` ID_ACCION: ${id_accion} \n Nombre: ${nombre_accion } \n Descripcion: ${descrip_accion}`
	alert(data)

	// reseteo el formulario
	resetearformusuario();
	
	
}

function devolveracciones(){

	datosacciones = new Array();
	controlacciones = 0;
	dnibase = '11111';
	numeroacciones = 5;

	for (let i=0;i<numeroacciones;i++){
		
		accion = new Array();
		dnibase = String(Number(dnibase)+Number(23));
		accion['id_accion'] = dnibase + 'A';
		accion['nombre_accion'] = 'login'+i;
		accion['descrip_accion'] = 'login'+i;

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

function getListAcciones(listaacciones){

	
	
	$("#id_datosacciones").html = '';

	for (let accion of listaacciones){

		datosfila = "'"+accion.id_accion+"',"+"'"+accion.nombre_accion+"',"+"'"+accion.descrip_accion+"'";

		lineatabla = '<tr><td>'+accion['id_accion']+'</td><td>'+accion['nombre_accion']+'</td><td>'+accion['descrip_accion']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITaccion('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEaccion('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTaccion('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosacciones").append(lineatabla);
	}

}