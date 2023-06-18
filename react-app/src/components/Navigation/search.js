import { useSelector } from "react-redux"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getFilteredProductThunk } from "../../store/product"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Search() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async () => {
        await dispatch(getFilteredProductThunk(search))
        setSearch("")
        history.push('/search')
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }
    return (
        <>
            <div className="searchContainer">
                    <input className="searchBar" placeholder="Search for an item" value={search} onKeyPress={e => handleEnter(e)} onChange={e => setSearch(e.target.value)}></input>
                    <button onClick={() => handleSubmit()}  className="searchSubmit"><i class="fas fa-search"></i></button>
            </div>
        </>
    )
}

export default Search
