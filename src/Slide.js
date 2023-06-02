import React from 'react'
import pin from './locationPin.svg'

export default function Slide({ slide, allRoomsFunc, buttonClick }) {
  return (
    <div className='slide' id={slide.id}>
        <div id='slideCont' className="container">
          {/* <img src={slide.img} alt={slide.name} /> */}
            <div className="slideImg" style={{background: `url(${slide.img}) center/cover`}}></div>
            <div className="fade"></div>
            <div className="fade sliderev"></div>
            
            <div className="slideText">
              <h1>{slide.name}</h1>
              <h3><img src={pin} alt="location" />{slide.location}</h3>
              <p>{slide.text}</p>
              <button className={`roomButton ${slide.button}`} onClick={() => {buttonClick(slide.id)}}>
                <div className={`pulsar${slide.pulse}`}></div>
                <span>BOOK NOW</span>
              </button>
              <button id='allRooms' className='roomButton' onClick={allRoomsFunc}>SEE ALL ROOMS</button>
            </div>
        </div>
    </div>
  )
}
