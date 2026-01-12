import FloatingNav from "./components/FloatingNav";
import MainVisual from "./components/MainVisual";
import Showcase from "./components/Showcase";
import Profile from "./components/Profile";

function App() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                paddingBottom: "100px",
            }}
        >
            <FloatingNav />
            {/* The "Main Visual" acts as the cover art */}
            <MainVisual />

            {/* Works flow naturally after the visual */}
            <Showcase />

            {/* Profile sits quietly at the end */}
            <Profile />
        </div>
    );
}

export default App;
