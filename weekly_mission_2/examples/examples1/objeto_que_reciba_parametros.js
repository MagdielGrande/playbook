// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa Ajolote",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("5.- Objeto con método que recibe parámetros")

  myPet.sayHelloToMyPet("Panchon")