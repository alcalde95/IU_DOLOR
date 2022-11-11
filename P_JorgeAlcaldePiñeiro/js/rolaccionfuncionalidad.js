//Función ajax con promesas
function devolverrolesAjaxrolaccionfuncionalidadPromesa() {

    crearformoculto('form_devolver_roles', '');
    insertacampo('form_devolver_roles', 'controlador', 'rol');
    insertacampo('form_devolver_roles', 'action', 'SEARCH');

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_devolver_roles").serialize(),
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

async function devolverrolesajaxrolaccionfuncionalidad() {

    var idioma = getCookie('lang');

    await devolverrolesAjaxrolaccionfuncionalidadPromesa()
        .then((res) => {
            crearTablarolaccionfuncionalidadHead(res.resource);

        })
        .catch((res) => {
            mensajeFAIL(res.code);
            setLang();
        });

    document.getElementById('form_devolver_roles').remove();
}


let roles;

function crearTablarolaccionfuncionalidadHead(data) {

    roles = data;
    basic = '<th class="funcionalidad"></th><th class="accion"></th>';
    $("#id_datostabla").append(basic);
    setLang();
    for (let rol of data) {
        tableheader = "<th>" + rol.nombre_rol + "</th>"

        $("#id_datostabla").append(tableheader);
    }
    $("#id_datostabla").append("</tr>");

}



function crearTablarolaccionfuncionalidad() {
    document.getElementById('id_datostabla').innerHTML = "";
    document.getElementById('id_datosrolaccionfuncionalidad').innerHTML = "";
    devolverrolesajaxrolaccionfuncionalidad();
    devolverrolaccionfuncionalidadAjax();
}




//Función ajax con promesas
function devolverrolaccionfuncionalidadAjaxPromesa() {

    crearformoculto('form_devolver_rolaccionfuncionalidad', '');
    insertacampo('form_devolver_rolaccionfuncionalidad', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_devolver_rolaccionfuncionalidad', 'action', 'SEARCH');

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_devolver_rolaccionfuncionalidad").serialize(),
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

async function devolverrolaccionfuncionalidadAjax() {

    var idioma = getCookie('lang');

    await devolverrolaccionfuncionalidadAjaxPromesa()
        .then((res) => {
            crearTablarolaccionfuncionalidadBody(res.resource);

        })
        .catch((res) => {
            mensajeFAIL(res.code);
            setLang();
        });

    document.getElementById('form_devolver_rolaccionfuncionalidad').remove();
}


function crearTablarolaccionfuncionalidadBody(raf) {

    let funPrev = raf[0].id_funcionalidad.id_funcionalidad;
    let accPrev = raf[0].id_accion.id_accion;

    let j = 0;  //contador raf
    let i = 0;  //contador roles

    let datosfila = '<tr><td>' + raf[0].id_funcionalidad.nombre_funcionalidad + '</td><td>' + raf[0].id_accion.nombre_accion + '</td>';

    while (i < raf.length) {

        funAct = raf[i].id_funcionalidad.id_funcionalidad;
        accAct = raf[i].id_accion.id_accion;

        if (funAct == funPrev && accAct == accPrev) {
            if (raf[i].id_rol.id_rol == roles[j].id_rol) {
                
                texto = '<td>' + '<img src="./images/addRallado.png" width="20" height="20">' + '<b>&emsp;</b>' + '<img src="./images/menos.png" width="20" height="20" onclick="DELETErolaccionfuncionalidadAjax(' + raf[i].id_rol.id_rol + ',' + raf[i].id_accion.id_accion + ',' + raf[i].id_funcionalidad.id_funcionalidad + ');">' + '</td>';
                datosfila += texto;
                j++;
                i++;
            } else {
                texto = '<td>' + '<img src="./images/add4.png" width="20" height="20" onclick="ADDrolaccionfuncionalidadAjax(' + roles[j].id_rol + ',' + raf[i].id_accion.id_accion + ',' + raf[i].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menosRallado.png" width="20" height="20">' + '</td>';
                datosfila += texto;
                j++;
            }
        } else {
            for (j; j < roles.length; j++) {
                texto = '<td>' + '<img src="./images/add4.png" width="20" height="20" onclick="ADDrolaccionfuncionalidadAjax(' + roles[j].id_rol + ',' + raf[i-1].id_accion.id_accion + ',' + raf[i-1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menosRallado.png" width="20" height="20">' + '</td>';
                datosfila += texto;
            }
            datosfila += '</tr>';
            $("#id_datosrolaccionfuncionalidad").append(datosfila)
            datosfila = '<tr><td>' + raf[i].id_funcionalidad.nombre_funcionalidad + '</td><td>' + raf[i].id_accion.nombre_accion + '</td>';
            j = 0;
            funPrev = raf[i].id_funcionalidad.id_funcionalidad;
            accPrev = raf[i].id_accion.id_accion;
        }
    }

    while (j < roles.length) {
        textos = '<td>' + '<img src="./images/add4.png" width="20" height="20" onclick="ADDrolaccionfuncionalidadAjax(' + roles[j].id_rol + ',' + raf[i-1].id_accion.id_accion + ',' + raf[i-1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menosRallado.png" width="20" height="20">' + '</td>';
        datosfila += textos;
        j++;
    }
    datosfila += '</tr>';
    $("#id_datosrolaccionfuncionalidad").append(datosfila);
}




//Función ajax con promesas
function ADDrolaccionfuncionalidadAjaxPromesa(id_rol, id_accion, id_funcionalidad) {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'ADD');
    insertacampo('form_generico', 'id_rol', id_rol);
    insertacampo('form_generico', 'id_accion', id_accion);
    insertacampo('form_generico', 'id_funcionalidad', id_funcionalidad);

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
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function ADDrolaccionfuncionalidadAjax(id_rol, id_accion, id_funcionalidad) {

    var idioma = getCookie('lang');

    await ADDrolaccionfuncionalidadAjaxPromesa(id_rol, id_accion, id_funcionalidad)
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'add_rolaccionfuncionalidad_OK';
            }
            crearTablarolaccionfuncionalidad();
            mensajeactionOK(res.code);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();

}






function DELETErolaccionfuncionalidadAjaxPromesa(id_rol, id_accion, id_funcionalidad) {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'DELETE');
    insertacampo('form_generico', 'id_rol', id_rol);
    insertacampo('form_generico', 'id_accion', id_accion);
    insertacampo('form_generico', 'id_funcionalidad', id_funcionalidad);
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
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function DELETErolaccionfuncionalidadAjax(id_rol, id_accion, id_funcionalidad) {

    var idioma = getCookie('lang');

    await DELETErolaccionfuncionalidadAjaxPromesa(id_rol, id_accion, id_funcionalidad)
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'delete_rolaccionfuncionalidad_OK';
            }
            crearTablarolaccionfuncionalidad();
            mensajeactionOK(res.code);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();
}




function resetearformrolaccionfuncionalidad() {

	// eliminar el select
	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	}

    selectviejorol = document.getElementById('id_id_funcionalidad');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_funcionalidad').removeChild(selectviejorol);
	}

    selectviejorol = document.getElementById('id_id_accion');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_accion').removeChild(selectviejorol);
	}

	$("#id_id_rol").attr('readonly', false);
	$("#id_id_rol").val('');
	$("#id_id_rol").on('blur', false);

    $("#id_id_funcionalidad").attr('readonly', false);
	$("#id_id_funcionalidad").val('');
	$("#id_id_funcionalidad").on('blur', false);

    $("#id_id_accion").attr('readonly', false);
	$("#id_id_accion").val('');
	$("#id_id_accion").on('blur', false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_usuario").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: none');

	setLang();

}




function crearformSEARCHrolaccionfuncionalidad() {

	// resetear el formulario
	resetearformrolaccionfuncionalidad();

	// se rellena el action del formulario
	document.getElementById('id_form_rolaccionfuncionalidad').action = 'javascript:crearTablarolaccionfuncionalidadSEARCH()';

	// se invoca una función que crea el select de roles desde datos del back
	pintarselectrolesAjax(false, true, '');
    pintarselectfuncionalidadesAjax(false, true, '');
    pintarselectaccionesAjax(false, true, '');


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/search4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_search';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = crearTablarolaccionfuncionalidadSEARCH;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_rolaccionfuncionalidad').style.display = 'block';

}



//Función ajax con promesas
function SEARCHrolaccionfuncionalidadAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rolaccionfuncionalidad');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','id_rol', document.getElementById('id_id_rol').value);
	insertacampo('form_generico','id_funcionalidad', document.getElementById('id_id_funcionalidad').value);
	insertacampo('form_generico','id_accion', document.getElementById('id_id_accion').value);

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
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


async function  SEARCHrolaccionfuncionalidadAjax() {
	
	var idioma = getCookie('lang');
	
	await SEARCHrolaccionfuncionalidadAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_rolaccionfuncionalidad_OK';	}
            crearTablarolaccionfuncionalidadBody(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}



function crearTablarolaccionfuncionalidadSEARCH() {
    document.getElementById('id_datostabla').innerHTML = '';
    document.getElementById('id_datosrolaccionfuncionalidad').innerHTML = '';
    devolverrolesajaxrolaccionfuncionalidad();
    SEARCHrolaccionfuncionalidadAjax();
}