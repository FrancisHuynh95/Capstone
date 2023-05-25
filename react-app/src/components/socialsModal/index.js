import './socials.css'

const SocialsModal = () => {
    return (
        <>
        <div className="socials">
            <p className="aboutSocial">You can contact me through my social media</p>
            <div className="Socials-icon">
                <a className="linkedInContainer" href="https://www.linkedin.com/in/francis-huynh-153246161/">
                    <i className="linkedinIcon" class="fab fa-linkedin fa-lg"></i></a>
                <a className="githubContainer" href="https://github.com/FrancisHuynh95">
                    <i className='githubIcon' class="fab fa-github fa-lg"></i></a>
            </div>
        </div>
        </>
    )
}

export default SocialsModal
