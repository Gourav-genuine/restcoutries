import React, { Component } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import "./PrintCard.css";

const PrintCard = (props)=> {
  
    const history = useHistory();
    const showDetail =(ele)=>{
        console.log(ele)
        history.push({
                pathname:'/DetailPage',
                state: {data: ele}
            })
    }

    return (
      <>
        {props.item &&
          props.item.map((ele,index) => {
            console.log(props.filter);

            return props.filter ? (
              ele.region == props.filter && (
                <div className="col-12 col-sm-6 col-md-3">
                  
                    <div className="card m-3" style={{ width: "15rem" }} onClick={()=>{showDetail(ele)}}>
                      <div id="">
                        <img id="allFlags"
                          src={ele.flag}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div className="card-body ">
                        <h5 className="card-title">{ele.name}</h5>
                        <p className="card-text">
                          <span style={{ fontWeight: "500" }}>
                            Population:{" "}
                          </span>
                          {ele.population}
                        </p>
                        <p className="card-text">
                          <span style={{ fontWeight: "500" }}>Region: </span>
                          {ele.region}
                        </p>
                        <p className="card-text">
                          <span style={{ fontWeight: "500" }}>Capital: </span>
                          {ele.capital}
                        </p>
                      </div>
                    </div>
             
                </div>
              )
            ) : (
              <div className="col-12 col-sm-6 col-md-3">
               
                  <div className="card m-3" style={{ width: "15rem" }} onClick={()=>{showDetail(ele)}} >
                    <div>
                      <img id="allFlags"src={ele.flag} className="card-img-top" alt="..." />
                    </div>

                    <div className="card-body ">
                      <h5 className="card-title">{ele.name}</h5>
                      <p className="card-text">
                        <span style={{ fontWeight: "500" }}>Population: </span>
                        {ele.population}
                      </p>
                      <p className="card-text">
                        <span style={{ fontWeight: "500" }}>Region: </span>
                        {ele.region}
                      </p>
                      <p className="card-text">
                        <span style={{ fontWeight: "500" }}>Capital: </span>
                        {ele.capital}
                      </p>
                    </div>
                  </div>
          
              </div>
            );
          })}
      </>
    );
  }


export default PrintCard;
