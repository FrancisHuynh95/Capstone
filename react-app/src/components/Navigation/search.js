import { useSelector } from "react-redux"
import { useState } from "react"

function Search() {
    const [search, setSearch] = useState("")
    return (
        <>
            <div className="searchContainer">
                <span>
                    <input className="searchBar" placeholder="Search for an item" value={search} onChange={e => setSearch(e.target.value)}></input>
                    <button className="searchSubmit"></button>
                </span>
            </div>
        </>
    )
}

export default Search
