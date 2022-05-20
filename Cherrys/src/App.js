import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import { Fillters } from "./Components/Fillters";
import Resturant from "./Components/Resturant";
import info from "./Data/Userinfo.json";
import offers from "./Data/offers.json";
import restro from "./Data/Resturent.json";
import { useState } from "react";

const filter = {
  1: "Cost High to Low",

  2: "Cost Low to High",

  3: "Ratings",

  4: "Delivery Time",

  5: "Relevance",
};

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restro);

  const updatefilter = (newfilter) => {
    console.log(newfilter);
    switch (newfilter){
      case "1":{
        console.log(newfilter);
        setFilterBy(1)
        data.sort((a,b)=>b.costForTwo - a.costForTwo)
        console.log(data.map((d)=>d.costForTwo))
        setData([...data])
        break;
      }
      case "2":{
        console.log(newfilter);
        setFilterBy(2)
        data.sort((a,b)=>a.costForTwo - b.costForTwo)
        console.log(data.map((d)=>d.costForTwo))
        setData([...data])
        break;
      }

      case "3":{
        console.log(newfilter);
        setFilterBy(3)
        data.sort((a,b)=>b.rating - a.rating)
        console.log(data.map((d)=>d.costForTwo))
        setData([...data])
        break;
      }
      default:{
        setData(restro)
        break;
      }
    }
  };
  return (
    <div>
      <Navbar {...info.location} />
      <Offer offers={offers} />
      <section className="near-you">
        <Fillters
           filter={filter}
          currentFilter={filterBy}
          updatefilter={updatefilter}
        ></Fillters>
        <Resturant restro={restro}></Resturant>
      </section>
    </div>
  );
}

export default App;
