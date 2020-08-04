import React from "react";
import blog1 from "../images/image_1.jpg";
import blog2 from "../images/image_2.jpg";
import blog3 from "../images/image_3.jpg";

const Nav = () => {
  return (
    <>
      <section className="news-section-container">
        <h1 className="new-text">Latest news from our blog</h1>
        <section className="news-card">
          <img alt="News Img" src={blog1} className="news-img" />
          <section className="news-container">
            <h4>
              <a className="news-card-text1" href="/">
                APRIL 07, 2020 ADMIN 3<i class="fa fa-comment"></i>&nbsp; 3
              </a>
            </h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts
            </p>
          </section>
        </section>

        <section className="news-card">
          <img alt="News Img" src={blog2} className="news-img" />
          <section className="news-container">
            <h4>
              <a className="news-card-text1" href="/">
                APRIL 07, 2020 ADMIN 3&nbsp;<i class="fa fa-comment"></i>&nbsp; 3
              </a>
            </h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts
            </p>
          </section>
        </section>

        <section className="news-card">
          <img alt="News Img" src={blog3} className="news-img" />
          <section className="news-container">
            <h4>
              <a className="news-card-text1" href="/">
                APRIL 07, 2020 ADMIN 3&nbsp;<i class="fa fa-comment"></i>&nbsp; 3
              </a>
            </h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Nav;
