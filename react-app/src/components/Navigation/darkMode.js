function DarkMode({dark, darkStatus}){
    function onClick(){
        dark(!darkStatus)
        console.log(darkStatus)
    }
    return (
        <button onClick={() => onClick()}>{darkStatus ? "Light" : "Dark"}</button>
    )
}

export default DarkMode
