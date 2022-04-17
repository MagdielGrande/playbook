// Ejemplo 4: Objeto con métodos
const pet = {
    name: "panchon",

    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("4.- Objeto con métodos")
  pet.sayHello()
  console.log(pet)