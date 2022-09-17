import {calcularIva2,Producto} from "../temas-ts/05-funcion-desestructuracion"

const tiendaProductos:Producto[]=[
        {
                desc:'Telefono1',
                precio:13123
        },
        {
                desc:'Tablet1',
                precio:13123
        },
        {
                desc:'Telefono2',
                precio:13123
        }
]

const [total1,iva1]=calcularIva2(tiendaProductos);
console.log(`Total: ${total1} \n IVA: ${iva1}`)