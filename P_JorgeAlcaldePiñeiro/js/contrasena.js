function dniSEARCHAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'usuario');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','usuario', getCookie('usuarioSistema'));

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


async function SEARCHdniajax() {
	
	var idioma = getCookie('lang');
	
	await dniSEARCHAjaxPromesa()
		.then((res) => {
			
			ponerDNI(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}



function prepararDNI(){
    document.getElementById('usuario').value=getCookie('usuarioSistema');
    
    SEARCHdniajax();
}

function ponerDNI(listapersonas){

    
        document.getElementById('id_dni').textContent=listapersonas[0].dni;
        
    
}

function contrasenaAjaxPromesa(){

	insertacampo('id_form_registro','controlador', 'AUTH');
	insertacampo('id_form_registro','action', 'CAMBIAR_CONTRASENA');
	
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