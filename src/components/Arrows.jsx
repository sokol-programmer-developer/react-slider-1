import React from "react";
import "./Style.css"

const Arrows = ({ prevSlide, nextSlide }) => {
    return (
        <div className="arrows">
            <div className="prev" onClick={prevSlide}> &#10094; </div>
            <div className="next" onClick={nextSlide}> &#10095; </div>
        </div>
    );
}
export default Arrows;