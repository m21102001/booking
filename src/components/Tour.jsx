// import React, { useEffect,useState } from "react";
// import touraxios from "../enviroment/config/axiosinstance";
import cairo from "./image/city/cairo.jpg";
import luxor from "./image/city/luxor.jpg";
import aswan from "./image/city/aswan.jpg";
import alex from "./image/city/alexander-schimmeck-uzM1XBFqa60-unsplash.jpg";
import alex2 from "./image/city/alexandria.jpg";
import pexels from "./image/city/pexels-rachel-claire-4577718.jpg";
import simon from "./image/city/simon-berger-boyXZfqpwpU-unsplash.jpg";
import siwa from "./image/city/siwa.jpg";
import template from "./image/city/temple.jpg";
import "./Tour.css";

const Tour = () => {
  return (
    <div className="Container tour-container" id="tour">
      <h3 className="special-heading">Tour</h3>
      <div className="text-center ">
        <p className="fs-5">
          We always ask our clients to leave honest reviews,
          <br />
          on the basis of which you can make a choice
        </p>
      </div>
      <div className="text-center">
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">cairo</h2>
            <p className="text-left pe-5">
              Situated by the Nile, Egypt’s capital Cairo holds some of the
              country’s best historical and contemporary offerings, lively
              streets that never sleep, and diverse neighborhoods.
            </p>
          </div>
          <div className="col-4">
            <img src={cairo} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">Aswan</h2>
            <p className="text-left pe-5">
              Luxor is known as the world's greatest open-air museum. From the
              magnificent sunset views at the majestic temple complexes of
              Karnak and Luxor to the exciting and fun Nile cruises.
            </p>
          </div>
          <div className="col-4">
            <img src={aswan} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">luxor</h2>
            <p className="text-left pe-5">
              Hurghada is a luxury resort town divided by Sigala, ElDahar and
              El-Memsha. Spanning over 40 km of pristine coastline, Hurghada
              City has year-round sunshine, incredibly beautiful coral reefs.
            </p>
          </div>
          <div className="col-4">
            <img src={luxor} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">Dahab</h2>
            <p className="text-left pe-5">
              Of all the Red Sea destinations, Dahab is the most appealing for
              those who want to soak up some sun in pristine beaches, relax in
              laid back atmosphere and try local restaurants
            </p>
          </div>
          <div className="col-4">
            <img src={alex} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">Siwa</h2>
            <p className="text-left pe-5">
              After a long drive through the barren landscape of the Western
              Desert, you won’t believe your eyes when you reach Siwa for the
              first time. See an edenic island full of mineral springs, salt
              lakes
            </p>
          </div>
          <div className="col-4">
            <img src={siwa} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">Sharm Elsheikh</h2>
            <p className="text-left pe-5">
              With sunshine and warm waters all year round, Sharm El Sheikh is
              the closest destination to Europe where you can soak up sun, dive
              amazing corals reefs, and enjoy the sea any time
            </p>
          </div>
          <div className="col-4">
            <img src={simon} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">Fayoum</h2>
            <p className="text-left pe-5">
              Fayoum is one of the oldest cities in Egypt, dating back to around
              3200 BC. The city is famous for its natural landscape,
              encompassing sand dunes, palm trees, lakes, and valleys.
            </p>
          </div>
          <div className="col-4">
            <img src={pexels} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">alexandria</h2>
            <p className="text-left pe-5">
              Egypt’s second-largest city. Alexandria remained the capital of
              Egypt for nearly a thousand years and was immensely prosperous
              because of its strategic trading location between the
              Mediterranean and the Red Sea.
            </p>
          </div>
          <div className="col-4">
            <img src={alex2} alt="" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8">
            <h2 className="text-start">Taba</h2>
            <p className="text-left pe-5">
              Located on a beautiful stretch of the Sinai coastline around 20 km
              south of Taba city and nestled between the Red Sea and Sinai
              desert, Taba Heights is a year round charming seaside resort
            </p>
          </div>
          <div className="col-4">
            <img src={template} alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
