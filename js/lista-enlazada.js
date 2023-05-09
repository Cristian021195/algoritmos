class Nodo {
    constructor(valor, siguiente = null) {
      this.valor = valor;
      this.siguiente = siguiente;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
      this.longitud = 0;
    }
  
    agregar(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let nodoActual = this.cabeza;
        while (nodoActual.siguiente) {
          nodoActual = nodoActual.siguiente;
        }
        nodoActual.siguiente = nuevoNodo;
      }
      this.longitud++;
    }
  
    eliminar(valor) {
      if (!this.cabeza) {
        return null;
      }
      if (this.cabeza.valor === valor) {
        this.cabeza = this.cabeza.siguiente;
        this.longitud--;
        return;
      }
      let nodoActual = this.cabeza;
      while (nodoActual.siguiente && nodoActual.siguiente.valor !== valor) {
        nodoActual = nodoActual.siguiente;
      }
      if (nodoActual.siguiente && nodoActual.siguiente.valor === valor) {
        nodoActual.siguiente = nodoActual.siguiente.siguiente;
        this.longitud--;
        return;
      }
      return null;
    }
  
    obtener(indice) {
      if (indice < 0 || indice >= this.longitud) {
        return null;
      }
      let nodoActual = this.cabeza;
      let contador = 0;
      while (contador < indice) {
        nodoActual = nodoActual.siguiente;
        contador++;
      }
      return nodoActual.valor;
    }
  
    imprimir() {
      let nodoActual = this.cabeza;
      let elementos = [];
      while (nodoActual) {
        elementos.push(nodoActual.valor);
        nodoActual = nodoActual.siguiente;
      }
      console.log(elementos.join(' -> '));
    }
  }

  const lista = new ListaEnlazada();
  lista.agregar(5);
  lista.agregar(3);
  lista.imprimir();