const listar_usuarios = async () => {

        const response = await fetch('http://localhost:3000/usuarios');
        const usuarios = await response.json();
        
        // Limpiar la tabla antes de agregar nuevos datos
        tbody.innerHTML = '';

        usuarios.forEach(user => {
            const template = document.querySelector('#users')
            const tbody = document.querySelector("#tbody");
            const clone = template.content.cloneNode(true);
            
            clone.querySelector(".first_name").textContent = user.nombre;
            clone.querySelector(".last_name").textContent = user.apellidos;
            clone.querySelector(".phone").textContent = user.telefono;
            clone.querySelector(".address").textContent = user.direccion;
            clone.querySelector(".type_id").textContent = user.tipo_documento;
            clone.querySelector(".document").textContent = user.document;
            clone.querySelector(".email").textContent = user.email;

            tbody.appendChild(clone);
        });
    }
export default listar_usuarios