import React from "react";
import person_1 from "../images/person_1.jpg";
import person_2 from "../images/person_2.jpg";
import person_3 from "../images/person_3.jpg";

const Testimonial = () => {
  return (
    <>
      <section className="testify-container">
        <h1>Feedback From Happy Clients</h1>
        <section className="testify">
          <section class="testimonial">
            <section class="card">
              <section class="layer"></section>
              <section class="content">
                <p>
                  Far far away, behind the word mountains Consonantia, there
                  live the blind texts
                </p>
                <section class="image">
                  <img width="100px" src={person_3} alt="" />
                </section>
                <section class="details">
                  <h2>
                    Roger Scott <br />
                    <span> Marketting Manager</span>
                  </h2>
                </section>
              </section>
            </section>
          </section>

          <section class="testimonial">
            <section class="card">
              <section class="layer"></section>
              <section class="content">
                <p>
                  Far far away, behind the word mountains Consonantia, there
                  live the blind texts.
                </p>
                <section class="image">
                  <img width="100px" src={person_2} alt="" />
                </section>
                <section class="details">
                  <h2>
                    Roger Scott <br />
                    <span>Marketting Manager</span>
                  </h2>
                </section>
              </section>
            </section>
          </section>

          <section class="testimonial">
            <section class="card">
              <section class="layer"></section>
              <section class="content">
                <p>
                  Far far away, behind the word mountains Consonantia, there
                  live the blind texts
                </p>
                <section class="image">
                  <img width="100px" src={person_1} alt="" />
                </section>
                <section class="details">
                  <h2>
                    Roger Scott
                    <br />
                    <span>Marketting Manager</span>
                  </h2>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Testimonial;
