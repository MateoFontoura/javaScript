
let userGuardado = 'Homero';
let passGuardada = 'Simpson';

function nombre() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userIngresado = prompt('Ingresar usuario. Tienes ' + (i + 1) + ' oportunidades.');
        if (userGuardado === userIngresado) {
            alert('Ingreso exitoso. Bienvenido/a');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + i + ' intentos.');
        }
    }

    return ingresar;

}

if (nombre()) {
    let opcion = prompt('Elija el resultado: \n1- Gana el Real Madrid. Ganancia x1.5 \n2- Empatan. x2.0 \n3- Gana el Barcelona. x1.2 \n4- Pulse X para salir');
    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                deposito = parseInt(prompt('Ingresa monto a apostar'));
                deposito = deposito * 1.5;
                alert('Su ganacia si el Madrid gana seria de $ ' + deposito);
                break;
            case '2':
                deposito = parseInt(prompt('Ingresa monto a apostar'));
                deposito = deposito * 2;
                alert('Su ganacia si el partido termina en empate seria de $ ' + deposito);
                break;
            case '3':
                deposito = parseInt(prompt('Ingresa monto a apostar'));
                deposito = deposito * 1.2;
                alert('Su ganacia si el Barcelona gana seria de $ ' + deposito);
                break;
            default:
                alert('Elige una opcion correcta');
                break;
        }
        opcion = prompt('Elija el resultado: \n1- Gana el Real Madrid. Ganancia x1.5 \n2- Empatan. x2.0 \n3- Gana el Barcelona. x1.2 \n4- Pulse X para salir');
       
}
            
} else{
    alert('No sabe el usuario, permiso para apostar denegado.')
}
alert('HASTA PRONTO!!!')