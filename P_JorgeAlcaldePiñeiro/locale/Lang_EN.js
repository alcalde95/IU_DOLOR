arrayEN = {

	'SQL_KO': 'SQL_KO',
	'CAMBIAR_contrasena_KO': 'Failed to change password',
	'USUARIO_PASS_KO': 'Incorrect password',
	'USUARIO_LOGIN_KO': 'Wrong user',

	'dni_EXISTE_en_persona_KO': 'DNI already exists in person',
	'dni_NO_EXISTE_en_persona_KO': 'The DNI does not exist in person',

	'dni_EXISTE_en_usuario_KO': 'DNI already exists',
	'dni_NO_EXISTE_en_usuario_KO': 'There must be an DNI',

	'email_EXISTE_en_persona_KO': 'The email already exists in the database',

	'usuario_EXISTE_en_usuario_KO': 'User already exists',
	'admin_no_se_puede_modificar_KO': 'The admin cannot be modified',
	'admin_no_se_puede_borrar_KO': 'The admin cannot be deleted',

	'id_rol_EXISTE_en_usuario_KO': 'Id role already exists in user',
	'no_puede_borrar_rol_adminybasico': 'Unable to delete basicadmin_role',
	'no_puede_editar_rol_adminybasico': 'Unable to edit basicadmin_role',

	'id_rol_EXISTE_en_rol_KO': 'The role_id already exists in role',
	'id_rol_NO_EXISTE_en_rol_KO': 'The role_id does not exist in role',

	'id_rol_EXISTE_en_rolaccionfuncionalidad_KO': 'Id_rol exists in roleactionfunctionality',

	'id_accion_EXISTE_en_accion_KO': 'Id_action exists in action',
	'id_accion_NO_EXISTE_en_accion_KO': 'Id_action does not exist in action',
	'id_accion_EXISTE_en_rolaccionfuncionalidad_KO': 'Id_action exists in rolaccrionfunctionality',
	'no_puede_editar_acciones_admin': 'Unable to edit admin action',

	'id_funcionalidad_EXISTE_en_funcionalidad_KO': 'Id_functionality exists in functionality',
	'id_funcionalidad_NO_EXISTE_en_funcionalidad_KO': 'Id_functionality does not exist in functionality',
	'id_funcionalidad_EXISTE_en_rolaccionfuncionalidad_KO': 'Id_functionality exists in roleactionfunctionality',
	'no_puede_editar_funcionalidades_admin': 'Can not edit admin functionality',
	'no_puede_borrar_funcionalidades_admin': 'Can not delete admin functionality',

	'no_puede_borrar_permiso_admin': 'Can not delete admin permission',
	'no_puede_editar_permiso_admin': 'Can not edit admin permission',
	'permiso_EXISTE_en_rolaccionfuncionalidad_KO': 'Permission exists in roleactionfunctionality',
	'permiso_NO_EXISTE_en_rolaccionfuncionalidad_KO': 'Permission exists in roleactionfunctionality',
	'prohibido_edit_rolaccionfuncionalidad': 'Forbidden to edit rolactionfunctionality',

	'pagina_usuario_wellcome': 'User Management',
	'pagina_persona_wellcome': 'Person Management',
	'pagina_accion_wellcome': 'Action Management',
	'pagina_funcionalidad_wellcome': 'Function Management',
	'pagina_rol_wellcome': 'Rol Management',

	'dni': 'DNI',
	'usuario': 'User Login',
	'id_rol': 'User Role',
	'nombre': 'Name',
	'apellido': 'Surname',
	'fecha_nacimiento': 'Date of birth',
	'email': 'Email',
	'foto': 'Photo',
	'direccion': 'Address',
	'telefono': 'Telephone',

	'accion': 'Id Action',
	'nombre_accion': 'Action name',
	'descrip_accion': 'Description',

	'funcionalidad': 'Function',
	'nombre_funcionalidad': 'Function name',
	'descrip_funcionalidad': 'Description',

	'rol': 'Rol',
	'nombre_rol': 'Rol name',
	'descrip_rol': 'Description',

	'contrasena': 'Password',

	////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////acciones////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//Codigos acciones
	'titulo_edit': 'Edit',
	'titulo_delete': 'Delete',
	'titulo_showcurrent': 'Detail',


	////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////Errores////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//Códigos
	'usuario_corto_ko': 'Login size too short (min 3 characters)',
	'usuario_largo_ko': 'Login size too long (max 15 characters)',
	'usuario_formato_ko': 'Login contains not allowed characters (only letter without accent and numbers are allowed)',

	'dni_mayor_ko': 'The DNI has a format of 8 numbers and 1 letter, it cannot be longer',
	'dni_menor_ko': 'The DNI has a format of 8 numbers and 1 letter, it cannot be shorter',
	'dni_letra_incorrecta': 'Wrong DNI, the letter of the NIF does not correspond',
	'dni_formato_ko': 'Wrong DNI, invalid format',

	'nombre_menor_ko': 'Name must have at least 3 letters',
	'nombre_mayor_ko': 'The name contains at most 45 letters',
	'nombre_formato_ko': 'The name can only contain letters',

	'apellido_menor_ko': 'Last name must have at least 5 letters',
	'apellido_mayor_ko': 'Surname contains at most 100 letters',
	'apellido_formato_ko': 'The last name can only contain letters',

	'fecha_menor_ko': 'The date has a size of 10 characters, not less',
	'fecha_mayor_ko': 'The date has a size of 10 characters, not greater',
	'fecha_formato_ko': 'Wrong date format',


	'email_menor_ko': 'The email has a minimum size of 8 characters, not less',
	'email_mayor_ko': 'The email has a maximum size of 45 characters, not more',
	'email_formato_ko': 'The email address is incorrect.',

	'direccion_menor_ko': 'The address has a minimum size of 10 characters, not less',
	'direccion_mayor_ko': 'The address has a maximum size of 45 characters, not more',
	'direccion_formato_ko': 'La dirección de email es incorrecta.',

	'tlf_menor_ko': 'The phone has a size of 9 characters, not less',
	'tlf_mayor_ko': 'The phone has a size of 9 characters, not greater',
	'tlf_formato_ko': 'The phone contains only numbers',
	'tlf_formato_esp_ko': 'The phone being of Spanish format can only start with 6,7,8 or 9',

	'foto_menor_ko': 'The photo must have at least 6 letters',
	'foto_mayor_ko': 'The photo contains at most 40 letters',
	'foto_formato_ko': 'The photo is formed only by letters and 1 point',
	'foto_extension_ko': 'The photo has a .png or .jpg extension',

	'id_accion_menor_ko': 'The id_action has a minimum size of 1 character, not less',
	'id_accion_mayor_ko': 'The id_action has a maximum size of 4 characters, not greater',
	'id_accion_formato_ko': 'The action_id contains only numbers',

	'nombre_universal_menor_ko': 'The name must have at least 6 letters',
	'nombre_universal_mayor_ko': 'The name contains at most 48 letters',
	'nombre_universal_formato_ko': 'The name can only contain letters',

	'descrip_universal_menor_ko': 'Description must be at least 20 characters',
	'descrip_universal_mayor_ko': 'The description contains at most 200 characters',
	'descrip_universal_formato_ko': 'El nombre sólo puede contener letras',

	'id_rol_menor_ko': 'The id_rol has a minimum size of 1 character, not less',
	'id_rol_mayor_ko': 'The id_rol has a maximum size of 4 characters, not greater',
	'id_rol_formato_ko': 'The rol_id contains only numbers',

	'id_funcionalidad_menor_ko': 'The id_function has a minimum size of 1 character, not less',
	'id_funcionalidad_mayor_ko': 'The id_function has a maximum size of 4 characters, not greater',
	'id_funcionalidad_formato_ko': 'The function_id contains only numbers',

}
