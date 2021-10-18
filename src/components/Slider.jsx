import React, {useEffect, useState} from "react";
import {DataSlider} from "./DataSlider";
import "./Style.css";
import {Arrows, Dots, SliderContent} from "./index";


const len = DataSlider.length - 1;

const Slider = (props) => {
    const [ activeId, setActiveId ] = useState(0);
    useEffect(() => {
        const interval = setInterval (() => {
            setActiveId(activeId === len ? 0 : activeId + 1);
        },10000);
        return () => clearInterval(interval);
    },[activeId])

    return (
        <div className="slider_container">
            <SliderContent
                activeId={activeId}
                DataSlider={DataSlider}
            />

            <Arrows
                prevSlide={ () => setActiveId( activeId < 1 ? len : activeId - 1 )}
                nextSlide={ () => setActiveId( activeId === len ? 0 : activeId + 1 )}
            />

            <Dots
            activeId={activeId}
            DataSlider={DataSlider}
            onClick={(activeId) => setActiveId(activeId)}
            />
        </div>
    );
}
export default Slider;
