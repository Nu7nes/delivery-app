import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Carrousel() {

    const options = {
        perPage: 0,
        arrows: false,
        pagination: false
      }
    

    const slides = [
        { id: 0,text: 'DIV 1' },
        { id: 1,text: 'DIV 2' },
        { id: 2,text: 'DIV 3' },
        { id: 3,text: 'DIV 4' },
        { id: 4,text: 'DIV 5' },
        { id: 5,text: 'DIV 6' },
        { id: 6,text: 'DIV 7' },
        { id: 7,text: 'DIV 8' },
        { id: 8,text: 'DIV 9' },
    ]

    slides.push({ id: 9999999, text: 'transparen'})

    return (
        <div className="carrouselWrapper">
            <div className="carrouselSplide">
                <Splide options={options}>
                    {slides.map((slide) => (
                        <SplideSlide key={slide.id}>
                            <div className="carrouselSlide">
                                <div className="carrouselCard">
                                    <span>
                                        ICON
                                    </span>
                                    <p>{slide.text}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default Carrousel;