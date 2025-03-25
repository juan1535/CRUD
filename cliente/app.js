import listar from "./app/ciudades/listar.js";
import documento, { documentType } from "./app/tipo_documento/documento.js";
import insertar from "./app/usuarios/crear.js";
import listar_usuarios from "./app/usuarios/listar_usuarios.js";

const ciudad = document.querySelector("#ciudad")
const button = document.querySelector('button')
const nombre = document.querySelector('#nombre')
const apellidos = document.querySelector('#apellidos')
const telefono = document.querySelector('#telefono')
const direccion = document.querySelector('#direccion')
const email = document.querySelector('#email')
const politicas = document.querySelector('#politicas')
const formulario = document.querySelector('.form')
const tipoDeDocumento = await documento();
const tipo_documento = document.querySelector("#tipo")

const guardarUsuario = (event) => {
    
    event.preventDefault()
    const data = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        ciudad: ciudad.selectedIndex,
        telefono: telefono.value,
        direccion: direccion.value,
        tipo_documento: tipo_documento.selectedIndex,
        documento: documento.value,
        email: email.value
    }
    insertar(data)
}

documentType(tipoDeDocumento, tipo_documento);
listar_usuarios();
listar(ciudad)

formulario.addEventListener("submit", guardarUsuario);