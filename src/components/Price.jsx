import React from "react";

const Pricing = () => {
  return (
    <>
      <section className="price-container-full">
        <section className="price-container">
          <h1 className="bolder"> Affordable Packages</h1>
          <section className="columns">
            <ul className="price">
              <li className="header basic"></li>
              <li className="bold">PERSONAL</li>
              <li className="bolder">$ 49 /mos</li>
              <li className="grey">5 Dog Walk</li>
              <li className="">3 Vet Visit</li>
              <li className="grey">3 Pet Spa</li>
              <li>Free Supports</li>
              <li className="">
                <a href="/" className="button">
                  GET STARTED
                </a>
              </li>
            </ul>
          </section>

          <section className="columns">
            <ul className="price">
              <li className="header pro"></li>
              <li className="bold">BUSINESS</li>
              <li className="bolder">$ 79 /mos</li>
              <li className="grey">5 Dog Walk</li>
              <li>3 Vet Visits</li>
              <li className="grey">3 Pet Spa</li>
              <li>Free Supports</li>
              <li className="">
                <a href="/" className="button">
                  GET STARTED
                </a>
              </li>
            </ul>
          </section>
          <section className="columns">
            <ul className="price">
              <li className="header premium"></li>
              <li className="bold">ULTIMATE</li>
              <li className="bolder">$ 109 /mos</li>
              <li className="grey">5 Dog Walks</li>
              <li>3 Vet Visits</li>
              <li className="grey">3 Pet Spa</li>
              <li>Free Supports</li>{" "}
              <li className="">
                <a href="/" className="button">
                  GET STARTED
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Pricing;
