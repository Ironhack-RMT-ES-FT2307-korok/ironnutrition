// Your code here

import { useState } from "react"


function AddFoodForm(props) {

  const [ foodObj, setFoodObj ] = useState({
    name: "",
    image: "",
    servings: 0,
    calories: 0,
  })

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value)

    let clone = JSON.parse(JSON.stringify(foodObj))
    // let clone = {...foodObj}

    clone[event.target.name] = event.target.value
    console.log(clone)

    setFoodObj(clone)

  }

  const handleAdd = (e) => {
    // e.preventDefault()
    props.setAllFoods((allFoods) => {

      // podriamos clonar y hacer el push o unshift
      return [foodObj, ...allFoods]

    })
  }

  return (
    <div>
      
      <h3>Add Food Entry</h3>

      <form>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={foodObj.name} onChange={handleInputChange}/>

        <br />

        <label htmlFor="image">Image:</label>
        <input type="text" name="image" value={foodObj.image} onChange={handleInputChange}/>

        <br />

        <label htmlFor="calories">Calories:</label>
        <input type="number" name="calories" value={foodObj.calories} onChange={handleInputChange}/>

        <br />

        <label htmlFor="servings">Servings:</label>
        <input type="number" name="servings" value={foodObj.servings} onChange={handleInputChange}/>

        <br />

        <button type="button" onClick={handleAdd}>Create</button>

      </form>

    </div>
  )
}

export default AddFoodForm