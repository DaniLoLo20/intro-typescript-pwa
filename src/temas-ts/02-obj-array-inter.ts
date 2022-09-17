let nombres:string[]= ['Daniel','Jose','Liliana']

console.log(nombres[1])

let datos:(boolean|number|string )[]=['Daniel',23,true,'Jimenez']


console.log(datos);
datos.push(200);
datos.push('Raquel');
datos.push(false);
datos.push(200);
console.log(datos);

///----------------------Otra forma de crear arreglos---------------------//

let arreglo: Array<number>=[1,2,3,4]

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    materias?:string[]
}

const alumno:Alumno= {
    matricula:'dario',
    nombre:'Lopez',
    edad:25,
    email:'gmail.com'

};

alumno.nombre='Felipa';
console.log(alumno);


