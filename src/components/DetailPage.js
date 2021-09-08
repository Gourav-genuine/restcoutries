import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./DetailPage.css";
import Header from "./Header";

const DetailPage = (props) => {
  const location = useLocation();
  const data = location.state.data;
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="m-5">
        <div className="container">
          <div className="d-flex p-2 ">
            <button
              id="button"
              type="button"
              className="btn btn-light "
              onClick={() => {
                history.push("/");
              }}
            >
              <ArrowLeftOutlined className="p-2" />
              <span className="justify-content-center">Back</span>
            </button>
          </div>

          <div className="content">
            <div className="row">
              <div className="d-flex col-12 col-md-6">
                <div className="d-flex p-2">
                  {console.log(data)}
                  <img className=" w-100" src={data.flag} />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="row">
                  <div className=" col-12 ">
                    <h4>{data.name}</h4>
                  </div>
                </div>

                <div className="row d-flex ">
                  <div className="col-12 col-md-6">
                    <p>
                      <span className="details">Native Name: </span>
                      {data.nativeName}
                    </p>
                    <p>
                      <span className="details">Population: </span>
                      {data.population}
                    </p>
                    <p>
                      <span className="details">Region: </span>
                      {data.region}
                    </p>
                    <p>
                      <span className="details">Sub Region: </span>
                      {data.subregion}
                    </p>
                    <p>
                      <span className="details">Capital: </span>
                      {data.capital}
                    </p>
                  </div>

                  <div className="col-12 col-md-6">
                    <p>
                      <span className="details">Top Level Domain: </span>
                      {data.topLevelDomain}
                    </p>
                    <p>
                      <span className="details">Currencies: </span>
                      {data.currencies.map((item) => {
                        return <span>{item.name}, </span>;
                      })}
                    </p>
                    <p>
                      <span className="details">Languages: </span>
                      {data.languages.map((item) => {
                        return <span>{item.name}, </span>;
                      })}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12 align-items-center">
                    <section className="details">Border Countries:</section>
                    <div className="m-1 ">
                      {data.borders.map((item) => {
                        return (
                          <button id="button" type="button" class="btn btn-light m-1 ">
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
