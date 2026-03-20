
//! Clase empleado
class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }
    //! Creación de métodos
    //? Método para presentarse
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.cargo}`);
    }
    //? Método para calcular el salario anual
    calcularSalarioAnual() {
        console.log(`Salario anual es ${this.salario * 12}`);
        return this.salario * 12;
    }
    //? Método para desactivar al empleado
    desactivar() {
        this.activo = false;
        console.log(`${this.nombre} ha sido desactivado`);
        return this.activo;
    }
    //? Método para mostrar la información del empleado
    info() {
        console.log(`Información de empleado:
        Nombre: ${this.nombre}
        Su cargo actual es: ${this.cargo}
        Su Sueldo es: ${this.salario}
        Su estado es ${this.activo}\n`)
    }

}

//! Clase extendida: Lider
class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, salario)
        this.nombre = nombre
        this.salario = salario
        this.equipo = equipo
        this.cargo = "Lider de equipo"
    }
    //? Método para presentar el equipo
    presentarEquipo() {
        console.log(`Mi equipo está conformado por: ${this.equipo.join(", ")}`)
        return this.equipo.join(" ")
    }
    //? Método para agregar un nuevo miembro al equipo
    agregarMiembro(nombreNuevo) {
        this.equipo.push(nombreNuevo)
        console.log(`Bienvenido al equipo, ${nombreNuevo}`)
    }
    //? Sobre escribir el método info para mostrar la información del lider
    info() {
        console.log(`   El lider es:  ${this.nombre}
    Su cargo actual es: ${this.cargo}
    Su Sueldo es: ${this.salario}
    Su estado es ${this.activo}
    El número de personas en el equipo son: ${this.equipo.length}
    `)
    }
}

//! CHECKPOINT 1:
//? Creamos 3 instancias de Empleado.
// let empleado1 = new Empleado("Juan", "Desarrollador", 1000000)
// let empleado2 = new Empleado("Camilo", "Backend", 2000000)
// let empleado3 = new Empleado("Quevedo", "Java", 3000000)

// empleado1.presentarse();
// empleado1.calcularSalarioAnual();
// empleado1.desactivar();
// empleado1.info();

// empleado2.presentarse();
// empleado2.calcularSalarioAnual();
// empleado2.info();

// empleado3.presentarse();
// empleado3.calcularSalarioAnual();
// empleado3.desactivar();
// empleado3.info();

//! CHECKPOINT 2:
//? Creamos 2 instancias de Lider.
// let lider1 = new Lider("Juan", 1000000, ["Camilo", "Quev", "Jaim"])
// let lider2 = new Lider("Yis", 2000000, ["Zam", "San", "Orl"])

// lider1.presentarse()
// lider1.calcularSalarioAnual()
// lider1.desactivar()
// lider1.agregarMiembro("Rocket")
// lider1.presentarEquipo()
// lider1.info()

// lider2.presentarse()
// lider2.calcularSalarioAnual()
// lider2.agregarMiembro("Dinamita")
// lider2.presentarEquipo()
// lider2.info()






// let lider1 = new Lider("Cesar", 200, ["Camilo", "Maria", "Jurany"])
// console.log(lider1.calcularSalarioAnual())
// lider1.desactivar()

// lider1.agregarMiembro("Marcia")
// console.log(lider1.presentarEquipo())
// console.log(lider1.info())

// let lider2 = new Lider("Juan", 200, ["Camilo", "Maria", "Jurany"])
// lider2.agregarMiembro("Sandra")
// console.log(lider2.presentarEquipo())
// console.log(lider2.info())



