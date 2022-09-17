interface Detalles
{
autor:string,
year:number
}
interface Reproductor 
{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles;
}
const reproductor: Reproductor={
    volumen:90,
    segundo:66,
    cancion:'El ansioso',
    detalles:
    {
        autor:'Grupo Marrano',
        year: 2016,
    }
}
const{
    volumen,segundo,cancion,detalles
}=reproductor

const {autor}=detalles

console.log(`El volumen actual es : ${reproductor.volumen}`);
console.log(`El segundo actual es : ${reproductor.segundo}`);
console.log(`El cancion actual es : ${reproductor.segundo}`);
console.log(`El Autor actual es : ${reproductor.detalles.autor}`)

const dbz:string []= ['Goku','Veggeta','Trunks','Gohan','SpiriGonzalez']

console.log('El personaje es : ' , dbz[1]);
console.log('El personaje es : ' , dbz[2]);
console.log('El personaje es : ' , dbz[3]);
console.log('El personaje es : ' , dbz[4]);
console.log('El personaje es : ' , dbz[5]);

const[p1,p2,p3,p4,p5]= dbz
console.log('El personaje es : ' ,p1);
console.log('El personaje es : ' ,p2);
console.log('El personaje es : ' ,p3);
console.log('El personaje es : ' ,p4);
console.log('El personaje es : ' ,p5);