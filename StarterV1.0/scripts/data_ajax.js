//Agregar el codigo necesario para cargar un array de objetos en una tabla html(se prohibe usar innerHTML)
//Agregar evento a todos los TD. conseguir los TD con una funcion recursiva que reciba como parametros, el body del HTML, y
//la funcion que asigna el manejador(la tabla ya debera ser parte del DOM).
//Agregar algun estilo por codigo JS
//Agregar algun estilo por hoja de estilo CSS

//Agregar el codigo necesario para realizar un ABM de personas(usando AJAX)
/*
traer:
HTTP:GET
URL:http://localhost:3000/traer
PARAMS: collection=personas
RTA: ARRAY DE PERSONAS

agregar:
HTTP:POST
URL:http://localhost:3000/agregar
PARAMS: {collection: 'personas',objeto:<persona>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:{message: "Alta exitosa"}

modificar:
HTTP:POST
URL:http://localhost:3000/modificar
PARAMS: {collection: 'personas',objeto:<persona>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:"Modificacion exitosa"

eliminar:
HTTP:POST
URL:http://localhost:3000/eliminar
PARAMS: {'collection':'personas','id' : <id>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:{"message":"Baja exitosa"}

*/

//NOTA: EL REQUEST HEADER SE AGREGA UNA VEZ ABIERTA LA CONEXION


function loadDoc() {

    var request;
    request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if(this.readyState != 4)
            document.getElementById("spinner").style.display = "inline-block";

        

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("spinner").style.display = "none";
            generarTabla(this);
            //document.getElementById("parrafo").innerHTML = this.responseText;

        }
    };

    request.open("GET", 'http://localhost:3000/traer/?collection=personas', true);
    request.send();
}

function loadPerson() 
{
      
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('firstname').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var active = document.getElementById('active').value;

    var obj = {};
    
    obj['id'] = id;
    obj['first_name'] = nombre;
    obj['last_name'] = apellido;
    obj['email'] = email;
    obj['gender'] = gender;
    obj['active'] = active;

    var json = {};

    json['collection'] = "personas";
    json['objeto'] = obj;



    var request;
    request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("parrafo").innerHTML = "subió con éxito";
        }
    };

    request.open("POST", 'http://localhost:3000/agregar/', true);
    
    request.setRequestHeader('Content-Type', 'application/json');
    
    request.send(JSON.stringify(json));
}