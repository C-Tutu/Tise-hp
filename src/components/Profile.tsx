import { ARTIST } from "../constants";
import illust1 from "../assets/images/tise-illust-1.png";
import "./Profile.css";

const Profile = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="profile container">
            <div className="profile-image">
                <img src={illust1} alt={ARTIST.nameEn} />
            </div>
            <div className="profile-content">
                <h2 className="profile-heading">Profile</h2>
                <p className="profile-text">
                    {ARTIST.nameEn} /{" "}
                    <span className="jp">{ARTIST.nameJp}</span>
                </p>
                <p className="profile-sub">
                    {ARTIST.status} / {ARTIST.role}
                    <br />
                    Love: {ARTIST.interests.join(", ")}
                </p>
                <p className="copyright">
                    © {currentYear} {ARTIST.nameEn}
                </p>
            </div>
        </section>
    );
};

export default Profile;
