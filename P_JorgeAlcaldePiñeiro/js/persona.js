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

function comprobar_form_persona_add() {
	alert('entro en comprobar_form_persona_add');

	return true
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_usuario_search() {
	alert('entro en comprobar_form_usuario_search');

	if (comprobar_dni_search() && comprobar_usuario_search() && comprobar_id_rol_search()) {
		return true;
	}
	else {
		return false;
	}
}






function comprobar_dni() {
	let numero ,letr,letra
	var expresion_regular_dni
	let dni = document.getElementById('id_dni').value;

	expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
	if(expresion_regular_dni.test (dni) == true){
	   numero = dni.substr(0,dni.length-1);
	   letr = dni.substr(dni.length-1,1);
	   numero = numero % 23;
	   letra='TRWAGMYFPDXBNJZSQVHLCKET';
	   letra=letra.substring(numero,numero+1);
	  if (letra!=letr.toUpperCase()) {
		 mensajeKO('id_dni','Dni erroneo, la letra del NIF no se corresponde');
	   }else{
		 mensajeOK('Dni correcto');
	   }
	}else{
	   mensajeKO('id_dni','Dni erroneo, formato no válido');
	 }
  }


function comprobar_nombre() {
	if (!size_minimo('id_nombre',3)) {
		mensajeKO('id_nombre', 'el nombre debe tener al menos 3 caracteres')
		return false;
	}
	else {
		if (id_nombre.length > 45) {
			mensajeKO('id_nombre', 'el nombre debe tener como máximo 30 caracteres')
			return false;
		}
		else {
			mensajeOK('id_nombre');
			return true;
		}
	}

}
const comprobar_apellido = (id_apellido = document.getElementById('id_apellido').value) => {
	if (id_apellido.length < 3) {
		mensaje('id_apellido', 'el apellido debe tener al menos 3 caracteres')
		return false;
	}
	if (id_apellido.length > 45) {
		mensaje('id_apellido', 'el apellido debe tener como máximo 60 caracteres')
		return false;
	}
	else {
		mensaje('id_apellido');
		return true;
	}

}

const comprobar_fecha = (id_fecha_nacimiento = document.getElementById('id_fecha_nacimiento').value) => {
	if (!document.getElementById('id_fecha_nacimiento').value instanceof Date) {
		mensaje('id_fecha_nacimiento', 'la fecha introducida no existe');
		return false;
	}
	else {
		mensaje('id_fecha_nacimiento');
		return true;
	}
}

const comprobar_email = (id_email = document.getElementById('id_email').value) => {

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(id_email)) {
		mensaje('id_email');
		return true;
	} else {
		mensaje('id_email', 'La dirección de email es incorrecta.');
		return false;
	}

}

const comprobar_direccion = (direccion_persona = document.getElementById('id_direccion').value) => {
	if (direccion_persona.length < 3) {
		mensaje('direccion_persona', 'la direccion debe tener al menos 3 caracteres');
		return false;
	}
	if (direccion_persona.length > 90) {
		mensaje('direccion_persona', 'la direccion debe tener como máximo 90 caracteres');
		return false;
	}
	else {
		mensaje('direccion_persona');
		return true;
	}

}

function comprobar_telefono(){
	telefono = document.getElementById('id_telefono').value;
	if (telefono.length < 9 || telefono.length > 9) {
		mensaje('telefono', 'el teléfono debe estar formado por 9 dígitos');
		return false;
	}
	let expresion_regular_tlf = /([0-9]){9}/g;
	if (!expresion_regular_tlf.test(telefono)) {
		mensaje('telefono', 'la direccion debe tener como máximo 90 caracteres');
		return false;
	}
	else {
		mensaje('telefono');
		return true;
	}

}



const comprobar_foto = (id_foto = document.getElementById('id_foto').value) => {

	if (id_foto.length < 5 || id_foto.length > 90) {
		mensaje('id_foto', 'tamaño incorrecto');
		return false;
	}

	else {
		mensaje('id_foto');
		return true;
	}

}
const comprobar_descripcion = (descripcion = document.getElementById('id_descripcion').value) => {
	if (descripcion.length < 1 || descripcion.length > 1000) {
		mensaje('descripcion', 'no puede estar vacío o tener más de 1000 caracteres la descripcion')
	} else {
		mensaje('descripcion');
		return true;
	}
}


// comprobar_dni_search()
// funcion de validación de formato de dni en search
function comprobar_dni_search() {
	return true;
}

// comprobar_id_rol()
// funcion de validacion del formato de id_rol en acciones que no son search
function comprobar_id_rol() {
	return true;
}

