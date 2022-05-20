import React from 'react'
import '../App.css'

const Offer = (props) => {
  return (
    <div>

   <section className="offers">
        <div className="container">
             {props.offers.map((offer,index)=>(

            <img key={index} className="offer" src={offer} />
             ))}
        </div>
    </section>
    </div>
  )
}

export default Offer