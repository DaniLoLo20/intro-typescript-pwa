interface direccion{
    calle:string,
    pais:string,
    estado:string
}

interface Alumno3{
    nombre:string,
    edad:number,
    direccion:direccion;
    mostrartDireccion:()=>void;
}

const AlumnosUTL:Alumno3={
    nombre:'Daniel',
    edad:23,
    direccion:{
            calle:'Leon',
            pais:'MX',
            estado:'GTO'
    },
    mostrartDireccion(){
            return this.direccion.calle +', '+this.direccion.estado+', '+this.direccion.pais+', ';
    }
}


const direccion = AlumnosUTL.mostrartDireccion();
console.log(direccion);