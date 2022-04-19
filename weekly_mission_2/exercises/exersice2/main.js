const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: true,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: false
        }
      }
    }
   ]

// 1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
    explorers.forEach(explor => console.log(explor.name))

// 2.- Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(explor => console.log(explor.stack))

//3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const newStack= explorers.map(item =>(item.stack))
console.log(newStack)

//4.- Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const my_list_explorers = explorers.filter(myStack => myStack.stack.includes('js'))
console.log(my_list_explorers)

//5.- Busca el primer explorer que sea de la CDMX, usa FIND
console.log("5.- Busca el primer explorer que sea de la CDMX, usa FIND")
  const explorerm = explorers.find(my_explorer_list_cdmx => my_explorer_list_cdmx.city === "CDMX")
  console.log(explorerm)

//6.- Obtén la suma de todos los exercises_completed, usa REDUCE
 const explorersuma = explorers.reduce((acc, redu) => acc + redu.exercises_completed,0 )
 console.log(explorersuma)

//7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const areSomeTrue = explorers.some(b =>  b.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)

//8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const areAllStr = explorers.every(name =>  name.missions.onboarding.isFinished === true)
console.log(areAllStr)
