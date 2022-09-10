let documentos = ['Cédula de ciudadanía', 'Cédula extranjera', 'pasaporte', 'PEPFF']
let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
let divisas = [
    {
        NombreDivisa: 'Dolar',
        TasaCompra: 3800
    }, 
    {
        NombreDivisa: 'Euro',
        TasaCompra: 4300
    }
]
let Clientes = [
    {
        Nombre: "Jhoan Camilo Arango Monsalve",
        Documento: "1006167739",
        Tipo: "Cédula de ciudadanía"
    },
    {
        Nombre: "Cristian Camilo Ortega Collazos",
        Documento: "100876944",
        Tipo: "Cédula de ciudadanía"
    },
    {
        Nombre: "Laura Catalina Narvaez García",
        Documento: "100984104",
        Tipo: "Cédula de ciudadanía"
    },
    {
        Nombre: "Ken Mathews",
        Documento: "F521-106-76-186-0",
        Tipo: "Cédula extranjera"
    },
    {
        Nombre: "Brayan Mateo Ortiz Chavarria",
        Documento: "548648796",
        Tipo: "PEPFF"
    }
]

function tiempo() {
    let fecha = new Date()
    let hora = fecha.toLocaleTimeString()
    let fecha_actual = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate()
    document.getElementById("Fecha").value = fecha_actual
    document.getElementById("Hora").value = hora
}
function documentosId(){
    for (let i in documentos) {
        document.getElementById("Document_Type").innerHTML += "<option value='"+documentos[i]+"'>"+documentos[i]+"</option>"
    }
}
function monedas(){
    for (let i in divisas) {
        document.getElementById("Divisas").innerHTML += "<option value='"+divisas[i].NombreDivisa+"'>"+divisas[i].NombreDivisa+"</option>"
    }
}
function tasas() {
    let opcion = document.getElementById("Divisas").value
    for (let i in divisas) {
        if (divisas[i].NombreDivisa == opcion) {
            document.getElementById("Tasa_Compra").value = divisas[i].TasaCompra
        }
        if (opcion == "") {
            document.getElementById("Tasa_Compra").value = ""
        }
    }
}


monedas()
documentosId()
tiempo()