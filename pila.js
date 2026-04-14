
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


const pila = new Pila();
pila.push({ nombre: "Juan", edad: 30 });
pila.push({ nombre: "María", edad: 25 });
console.log(pila.pop()); 
console.log(pila.size()); 
console.log(pila.isEmpty()); 
pila.pop();
console.log(pila.isEmpty()); 
