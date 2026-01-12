import { ARTIST } from "../constants";
import icon from "../assets/icon.png";
import "./MainVisual.css";

const MainVisual = () => {
    return (
        <section className="main-visual">
            <div className="visual-container">
                <div className="image-wrapper">
                    <img src={icon} alt={ARTIST.nameEn} className="main-icon" />
                    <div className="glow-effect"></div>
                </div>
                <h1 className="main-title">
                    <span className="title-en">
                        {ARTIST.nameEn.toUpperCase()}
                    </span>
                    <span className="title-jp">{ARTIST.nameJp}</span>
                </h1>
            </div>
            <div className="scroll-indicator">
                <span>SCROLL</span>
                <div className="line"></div>
            </div>
        </section>
    );
};

export default MainVisual;
