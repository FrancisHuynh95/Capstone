import { useState } from "react"
import { useDispatch } from "react-redux"
import { getFilteredProductThunk } from "../../store/product"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useTheme } from "./darkMode"

function Search() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const {theme} = useTheme()

    const lightTheme = {
        border: "1px solid black"
    }
    const darkTheme = {
        border: "none"
    }

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
            <div style={theme === 'dark' ? darkTheme : lightTheme} className="searchContainer">
                    <input className="searchBar" placeholder="Search for an item" value={search} onKeyPress={e => handleEnter(e)} onChange={e => setSearch(e.target.value)}></input>
                    <button onClick={() => handleSubmit()}  className="searchSubmit"><i class="fas fa-search"></i></button>
            </div>
        </>
    )
}

export default Search
