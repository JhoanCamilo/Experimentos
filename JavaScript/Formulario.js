let documentos = ['-Seleccione una opción-', 'Cédula de ciudadanía', 'Cédula extranjera', 'pasaporte', 'PEPFF']
let divisas = ['-Seleccione-', 'Dolar', 'Euro']
let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

let Clientes = [
    {
        "Nombre": "Jhoan Camilo Arango Monsalve",
        "Documento": "1006167739",
        "Tipo": "Cédula de ciudadanía"
    },
    {
        "Nombre": "Cristian Camilo Ortega Collazos",
        "Documento": "100876944",
        "Tipo": "Cédula de ciudadanía"
    },
    {
        "Nombre": "Laura Catalina Narvaez García",
        "Documento": "100984104",
        "Tipo": "Cédula de ciudadanía"
    },
    {
        "Nombre": "Ken Mathews",
        "Documento": "F521-106-76-186-0",
        "Tipo": "Cédula extranjera"
    },
    {
        "Nombre": "Brayan Mateo Ortiz Chavarria",
        "Documento": "548648796",
        "Tipo": "PEPFF"
    }
]

function tiempo() {
    let fecha = new Date()
    let fecha_actual = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate()
    document.getElementById("Fecha").value = fecha_actual
}




tiempo()