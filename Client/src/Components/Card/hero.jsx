import React from 'react'
import './hero.css'
import card from "../../assets/pexels-ryutaro-tsukata-5745048.jpg"

const hero = () => {
  return (
    <div>
        <div className="container" style={{backgroundImage: ""}}>
            <div className="card">
                <div className="cardImg">
                    <img src={card} alt="" />
                </div>
                <div className="tag">
                    <p> <span>2M</span> User Download</p>
                </div>
                <div className="curve_one"></div>
                <div className="curve_two"></div>
            </div>


            <div className="btn">
            Hover Me!
        </div>
        </div>

        
      
    </div>
  )
}

export default hero
