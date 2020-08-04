import React from "react";
import aboutImg from "../images/about-1.jpg";
import updateCount from "./script";

const hostDetails = [
  { count: 0, dataTarget: 50, product: "Customer" },
  { count: 0, dataTarget: 8500, product: "Professionals" },
  { count: 0, dataTarget: 20, product: "Products" },
  { count: 0, dataTarget: 50, product: "Pets Hosted" },
];

const ChoosesUs = () => {
  return (
    <>
      <section className="container">
        <section className="choose-us">
          <section className="choose-img left">
            <img
              alt=""
              src={aboutImg}
              style={{ width: "500px", height: "auto" }}
            />
          </section>
          <section className="choose-text right">
            <h2>Why Choose Us?</h2>
            <section className="choose-cont">
              <section className="choose-details">
                <section className="flat-icon left">
                  <i className="fa fa-stethoscope fa-2x flat-icon-align"></i>
                </section>
                <h3>Care Advices</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </section>

              <section className="choose-details">
                <section className="flat-icon left">
                  <i className="fa fa-life-ring fa-2x flat-icon-align"></i>
                </section>
                <h3>Customer Supports</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </section>

              <section className="choose-details">
                <section className="flat-icon left">
                  <i className="fa fa-volume-control-phone fa-2x flat-icon-align"></i>
                </section>
                <h3>Emergency Services</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </section>

              <section className="choose-details">
                <section className="flat-icon left">
                  <i className="fa fa-user-md fa-2x flat-icon-align"></i>
                </section>
                <h3>Veterinary Help</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </section>
            </section>
          </section>
          <section className="clear"></section>
        </section>
      </section>

      <section class="counters">
        <section class="container-counter">
          {hostDetails.map(({ count, product, dataTarget }, i) => (
            <section>
              <section class="counter" data-target="50">
                {updateCount(dataTarget, count)}
              </section>
              <h3>{product}</h3>
            </section>
          ))}
        </section>
      </section>

      {/* <script src={``}></script> */}
    </>
  );
};

export default ChoosesUs;
