import React from 'react'

const Restro = ({Rest}) => {
  return (
    <div className="card">
    <img width="254" height="160px" src={Rest.image} />
    <div className="restaurant-details">
      <div className="restaurant-title">{Rest.name}</div>
      <div className="restaurant-subtitle">
        {Rest.category.join(", ")}
      </div>
    </div>
    <div className="restaurant-info">
      <div className="restaurant-ratings">
        <i className="material-icons star-icon">star</i> {Rest.rating}
      </div>
      .
      <div className="restaurant-delivery-timings">
        {Rest.deliveryTimings}
      </div>{" "}
      .
      <div className="restaurant-cost-for-two">
        {Rest.costForTwo} FOR TWO
      </div>
    </div>
    <div className="offer-banner">
      <span className="material-icons"> local_offer </span>
      <span className="offer-text">{Rest.category.join(" | ")}</span>
    </div>
  </div>
  )
}

export default Restro