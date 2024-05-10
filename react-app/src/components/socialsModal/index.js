import './socials.css'
import { useTheme, lightModeStyle, darkModeStyle } from '../Navigation/darkMode'

const SocialsModal = () => {
    const { theme } = useTheme()

    const backgroundDark = {
        backgroundColor: "black"
    }
    return (
        <div
            className="socials"
            style={theme === 'light' ? null : backgroundDark}>
            <img
                className='software_engineer'
                src={theme === 'light' ? "/SoftwareEngineer.png" : "/SoftwareEngineerWhite.png"}
                alt='logo'></img>
            <div
                className='whatItsMadeOutOf'>
                <h3
                    style={theme === "light" ? lightModeStyle : darkModeStyle}>This website was made with:</h3>
                <p
                    style={theme === "light" ? lightModeStyle : darkModeStyle}>JavaScript</p>
                <p
                    style={theme === "light" ? lightModeStyle : darkModeStyle}>React.js/Redux</p>
                <p
                    style={theme === "light" ? lightModeStyle : darkModeStyle}>Python</p>
                <p
                    style={theme === "light" ? lightModeStyle : darkModeStyle}>Flask</p>
            </div>
            <p
                style={theme === "light" ? lightModeStyle : darkModeStyle}
                className="aboutSocial">You can contact me through my social media</p>
            <div className="Socials-icon">
                <a
                    className="linkedInContainer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/francis-huynh-153246161/">
                    <i
                        className="linkedinIcon"
                        class="fab fa-linkedin fa-lg"
                        style={theme === 'light' ? null : darkModeStyle}></i></a>
                <a
                    className="githubContainer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/FrancisHuynh95">
                    <i
                        className='githubIcon'
                        class="fab fa-github fa-lg"
                        style={theme === 'light' ? null : darkModeStyle}></i></a>
            </div>
            <a
                style={theme === 'light' ? null : darkModeStyle}
                className="portfolio"
                target="_blank"
                rel="noreferrer"
                href="https://francishuynh95.github.io/">Portfolio</a>
        </div>
    )
}

export default SocialsModal
