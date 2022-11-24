const  btnApostar = document.getElementById('btnApostar'),
confirmacion = document.querySelector('.confirmacion');


const usuarios = [{
    nombre: 'Azul',
    mail: 'azulperez@mail.com',
    pass: 'azulcomoelmarazul'
},
{
    nombre: 'Betiana',
    mail: 'betidicarlo@mail.com',
    pass: 'sha23AWx!'
},
{
    nombre: 'Carlos',
    mail: 'lopezcarlosadrian@mail.com',
    pass: 'sanlore2002'
},
{
    nombre: 'Mateo',
    mail: 'mateofontoura@mail.com', 
    pass: '123456'
}]

const partidos = [{
    partido: "Real Madrid vs Barcelona",
    liga: "Española",
    posibleResultado: '2-0',
    fecha:'18/12/2022 a las 15:00 uru',
    img: './img/realmadrid.jpg',
    id:'reaBar'
}, {
    partido: "Nacional vs Peñarol",
    liga: "Uruguaya",
    posibleResultado: '1-1',
    fecha:'09/12/2022 a las 17:00 uru',
    img: './img/nacional.webp',
    id:'nacPen'
}, {
    partido: "Uruguay vs Argentina",
    liga: "Eliminatorias Sudamericanas",
    posibleResultado: '1-2',
    fecha:'05/03/2023 a las 21:00 uru',
    img: './img/argentina.webp',
    id:'uruArg'
}, {
    partido: "Chelsea vs Porto",
    liga: "Liga de Campeones",
    posibleResultado: '3-1',
    fecha:'15/12/2022 a las 17:00 uru',
    img: './img/chelsea.webp',
    id:'chePor'
}, {
    partido: "Inglaterra vs Iran",
    liga: "Copa del Mundo",
    posibleResultado: '2-0',
    fecha:'21/11/2022 a las 10:00 uru',
    img: './img/inglaterra.png',
    id:'ingIra'
}]


//Todos los elementos del DOM que voy a necesitar
const inputMailLogin = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'), 
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    elementosToggleables = document.querySelectorAll('.toggeable');


//La función de validar se aprovecha del tipo de return que hace el método find (el objeto si lo encuentra, o undefined si no encuentra ninguno que cumpla con la condición)
function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);
    console.log(encontrado)
    console.log(typeof encontrado)

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        //si estoy en este punto, quiere decir que el usuario existe, sólo queda comparar la contraseña
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

//Después de validar el usuario, guardamos los datos del usuario que recuperamos de la database en el storage, para tener disponible el nombre
function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

//Limpiar los storages
function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

//Recupero los datos que se guardaron en el storage y los retorno
function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

//Cambio el DOM para mostrar el nombre del usuario logueado, usando los datos del storage
function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

//Creo HTML dinámico para mostrar la información de los partidos a partir del array fake DB
function mostrarPartido(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardPartido" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombrePartido">Partido: ${element.partido}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom img" id="fotoPartido">
                <div class="card-body">
                    <p class="card-text" id="liga">Liga: ${element.liga}</p>
                    <p class="card-text" id="posibleResultado">Posible Resultado: ${element.posibleResultado}</p>
                    <p class="card-text" id="fecha">Fecha: ${element.fecha}</p>
                    <button id="${element.id}">Apostar</button>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
};


//Todos los botones generados con el function MostrarPartidos

const btnreaBar = document.getElementById('reaBar'),
btnnacPen = document.getElementById('nacPen'),
btnuruArg = document.getElementById('uruArg'),
btnchePor = document.getElementById('chePor'),
btningIra = document.getElementById('login');

/*
btnnacPen.addEventListener('click', (e) => {
    e.preventDefault();
    
   console.log("hola Mundo");
    
 
})
*/
btnApostar.addEventListener('click', () => {
cardIngreso.classList.replace('visible', 'oculta');
confirmacion.classList.replace('oculta', 'visible');

})

//Esta función nos permite intercambiar la visualización de los elementos del DOM, agregando o sacando la clase d-none. Si el elemento la tiene, se la saco, y si no la tiene, se la agrego. La gata Flora de las funciones sería.
function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
};     


//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarPartido(partidos);
        presentarInfo(elementosToggleables, 'd-none');
    }
};


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    //Validamos que ambos campos estén completos
    if (!inputMailLogin.value || !inputPassLogin.value) {
        alert('Todos los campos son requeridos');
    } else {
        //Revisamos si el return de la función validate es un objeto o un boolean. Si es un objeto, fue una validación exitosa y usamos los datos. Si no, informamos por alert.
        let data = validarUsuario(usuarios, inputMailLogin.value, inputPassLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

            //Revisamos si elige persistir la info aunque se cierre el navegador o no
            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            //Recién ahora cierro el cuadrito de login
            modal.hide();
            //Muestro la info para usuarios logueados
            mostrarPartido(partidos);
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});

estaLogueado(recuperarUsuario(localStorage));



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


