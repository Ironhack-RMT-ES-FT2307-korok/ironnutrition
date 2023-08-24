import { useState } from "react"

function Search(props) {

  // const [ searchQuery, setSearchQuery ] = useState("")

  const handleSearch = (e) => {
    props.setSearchQuery(e.target.value)
  }

  return (
    <div>
      
      <input type="text" name="search" value={props.searchQuery} onChange={handleSearch}/>

    </div>
  )
}

export default Search