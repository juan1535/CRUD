const listar = async (elemento) => { 
        const response = await fetch('http://localhost:3000/ciudades');
        const ciudades = await response.json();
        
        llenadoCiudad(ciudades, elemento)
};

const llenadoCiudad = (ciudades, elemento) => {

    const fragmento = document.createDocumentFragment();
    const option = document.createElement('option');
    option.textContent = "Seleccione...";
    fragmento.append(option);

    ciudades.forEach(({ id, nombre }) => {
        const option = document.createElement('option');
        option.textContent = nombre;
        option.value = id;
        fragmento.append(option);
    });

    elemento.append(fragmento);
};

export default listar;
