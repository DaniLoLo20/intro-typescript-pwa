export interface Producto {
    desc:string,
    precio:number
}

const telefono:Producto={
    desc:'Una coca',
    precio:17
}

const tablet:Producto=
{
    desc:'Una cocota',
    precio:34,
}
function calcularIva(Productos:Producto[]): number {
    let total = 0;
    Productos.forEach((producto)=>
    (
        total+=producto.precio
    ))
    return total*0.16

}

const articulos1 = [telefono,tablet];
const IVAtot = calcularIva(articulos1);
console.log(`IVA: ${IVAtot}`)


export function calcularIva2(Productos:Producto[]):[number,number] {
    let total = 0;
    Productos.forEach(({precio})=>
    (
        total+=precio
    ))
    return [total,total*0.16]

}
const articulos2 = [telefono,tablet];
const [total,iva] = calcularIva2(articulos2);
console.log(`Total: ${total} \n IVA: ${iva}`)
