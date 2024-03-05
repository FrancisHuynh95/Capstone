import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Uhoh() {
    const history = useHistory()
    function handleRedirect() {
        history.push('/')
    }
    return (
        <>
            <div className="uhohPage">
                <img src="./cat404.jpg" alt="error"></img>
            </div>
                <button onClick={() => handleRedirect()}>Take me back!</button>
        </>
    )
}

export default Uhoh
