import Home from "."
import { useSelector} from 'react-redux'

function BackgroundColor() {
    const user = useSelector(state => state.session.user)
    return (
        <>
            <div className="background_color_behind_images">
                {user && <p className="welcome-back-prompt">{`Welcome back to Keebsy, ${user.firstName}`}</p>}
            </div>
            <Home />
        </>
    )
}

export default BackgroundColor
