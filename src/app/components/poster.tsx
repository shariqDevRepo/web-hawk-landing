
// import React from "react";
import "@/scss/how-it-works/poster.scss";

// import video from "@/video/WebhawkExplainer.mp4";
// import bg_grid from "@/assets/images/wrapper-bg-grid.png";
// src\assets\WebhawkExplainer.mp4

const Poster = () => {
    return (
        <div
            className="Landing-Poster"
            style={
                {
                    // backgroundImage: `url(${TileBg.src})`,
                }
            }
        >
            <div className="wrapper">
                <video autoPlay muted loop>
                    <source
                        src="/WebhawkExplainer.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Poster;
