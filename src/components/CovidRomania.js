import React from "react";
import "../assets/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
const element = <FontAwesomeIcon icon={faMale} />;
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
export default function CovidCountries({ covidRomania }) {
  return (
    <div className="main">
      <div className="covidStats">
        <div data-aos="fade-right">
          Total number of cases
          <p className="count">
            {covidRomania.cases}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Today's cases
          <p className="count">
            {covidRomania.todayCases}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Deaths
          <p>
            {covidRomania.deaths}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Today's deaths
          <p className="count">
            {covidRomania.todayDeaths}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Recovered
          <p>
            {covidRomania.recovered}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Today's recovered
          <p>
            {covidRomania.todayRecovered}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Active
          <p>
            {covidRomania.active}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Critical
          <p>
            {covidRomania.critical}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Cases Per One Million
          <p>
            {covidRomania.casesPerOneMillion}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Deaths Per One Million
          <p>
            {covidRomania.deathsPerOneMillion}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Tests
          <p>
            {covidRomania.tests}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Tests Per One Million
          <p>
            {covidRomania.testsPerOneMillion}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Population
          <p>
            {covidRomania.population}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Recovered Per Million
          <p>
            {covidRomania.recoveredPerOneMillion}
            <i>{element}</i>
          </p>
        </div>
        <div data-aos="fade-right">
          Critical Per Million
          <p>
            {covidRomania.criticalPerOneMillion}
            <i>{element}</i>
          </p>
        </div>
      </div>
      <div className="covidText">
        <div data-aos="fade-left">
          <p>#</p>
        </div>
        <div data-aos="fade-left">
          <p>W</p>
        </div>
        <div data-aos="fade-left">
          <p>E</p>
        </div>
        <div data-aos="fade-left">
          <p>A</p>
        </div>
        <div data-aos="fade-left">
          <p>R</p>
        </div>
        <div data-aos="fade-left">
          <p>----</p>
        </div>
        <div data-aos="fade-left">
          <p>Y</p>
        </div>{" "}
        <div data-aos="fade-left">
          <p>O</p>
        </div>{" "}
        <div data-aos="fade-left">
          <p>U</p>
        </div>{" "}
        <div data-aos="fade-left">
          <p>R</p>
        </div>
        <div data-aos="fade-left">
          <p>----</p>
        </div>
        <div data-aos="fade-left">
          <p>M</p>
        </div>
        <div data-aos="fade-left">
          <p>A</p>
        </div>
        <div data-aos="fade-left">
          <p>S</p>
        </div>
        <div data-aos="fade-left">
          <p>K</p>
        </div>
      </div>
    </div>
  );
}
