import React from "react";
import "./Style.css"
import {DataSlider} from "./DataSlider";

const Dots = ({ activeId, onClick }) => {
    return(
        <div className="section_dots">
            {DataSlider.map((slide, id) => (
                <div
                    key={id}
                    onClick={() => onClick(id)}
                    className={`${activeId === id ? "dot active_dot" : "dot" }`}
                >
                </div>
                )
            )}
        </div>
    );
}

export default Dots;