import ICON_CHARTHOP from "@/app/icons/ICON_CHARTHOP";
import ICON_CYBERHEAVEN from "@/app/icons/ICON_CYBERHEAVEN";
import ICON_PILOT from "@/app/icons/ICON_PILOT";
import ICON_VERKADA from "@/app/icons/ICON_VERKADA";
// import "./index.scss";
import ICON_VOUCH from "@/app/icons/ICON_VOUCH";
import Marquee from "react-fast-marquee";
import "@/scss/landing/icon-slider.scss";
const AllIcons = [
    ICON_CHARTHOP,
    ICON_CYBERHEAVEN,
    ICON_PILOT,
    ICON_CYBERHEAVEN,
    ICON_VERKADA,
    ICON_CYBERHEAVEN,
    ICON_CHARTHOP,
    ICON_VOUCH,
    ICON_CHARTHOP,
    ICON_PILOT,
    ICON_CYBERHEAVEN,
    ICON_PILOT,
    ICON_CYBERHEAVEN,
    ICON_VERKADA,
];

const Icons = () => {
    return (
        <div className="Landing-Icons">
            <div className="padd-wrapper">
                <Marquee loop={0}>
                    {AllIcons.map((Icon, i) => (
                        <div
                            style={{
                                padding: "0 20px",
                            }}
                            className="icon-wrapper"
                            key={i}
                        >
                            <Icon />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Icons;
