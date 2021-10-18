import React from "react";
import "./Style.css"
import {DataSlider} from "./DataSlider";

function SliderContent({ activeId  }) {
    return (
        <div className="slide_section">
            {DataSlider.map((slide, id) => (
                <div
                    key={id}
                    className={id === activeId ? "slides active" : "inactive"}
                >
                    <img className="slide_image" src={slide.urls} alt="" />
                    <div className=" slide_text">
                        <h2 className="slide_h2">{slide.title}</h2>
                        <h3 className="slide_h3">{slide.description}</h3>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default SliderContent;