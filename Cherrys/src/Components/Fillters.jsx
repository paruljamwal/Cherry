import React from 'react'
import '../App.css'
export const Fillters = ({filter,currentFilter,updatefilter}) => {
  return (
   

<section className="near-you">
        <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
                {/* enteris give key value  */}
                {Object.entries(filter).map(([key,value])=>(
                    <div key={key} className="restaurant-option" onClick={()=>updatefilter(key)} >{value}</div>
                ))}
            </div>
            </div>
        </section>
    
  )
}
