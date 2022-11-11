function comprobar_form_NuevaContrasena(){
    if(!comprobar_contrasena()){
		return false;
	}
	return true;
}

function prepararUsuario(){
    document.getElementById('id_usuario').textContent=getCookie('usuarioSistema');
}


//Función ajax con promesas
function dniSEARCHajaxPromesa(){

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
	
	await dniSEARCHajaxPromesa()
		.then((res) => {
			
			getdni(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}



function getdni(listausuarios) {

    dni = listausuarios[0].dni;
    document.getElementById('id_dni').textContent = dni;
	
	

}

function cambiarContrasenaAjaxPromesa(){

    encriptarpassword();

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'AUTH');
	insertacampo('form_generico','action', 'CAMBIAR_CONTRASENA');
	insertacampo('form_generico','dni', document.getElementById('id_dni').textContent);
    insertacampo('form_generico','contrasena', document.getElementById('id_contrasena').value);

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
function cambiar(){
	if(comprobar_form_NuevaContrasena()){
		cambiarContrasenaAjax();
	}
	return false;
}

async function cambiarContrasenaAjax() {

    await SEARCHdniajax();

	var idioma = getCookie('lang');
	
	await cambiarContrasenaAjaxPromesa()
		.then((res) => {
			
			mensajeactionOK(res.code);
			window.location.href = "login.html";

		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
}