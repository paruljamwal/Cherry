import React from "react";
import "../App.css";
import Restro from "./Restro";
const Resturant = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {props.restro.map((Rest) => (
          <Restro key={Rest.id}  Rest={Rest} ></Restro>
        ))}

     
      </div>
    </div>
  );
};

export default Resturant;
