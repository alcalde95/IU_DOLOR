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

function comprobar_form_usuario_add(){
	alert('entro en comprobar_form_usuario_add');

	if (comprobar_dni() && comprobar_usuario() && comprobar_id_rol()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_usuario_search(){
	alert('entro en comprobar_form_usuario_search');

	if (comprobar_dni_search() && comprobar_usuario_search() && comprobar_id_rol_search()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_usuario(){

	if (!size_minimo('id_usuario',3)){
		mensajeKO('id_usuario', 'Tamaño login demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('id_usuario',15)){
		mensajeKO('id_usuario', 'Tamaño login demasiado largo (max 15 caracteres)');
		return false;
	}
	if (!letrassinacentoynumeros('id_usuario')){
		mensajeKO('id_usuario', 'El login contiene carecteres no permitidos (solo letras sin acentos y números)');
		return false;
	}

	mensajeOK('id_usuario');
	return true;

}

// comprobar_usuario_search()
// funcion de validación de formato de usuario en search
function comprobar_usuario_search(){
	return true;
}

// comprobar_dni()
// funcion de validación de formato de dni en acciones que no sean search





const comprobar_dni = (dni = document.getElementById('id_dni').value) => {
    var numero
    var letr
    var letra
    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            mensaje('dni', 'La letra no coincide con los números');
            return false;
        }
        else {
            mensaje('dni');
            return true;
        }
    } else {
        mensaje('dni', 'Formato de dni incorrecto');
        return false;
    }
}

const comprobar_nombre = (nombre = document.getElementById('id_nombre').value) => {
    if (nombre.length < 3) {
        mensaje('nombre', 'el nombre debe tener al menos 3 caracteres')
        return false;
    }

    if (nombre.length > 45) {
        mensaje('nombre', 'el nombre debe tener como máximo 30 caracteres')
        return false;
    }
    else {
        mensaje('nombre');
        return true;
    }

}
const comprobar_apellido = (apellido = document.getElementById('id_apellido').value) => {
    if (apellido.length < 3) {
        mensaje('apellido', 'el apellido debe tener al menos 3 caracteres')
        return false;
    }
    if (apellido.length > 45) {
        mensaje('apellido', 'el apellido debe tener como máximo 60 caracteres')
        return false;
    }
    else {
        mensaje('apellido');
        return true;
    }

}

const comprobar_fecha_nacimiento = (date = document.getElementById('id_fecha_nacimiento').value) => {
    if (!document.getElementById('fecha_de_nacimiento').value instanceof Date) {
        mensaje('fecha_de_nacimiento', 'la fecha introducida no existe');
        return false;
    }
    else {
        mensaje('fecha_de_nacimiento');
        return true;
    }
}

const comprobar_foto = (email_persona = document.getElementById('id_foto').value) => {
    let expresion_regular_email = /[a-zA-Z0-9]+@[a-zA-Z0-9]\.[[a-zA-Z]{2,3}/;
    if (expresion_regular_email.test(email_persona)) {
        mensaje('email_persona');
        return true;
    } else {
        mensaje('email_persona', 'La dirección de email es incorrecta.');
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

const comprobar_telefono = (telefono = document.getElementById('id_telefono').value) => {
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

const comprobar_es_jubilado = (es_jubilado = document.getElementById('id_es_jubilado').value) => {

    if (es_jubilado.toUpperCase !== 'SI' || es_jubilado.toUpperCase !== 'NO') {
        mensaje('es_jubilado', 'tiene que responder SI o NO');
        return false;
    }

    else {
        mensaje('es_jubilado');
        return true;
    }

}

const comprobar_descripcion = (descripcion = document.getElementById('id_descripcion').value) => {
    if (descripcion.length<1 ||descripcion.length>1000){
        mensaje('descripcion','no puede estar vacío o tener más de 1000 caracteres la descripcion')
    }else{
        mensaje('descripcion');
        return true;
    }
}

function devolverRoles(){

	datosroles = new Array();
	controlrol = 0;
	dnibase = '11111';
	numeroroles = 5;

	for (let i=0;i<numeroroles;i++){
		
		rol = new Array();
		dnibase = String(Number(dnibase)+Number(23));
		rol['id_rol'] = dnibase + 'A';
		rol['nombre_rol'] = 'login'+i;
		rol['descrip_rol'] = 'login'+i;

		datosroles[i] = rol;
	}

	return datosroles;

}

// comprobar_dni_search()
// funcion de validación de formato de dni en search
function comprobar_dni_search(){
	return true;
}

// comprobar_id_rol()
// funcion de validacion del formato de id_rol en acciones que no son search
function comprobar_id_rol(){
	return true;
}

// comprobar_id_rol_search()
// funcion de validacion del formato de id_rol
function comprobar_id_rol_search(){
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
function peticionADDusuarioBack(){

	alert('peticion a back add');
	document.getElementById('id_form_usuario').submit();
	
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITusuarioBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_usuario').submit();
	
}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEusuarioBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_usuario').submit();
	
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
function add_usuario(){

	if (comprobar_form_usuario_add()){
		peticionADDusuarioBack();
	}

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_usuario(){

	if (comprobar_form_usuario_add()){
		peticionEDITusuarioBack();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_usuario(){

	peticionDELETEusuarioBack();

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
function resetearformusuario(){

	// eliminar el select
	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	}

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly',false);
	$("#id_usuario").attr('readonly',false);
	$("#id_id_rol").attr('readonly',false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_rol").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: none');

}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDrol(){

	// resetear el formulario
	resetearformusuario();

	// se rellena el action del formulario
	document.getElementById('id_form_rol').action = 'http://193.147.87.202/procesaform.php';
	
	document.getElementById('id_rol').value = '';
	document.getElementById('nombre_rol').value = '';
	document.getElementById('descrip_rol').value = '';

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_usuario;

	// se muestra el formulario
	document.getElementById('id_caja_formulario_rol').style.display = 'block';

}

//  () creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITrol(id_rol,nombre_rol,descrip_rol){

	// resetear al formulario
	resetearformusuario();
	
	// se crea el action del formulario 
	$("#id_form_rol").attr('action','http://193.147.87.202/procesaform.php');
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_rol").attr('readonly',true);
	//$("#id_accion").blur(comprobar_dni);
	$("#id_rol").val(id_rol);
	//$("#id_nombre").blur(comprobar_nombre);
	$("#nombre_rol").val(nombre_rol);
//	$("#id_descripcion").blur(comprobar_descripcion);
    $("#descrip_rol").val(descrip_rol);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_usuario);
	
	// se muestra el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETErol(id_rol,nombre_rol,descrip_rol){

	resetearformusuario();
	
	$("#id_form_rol").attr('action','http://193.147.87.202/procesaform.php');
	
	$("#id_rol").attr('readonly','true')
	$("#id_rol").val(id_rol);

	
	$("#id_rol").val(id_rol);
	$("#nombre_rol").val(nombre_rol);
	$("#descrip_rol").val(descrip_rol);
	

	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_usuario);

	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHusuario(){

	// reseteo el formulario
	resetearformusuario();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_funcionalidad").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_funcionalidad").on('submit', search_usuario);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_usuario").attr('readonly',false)
	$("#id_usuario").blur(comprobar_usuario_search);

	// rellena el array datosroles con filas de roles
	datosroles = devolverroles();
	// crea el objeto select con roles a partir de los datos proporcionados en datosroles
	rol_select = crearselect('id_id_rol','id_rol', 'id_rol', 'nombre_rol', datosroles, '');

	// al ser search se necesita el valor vacio. Se crea el option vacio y se incluye colocandolo como seleccionado
	optionrolvacio = document.createElement("option");
	optionrolvacio.value = ' ';
	optionrolvacio.text = ' ';
	optionrolvacio.selected = true;

	// se añade el option vacio creado al select
	rol_select.append(optionrolvacio);

	// se añade el select a la caja de select
	$("#caja_select_rol").append(rol_select);
		
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
	$("#id_form_rol").append(botonsubmit);

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}



function crearformSHOWCURRENTrol(id_rol,nombre_rol,descrip_rol){

	let data = ` ID_funcionalidad: ${id_rol} \n Nombre: ${nombre_rol } \n Descripcion: ${descrip_rol}`
	alert(data)

	// reseteo el formulario
	resetearformusuario();
	
	
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

			getListAcciones(res.resource);

		})
		.catch((res) => {
			mensajeFAIL(res.code);
			setLang(idioma);
		});

	document.getElementById('form_generico').remove();
}




function getListRol(listaroles){

	$("#id_datosroles").html = '';

	for (let rol of listaroles){

		datosfila = "'"+rol.id_rol+"',"+"'"+rol.nombre_rol+"',"+"'"+rol.descrip_rol+"'";

		lineatabla = '<tr><td>'+rol['id_rol']+'</td><td>'+rol['nombre_rol']+'</td><td>'+rol['descrip_rol']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITrol('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETErol('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTrol('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosroles").append(lineatabla);
	}

}


