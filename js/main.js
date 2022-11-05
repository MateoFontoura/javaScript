class Partido{
    constructor(equipo, goles, ganador,id){
        this.equipo = equipo;
        this.goles = parseInt(goles);
        this.ganador = ganador;
        this.id = id;
    }

    asignarID(array){
        this.id = array.lenght; 
    }
}
const partidos = [
    new Partido('Nacional', 1  , 'Gana', 1),
    new Partido('Real Madrid', 5, 'Gana', 2),
    new Partido('Liverpool', 2, 'Pierde', 3),
    new Partido('Progreso', 0, 'Empata', 4),
]

console.log(partidos);
/*
let continuar = true; 

while(continuar){
    let ingreso = prompt('Ingresa los datos solcitados: equipo, cantidad de goles, ganador del partido, separados por una barra diagonal (/). Ingresa X para finalizar.');
    
    if (ingreso.toUpperCase() == 'X'){
        continuar = false;
        break;   
}
    const datos = ingreso.split('/');
    console.log(datos);
    
    const partido = new Partido(datos[0],datos[1],datos[2],datos[3],);

    partidos.push(partido);
    partido.asignarID(partidos);
    console.log(partidos);
}
*/
let criterio = prompt('Elegi el criterio de busqueda: \n1 - Alfabeticamente (A a Z) \n2 - Alfabeticamente (Z a A) \n3 - Cantidad de goles');

function ordenar(criterio, array){
    let arrayOrdenado = array.slice(0);

    switch(criterio){
        case '1':
        let nombreAscendente = arrayOrdenado.sort((a,b) => a.equipo.localeCompare(b.equipo));
        return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a,b) => b.equipo.localeCompare(a.equipo));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a,b) => b.goles - a.goles);
        default:
            alert ('Opcion incorrecta')
            return arrayOrdenado;
    }
}

function crearStringResultado(array){
    let info = '';

    array.forEach(elemento => {
        info+= 'Equipo: '+elemento.equipo +'\nCantidad de Goles: '+elemento.goles +'\nResultado Final: '+elemento.ganador+'\n \n'
    });

    return info;
}

alert(crearStringResultado(ordenar(criterio,partidos)));
/*

let userGuardado = 'Homero';
let passGuardada = 'Simpson';

function nombre() {
    let ingresar = false;a paARITNO\
 

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
                plata = parseInt(prompt('Ingresa monto a apostar'));
                plata = plata * 2;
                alert('Su ganacia si el partido termina en empate seria de $ ' + plata);
                break;
            case '3':
                cash = parseInt(prompt('Ingresa monto a apostar'));
                cash = cash * 1.2;
                alert('Su ganacia si el Barcelona gana seria de $ ' + cash);
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
alert('HASTA PRONTO!!!')*/