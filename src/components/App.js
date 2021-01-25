import React, { useState, useEffect } from "react";
import CovidCases from "./CovidRomania";
import axios from "axios";
import "../assets/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Credentials from "./Credentials";

function App() {
  const [covidRomania, setCovidCountries] = useState([]);

  useEffect(() => {
    AOS.init({
      delay: 500,
    });
    AOS.refresh();
    axios.get("https://corona.lmao.ninja/v2/countries/romania").then((res) => {
      setCovidCountries(res.data);
    });
  }, []);

  return (
    <div className="background">
      <div className="brand"></div>
      <CovidCases covidRomania={covidRomania} />
      <Credentials></Credentials>
      <Footer></Footer>
    </div>
  );
}

export default App;
