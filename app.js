import listar from "./app/ciudades/listar.js";
import documento from "./app/tipo_documento/documento.js";

const ciudades = await listar();
const ciudad = document.querySelector("#ciudad")

const button = document.querySelector('button')

const tipoDeDocumento = await documento();
const tipo_documento = document.querySelector("#tipo")

const llenadoCiudad = (ciudades, elemento) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement('option');
    option.textContent = "Seleccione...";
    fragmento.append(option);
    ciudades.forEach(({id, nombre}) => {
    const option = document.createElement('option');
    option.textContent = nombre;
    option.value = id;
    fragmento.append(option);
    });
    elemento.append(fragmento);
}

const documentType = (documento, elemento) => {  
    const fragmento = document.createDocumentFragment();
    const option = document.createElement('option');
    option.textContent = "Seleccione...";
    fragmento.append(option);
    documento.forEach(({id, tipo}) => {
    const option = document.createElement('option');
    option.textContent = tipo;
    option.value = id;
    fragmento.append(option);
    });
    elemento.append(fragmento);
}

llenadoCiudad(ciudades, ciudad)
documentType(tipoDeDocumento, tipo_documento)

function guardarDatos() {
  


}



// funcion expresada primero se declara después de llama