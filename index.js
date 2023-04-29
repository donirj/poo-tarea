class Estudiante {
    constructor(nombre){
      this.nombre = nombre
      this.lista = []
    }
    
    agregarDatos(elemento){
      this.lista.push(elemento)
    }
    obtenerDatos() {
      return this.lista;
    }
  }
  
  const nuevoEstudiante = new Estudiante('Andoni')
  console.log(nuevoEstudiante)
  
  const miObjeto = new Estudiante();
  miObjeto.agregarDatos("Javascript");
  miObjeto.agregarDatos("HTML");
  miObjeto.agregarDatos("CSS");
  console.log(miObjeto.obtenerDatos()); // ["Elemento 1", "Elemento 2"]
  
  