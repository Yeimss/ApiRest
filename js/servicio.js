//consumo de api con js
//1. Configurar la URI del servicio

let uri="http://localhost/casita/hogar/v1/productos"

//2.configuro los parametros de la peticion

let parametros={
    method:"get"
}

//3. consumir el API (USAR EL FETCH)
fetch(uri, parametros)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    pintarDatos(respuesta)
})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){
    let fila= document.getElementById("fila")

    datos.forEach(function(producto){
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("col")
        
        let cuerpo=document.createElement("div")
        cuerpo.classList.add("card-body")
        
        let imagen=document.createElement("img")
        imagen.classList.add("w-100")
        imagen.classList.add("h-100")
        imagen.classList.add("img-fluid")
        imagen.src=producto.imagen

        let nombre=document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.classList.add("mt-3")
        nombre.textContent=producto.producto

        let precio=document.createElement("h4")
        precio.classList.add("mt-2")
        precio.classList.add("text-center")

        precio.textContent=producto.precio

        //padres e hijos
        fila.appendChild(tarjeta)
        tarjeta.appendChild(cuerpo)
        cuerpo.appendChild(imagen)
        cuerpo.appendChild(nombre)
        cuerpo.appendChild(precio)
        
        
    });
}