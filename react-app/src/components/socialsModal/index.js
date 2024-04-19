import './socials.css'
import { useTheme } from '../Navigation/darkMode'

const SocialsModal = () => {
    const {theme, toggleTheme} = useTheme()
    console.log(theme)

    const stylesLight = {
        color: "black"
    }
    const stylesDark = {
        color: "white"
    }

    const backgroundDark = {
        backgroundColor: "black"
    }
    console.log(backgroundDark)
    // styles = {theme === 'light' ? null: backgroundDark}

    return (
        <div className="socials" style = {theme === 'light' ? null: backgroundDark}>
            <img className='software_engineer' src="/SoftwareEngineer.png" alt='logo'></img>
            <div className='whatItsMadeOutOf'>
                <h3 style={theme === "light" ? stylesLight : stylesDark}>This website was made with:</h3>
                <p style={theme === "light" ? stylesLight : stylesDark}>JavaScript</p>
                <p style={theme === "light" ? stylesLight : stylesDark}>React.js/Redux</p>
                <p style={theme === "light" ? stylesLight : stylesDark}>Python</p>
                <p style={theme === "light" ? stylesLight : stylesDark}>Flask</p>

            </div>
            <p style={theme === "light" ? stylesLight : stylesDark} className="aboutSocial">You can contact me through my social media</p>
            <div className="Socials-icon">
                <a className="linkedInContainer" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/francis-huynh-153246161/">
                    <i className="linkedinIcon" class="fab fa-linkedin fa-lg" style = {theme === 'light' ? null: stylesDark}></i></a>
                <a className="githubContainer" target="_blank" rel="noreferrer" href="https://github.com/FrancisHuynh95">
                    <i className='githubIcon' class="fab fa-github fa-lg" style = {theme === 'light' ? null: stylesDark}></i></a>
            </div>
            <a style = {theme === 'light' ? null: stylesDark} className="portfolio" target="_blank" rel="noreferrer" href="https://francishuynh95.github.io/">Portfolio</a>
        </div>
    )
}

export default SocialsModal
