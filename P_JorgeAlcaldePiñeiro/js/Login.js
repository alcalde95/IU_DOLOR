function comprobar_form_login(){
	if (comprobar_usuario() && comprobar_contrasena()){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
	
}

function comprobar_usuario(){

	if (!MinSize('id_usuario',3)){
		mensajeKO('id_usuario', 'usuario_corto_ko');
		return false;
	}
	if (!MaxSize('id_usuario',15)){
		mensajeKO('id_usuario', 'usuario_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_usuario')){
		mensajeKO('id_usuario', 'usuario_formato_ko');
		return false;
	}

	mensajeOK('id_usuario');
	return true;

}

function comprobar_contrasena(){

	if (!MinSize('id_contrasena',3)){
		mensajeKO('id_contrasena', 'contrasena_corto_ko');
		return false;
	}
	if (!MaxSize('id_contrasena',15)){
		mensajeKO('id_contrasena', 'contrasena_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_contrasena')){
		mensajeKO('id_contrasena', 'contrasena_formato_ko');
		return false;
	}

	mensajeOK('id_contrasena');
	return true;

}

//Función ajax con promesas
function loginAjaxPromesa(){

	insertacampo('id_form_login','controlador', 'AUTH');
	insertacampo('id_form_login','action', 'LOGIN');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_login").serialize(),
		}).done(res => {
			if (res.code != 'LOGIN_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeFAIL(jqXHR.status);
		});
	});
}

async function login() {
	
	var idioma = getCookie('lang');

	await loginAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			setCookie('usuarioSistema', document.getElementById("id_usuario").value);
			window.location.href = "menu.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}



function registroAjaxPromesa(){

	insertacampo('id_form_registro','controlador', 'AUTH');
	insertacampo('id_form_registro','action', 'REGISTRAR');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_registro").serialize(),
		}).done(res => {
			if (res.code != 'REGISTRAR_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeFAIL(jqXHR.status);
		});
	});
}

async function registrarse() {
	
	var idioma = getCookie('lang');

	await registroAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			window.location.href = "login.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}

function registro(){
	if(comprobar_contrasena() && comprobar_usuario()){
		encriptarpassword();
		registrarse();
	}
	return false;
}

