

class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }

    presentarse(){
        return `Hola, mi nombre es ${this.nombre} y soy ${this.cargo}`;
    }

    calcularSalarioAnual() {
        return this.salario * 12;
    }

}