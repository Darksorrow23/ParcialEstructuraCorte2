
class Pila {
    constructor() {
        this.pila = [];
    }

    push(element) {
        this.pila.push(element);
    }

    pop() {
        return this.pila.pop();
    }

    isEmpty() {
        return this.pila.length === 0;
    }

    size() {
        return this.pila.length;
    }
}

// Ejemplo de uso
const pila = new Pila();
pila.push({ nombre: "Juan", edad: 30 });
pila.push({ nombre: "María", edad: 25 });
console.log(pila.pop()); // { nombre: "María", edad: 25 }
console.log(pila.size()); // 1
console.log(pila.isEmpty()); // false
pila.pop();
console.log(pila.isEmpty()); // true
