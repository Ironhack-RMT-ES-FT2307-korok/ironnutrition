import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";


function App() {

  const [ allFoods, setAllFoods ] = useState(foodsJson)
  const [ searchQuery, setSearchQuery ] = useState("")

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {/* <FoodBox food={ foodsJson[0] } /> */}

      <AddFoodForm setAllFoods={setAllFoods}/>

      <hr />

      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>

      <hr />

      {allFoods.filter((eachFood) => {
        return eachFood.name.startsWith(searchQuery)
      })
      .map((eachFood) => {
        return <FoodBox key={eachFood.id} food={ eachFood } setAllFoods={setAllFoods}/>
      })}

    </div>
  );
}

export default App;
