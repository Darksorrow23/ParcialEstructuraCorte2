class Cola {
    constructor() {
        this.cola = [];
    }

    
    enqueue(element) {
        this.cola.push(element);
        console.log(element);
    }


    dequeue() {
        if (this.cola.length == 0) {
            console.log("la cola esta vacia no se puede eliminar");
            return;
        }
        let eliminado = this.cola.shift();
        console.log("se elimino el numero: " + eliminado);
    }

    isEmpty() {
        return this.cola.length == 0;
    }

    size() {
        return this.cola.length;
    }
}

let cola = new Cola();

cola.enqueue(10);
cola.enqueue(25);
cola.enqueue(37);
cola.enqueue(42);

console.log("cuantos hay en la cola: " + cola.size());

cola.dequeue();
cola.dequeue();

console.log("quedan: " + cola.size());

cola.dequeue();
cola.dequeue();

console.log("esta vacia" + cola.isEmpty());

