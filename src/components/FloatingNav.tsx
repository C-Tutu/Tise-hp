import { SOCIAL_LINKS } from "../constants";
import "./FloatingNav.css";

const FloatingNav = () => {
    return (
        <nav className="floating-nav">
            <div className="nav-logo">TT</div>
            <ul className="nav-links">
                <li>
                    <a
                        href={SOCIAL_LINKS.twitter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-btn"
                    >
                        {SOCIAL_LINKS.twitter.label}
                    </a>
                </li>
                <li>
                    <a
                        href={SOCIAL_LINKS.bluesky.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-btn"
                    >
                        {SOCIAL_LINKS.bluesky.label}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default FloatingNav;
