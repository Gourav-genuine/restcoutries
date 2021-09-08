import React, { useState, useEffect } from "react";
import "./CardPage.css";
import PrintCard from "./PrintCard";

const CardPage = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [name,setName] = useState(props.name);
  const [filter,setFilter] = useState(props.filter);
  

  const getList=() => {
        fetch(`https://restcountries.eu/rest/v2/name/${props.name}`)
            .then(res=>res.json())
            .then(jsonData=>{
                // let data = JSON.stringify(jsonData)
                setCountryList(jsonData)
            })
            .then(console.log(countryList))
    }
    useEffect(()=>{
        getList()
        setFilter(props.filter)
    },[props.name])

  return (
    <div className="container ">
      <div className="content ">
        <div className="row" id="data">
          <PrintCard filter={props.filter} item={countryList} />
        </div>
        
      </div>
      {console.log(countryList)}

      
    </div>
  );
};

export default CardPage;
