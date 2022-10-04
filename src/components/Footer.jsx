import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li>
                    <a className="footer__link footer__link--twitter" href="#">
                        <img src={twitter} alt="twitter" />
                        <span className="sr-only">Twitter</span>
                    </a>
                </li>
                <li>
                    <a className="footer__link footer__link--facebook" href="#">
                        <img src={facebook} alt="facebook" />
                        <span className="sr-only">Facebook</span>
                    </a>
                </li>
                <li>
                    <a
                        className="footer__link footer__link--instagram"
                        href="#">
                        <img src={instagram} alt="Instagram" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </li>
                <li>
                    <a className="footer__link footer__link--github" href="#">
                        <img src={github} alt="github" />
                        <span className="sr-only">Github</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
