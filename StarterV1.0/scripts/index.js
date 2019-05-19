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


window.addEventListener('load', function () {
    
        var btnCargar = document.getElementById("btnCargar");
        var btnAgregar = document.getElementById("btnAgregar");
        var submit = document.getElementById("btn-submit");

        btnCargar.addEventListener('click', loadDoc);
        btnAgregar.addEventListener('click', generarFormulario);
        submit.addEventListener('click', loadPerson);

        //document.getElementById("spinner").style.display = "inline-block";
        
});


function generarTabla(request)
{
    if(document.getElementById('mitabla') === null)
    {       
        var data = JSON.parse(request.responseText);
           
        var table = document.createElement('table');
        table.id = "mitabla";
        var thead = document.createElement('thead');
        var tbody = document.createElement('tbody');
        var tr1 = document.createElement('tr');
    
        // CREAR ENCABEZADO
        for(var i = 0; i<1; i++)
        {
            var tr = document.createElement('tr');
            for (var j = 0; j < Object.keys(data[i]).length; j++)
            {
                var th = document.createElement('th');
                th.id = "column" + (j+1);
                var node = document.createTextNode((Object.keys(data[i])[j]).toUpperCase());
                th.appendChild(node);
                tr.appendChild(th);      
            }
            
            thead.appendChild(tr);
        }
    
        thead.appendChild(tr1);
        table.appendChild(thead);
        
        // CREAR CUERPO
        for(var i = 0; i<data.length; i++)
        {
            var tr = document.createElement('tr');
            for (var j = 0; j < Object.keys(data[i]).length; j++)
            {
                var td = document.createElement('td');
                var node = document.createTextNode(Object.values(data[i])[j]);
                td.appendChild(node);
                td.id = "column" + (j+1);
                tr.appendChild(td);      
            }
            tbody.appendChild(tr);
        }

        table.appendChild(tbody);
        //document.body.appendChild(table);
        document.getElementById('divTabla').appendChild(table);
    }
}


function generarFormulario()
{
    var divFrm = document.getElementById("divFrm");
    divFrm.removeAttribute("hidden");

}