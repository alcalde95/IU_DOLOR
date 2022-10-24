function comprobar_form_login(){
	if (comprobar_login() && comprobar_password()){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
	
}

function comprobar_login(){

	if (!size_minimo('id_login',3)){
		mensajeKO('id_login', 'Tamaño login demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('id_login',15)){
		mensajeKO('id_login', 'Tamaño login demasiado largo (max 15 caracteres)');
		return false;
	}
	if (!letrassinacentoynumeros('id_login')){
		mensajeKO('id_login', 'El login contiene carecteres no permitidos (solo letras sin acentos y números)');
		return false;
	}

	mensajeOK('id_login');
	return true;

}

function comprobar_password(){

	if (!size_minimo('id_password',3)){
		mensajeKO('id_password', 'Tamaño password demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('id_password',15)){
		mensajeKO('id_password', 'Tamaño password demasiado largo (max 15 caracteres)');
		return false;
	}
	if (!letrassinacentoynumeros('id_password')){
		mensajeKO('id_password', 'El password contiene carecteres no permitidos (solo letras sin acentos y números)');
		return false;
	}

	mensajeOK('id_password');
	return true;

}


