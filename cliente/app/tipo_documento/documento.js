const documento = async () => {
    const pedir = await fetch('http://localhost:3000/tipo');
    const data = await pedir.json();
    return data;
};

const documentType = (documento, elemento) => {  
    const fragmento = document.createDocumentFragment();
    const option = document.createElement('option');
    option.textContent = "Seleccione...";
    fragmento.append(option);

    documento.forEach(({ id, tipo }) => {
        const option = document.createElement('option');
        option.textContent = tipo;
        option.value = id;
        fragmento.append(option);
    });

    elemento.append(fragmento);
};

export { documentType };
export default documento;
