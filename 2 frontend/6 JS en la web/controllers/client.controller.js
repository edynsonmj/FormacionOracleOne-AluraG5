import { clientServices } from "../service/client-server.js";

console.log(clientServices)

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido = `
    <tr>
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                        id="${id}"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
    </tr>`
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button")
    btn.addEventListener("click", ()=>{
        const ident = btn.id;
        clientServices.eliminarCliente(ident).then(respuesta =>{
            console.log(respuesta);
        }).catch(err => alert("ocurrio un error"))
    })
    console.log(btn);
    return linea;
}

const table = document.querySelector("[data-table]")

clientServices.listaClientes().then((data) =>{
    data.forEach(({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=> alert("ocurrio un error"));
