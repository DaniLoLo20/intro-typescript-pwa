export class Miau {

    private numero: number;
    private numero2: number;
    private total: number;

    public setNumber(x: number) {
        this.numero = 0;
        this.numero = x;
    }

    public setNumber2(y: number) {
        this.numero2 = 0;
        this.numero2 = y;
    }

    public Summit() {
        this.calculo();
    }

    public imprimirResult() {
        console.log('Resultado: ' + (this.total));
    }

    private calculo() {
        this.total = 0;
        for (let i = 0; i < this.numero2; i++) {
            this.total += this.numero;
            console.log('La operacion:' + (this.total - this.numero) + '=' + (this.total));
        }

        this.imprimirResult();

    }
}

