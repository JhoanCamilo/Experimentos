let documentos = ['Cédula de ciudadanía', 'Cédula extranjera', 'pasaporte', 'PEPFF']
let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
let divisas = [
    {
        NombreDivisa: 'Dolar',
        TasaCompra: 3800,
        TasaVenta: 4210
    }, 
    {
        NombreDivisa: 'Euro',
        TasaCompra: 4300,
        TasaVenta: 5478
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

function abrir(){
    window.open("http://127.0.0.1:5500/index.html")
}
function resetear() {
    const myTimeout = setTimeout(tiempo, 2000)
}
function tiempo() {
    let fecha = new Date()
    let hora = fecha.toLocaleTimeString()
    let fecha_actual = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate()
    document.getElementById("Fecha").value = fecha_actual
    document.getElementById("Hora").value = hora

    const dias = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ];
      const numeroDia = new Date(fecha_actual).getDay();
      const nombreDia = dias[numeroDia];
      if (nombreDia == 'sábado' || nombreDia == 'domingo') {
        Swal.fire({
            title: 'error',
            text: "Transacción no permitida el día de hoy",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Entendido'
          }).then((result) => {
            if (result.isConfirmed) {
                window.close()
            }
          })
      }
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
function calcular() {
    let cantidad = document.getElementById("Cantidad").value
    let tasa = document.getElementById("Tasa_Compra").value
    document.getElementById("Valor_Pagar").value = cantidad*tasa
}
function BuscarUsuario() {
    let numDoc = document.getElementById("Documento_Number").value
    let DocType = document.getElementById("Document_Type").value
    let registrado = false
    for (const i in Clientes) {
        if (Clientes[i].Documento == numDoc && Clientes[i].Tipo == DocType) {
            document.getElementById("Client_Name").value = Clientes[i].Nombre
            registrado = true
        }
    }
    if(registrado == false){
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Cliente inexistente'
          })
        document.getElementById("Client_Name").value = ""
    }
}
$("#Documento_Number").blur(function() {
    let numDoc = document.getElementById("Documento_Number").value
    if (numDoc == "") {}
    else{
        BuscarUsuario()
    }
})

monedas()
documentosId()
tiempo()