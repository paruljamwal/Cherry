import React from 'react'
import '../App.css'
import logo from '../assets/logo.svg'

const navbarOptions=[{
    iconName:"person_outline",
    label:"Sign In"
},
{
    iconName:"shoping_bag",
    label:"Cart"
},
{
    iconName:"support",
    label:"Support"
},
{
    iconName:"search",
    label:"Search"
}


]

const Navbar = (data) => {
  return (

          <section className="navbar">
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="location">
                <span className="city">{data.city}</span>
                <span className="state">{data.state},  {data.country}</span>
            </div>
            <div className="navbar-options">
                {navbarOptions.map((navbarOptions)=>(

                <div key={navbarOptions.iconName} className="navbar-option">
                    <span className="material-icons">{navbarOptions.iconName}</span>{navbarOptions.label}
                </div>
                ))}
          
            </div>
        </div>
    
    </section>
    
  )
}

export default Navbar