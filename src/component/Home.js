import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import covid_19 from "../image/covid_19.jpg";
import CardCountry from "./CardCountry";
export default function Home() {
  const countries = useSelector((state) => state.countries);
  console.log("country", countries);
  return (
    <>
      <div className="top">
        <img className="fit-picture" src={covid_19} alt="covid" />
        <div>
          <h2>
            WORLD
            <pre>
              Infection:{" "}
              {Number(
                useSelector((state) => state.totalConfirmed)
              ).toLocaleString()}
            </pre>
          </h2>
        </div>
      </div>
      <CardCountry country={countries} />
    
    </>
  );
}
