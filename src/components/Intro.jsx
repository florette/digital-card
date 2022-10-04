import photo from "../assets/IMG_7908.jpg";

function Intro() {
    return (
        <div className="intro">
            <img className="intro__img" src={photo} alt="Flore photo" />
            <div className="intro__text">
                <h1>Flore Laforge</h1>
                <h3>Front End Engineer</h3>
                <p>
                    <a
                        className="website--link"
                        href="https://florette.github.io/"
                        target="_blank">
                        florette.github.io
                    </a>
                </p>
                <div className="intro__cta-box">
                    <a href="#" className="btn btn--light">
                        <i class="fi fi-sr-envelope"></i>Email
                    </a>
                    <a href="#" className="btn btn--dark">
                        <i class="fi fi-brands-linkedin"></i>LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
