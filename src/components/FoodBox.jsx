// Your code here

function FoodBox(props) {
  console.log(props)
  const { calories, image, name, servings, id } = props.food

  const foodCardStyles = {
    width: "200px"
  }

  const handleDelete = () => {
    console.log(id)

    // const filteredFoods = props.allFoods.filter((eachFood) => {
    //   return eachFood.id !== id
    // })

    // props.setAllFoods( filteredFoods )

    // todas las funciones set pueden usarse de forma avanzada pasando como argumento una function de callback
    props.setAllFoods( (valorActualEstado) => {

      const filteredFoods = valorActualEstado.filter((eachFood) => {
        return eachFood.id !== id
      })

      // retornamos lo que queremos que sea el valor nuevo
      return filteredFoods

    } )

    
  }

  return (
    <div>
      <p>{name}</p>

      <img src={image} style={foodCardStyles}/>

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;




//* ejemplo de como está construida set
// function setState( algo ) {

//   if (typeof algo === "function") {
//     algo()
//   } else {
//     algo
//   }

// }


//* ejemplo de uso avanzado de funcion set con counter
// setCounterValue(counterValue + 1)

// setCounterValue((counterStateValue) => {
//   return counterStateValue + 1
// })