// comprobar_id_rol_search()
// funcion de validacion del formato de id_rol
function comprobar_id_rol_search() {
	return true;
}


// crearselect(
// id que va tener el select, 
// name que va tener el select, 
// atributo del array datos que utilizamos para el value de cada option, 
// atributo del array datos que vamos utilizar para el text de cada option, 
// array de datos con las filas de la entidad, 
// value que queremos que este como selected en el select)
// devuelve un elemento select
function crearselect(id, name, valueoption, textoption, datos, itemseleccionado) {
	rol_select = document.createElement("select");
	rol_select.name = name;
	rol_select.id = id;
	//alert(datos[0][valueoption]);

	for (let i = 0; i < datos.length; i++) {
		option_rol = document.createElement("option");
		option_rol.value = datos[i][valueoption];
		option_rol.text = datos[i][textoption];

		if (option_rol.value == itemseleccionado) {
			option_rol.selected = true;
		}
		rol_select.appendChild(option_rol);
	}

	return rol_select;

}

// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDusuarioBack() {

	alert('peticion a back add');
	ADDpersonaajax();

}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITusuarioBack() {

	alert('peticion a back edit');
	EDITpersonaajax();

}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEusuarioBack() {

	alert('peticion a back delete');
	DELETEpersonaajax();

}





// devolverroles()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad rol


// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_persona() {

	if (comprobar_form_persona_add()) {
		peticionADDusuarioBack();
	}

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_usuario() {

	if (comprobar_form_persona_add()) {
		peticionEDITusuarioBack();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_usuario() {

	peticionDELETEusuarioBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_persona() {

	//	if (comprobar_form_usuario_search()){
	//		return true;
	//	}
	return true;
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
}


function crearformADDpersona() {

	// resetear el formulario
	resetearformpersona();

	// se rellena el action del formulario
	document.getElementById('id_form_persona').action = 'http://193.147.87.202/procesaform.php';
	
	//document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';
	
	//document.getElementById('id_nombre').onblur = comprobar_nombre;
	document.getElementById('id_nombre').value = '';
	
	//document.getElementById('id_apellido').onblur = comprobar_apellido;
	document.getElementById('id_apellido').value = '';
	
	//document.getElementById('id_fecha_nacimiento').onblur = comprobar_fecha;
	document.getElementById('id_fecha_nacimiento').value = '';

	//document.getElementById('id_direccion').onblur = comprobar_direccion;
	document.getElementById('id_direccion').value = '';

	//document.getElementById('id_telefono').onblur = comprobar_telefono;
	document.getElementById('id_telefono').value = '';

	//document.getElementById('id_email').onblur = comprobar_email;
	document.getElementById('id_email').value = '';
	
	//document.getElementById('id_foto').onblur = comprobar_foto;
	document.getElementById('id_foto').value = '';
	


	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
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
	$("#id_imagen_enviar_form").on('click', edit_usuario);

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
				res.code = 'edit_persona_OK';
			}
			mensajeOK(res.code);
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
	$("#id_imagen_enviar_form").on('click', delete_usuario);

	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHpersona() {

	// reseteo el formulario
	resetearformpersona();

	// creo la accion para el formulario y el onsubmit
	$("#id_form_persona").attr('action', 'http://193.147.87.202/procesaform.php');
	$("#id_form_persona").on('submit', search_persona);

	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_usuario").attr('readonly', false)


	// al ser search se necesita el valor vacio. Se crea el option vacio y se incluye colocandolo como seleccionado
	optionrolvacio = document.createElement("option");
	optionrolvacio.value = ' ';
	optionrolvacio.text = ' ';
	optionrolvacio.selected = true;



	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("input");
	botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_usuario";
	botonsubmit.title = "Buscar";
	botonsubmit.alt = "Buscar";
	botonsubmit.src = "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';

	// coloco la imagen para submit en el formulario
	$("#id_form_ ").append(botonsubmit);

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}



function crearformSHOWCURRENTpersona(dni, nombre, apellido, fecha_nacimiento, email, foto, direccion, telefono, es_jubilado, descripcion) {

	let data = ` DNI: ${dni} \n nombre: ${nombre} \n apellido: ${apellido} \n fecha_nacimiento: ${fecha_nacimiento} \n email: ${email} \n foto: ${foto} \n direccion: ${direccion} \n telefono: ${telefono} \n es_jubilado: ${es_jubilado} \n descripcion: ${descripcion}`
	alert(data)

	// reseteo el formulario
	resetearformusuario();


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

	$("#id_datospersonas").html = '';

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


