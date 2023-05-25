import Home from "."
import { useSelector} from 'react-redux'

function BackgroundColor() {
    const user = useSelector(state => state.session.user)
    return (
        <>
            <div className="background_color_behind_images">
                {/* {user && <p className="welcome-back-prompt">{`Welcome back to Keebsy, ${user.firstName}`}</p>} */}
                {user ? <div className="welcome_back_prompt"><p className="welcome-back-prompt">{`Welcome back to Keebsy,`}</p><p className="welcome-back-name">{`${user.firstName}!`}</p></div> : <p className="welcome-back-prompt">Welcome to Keebsy!</p>}
            </div>
            <Home />
        </>
    )
}

export default BackgroundColor
