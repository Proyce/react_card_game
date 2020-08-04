import React from "react";
import footerImg1 from "../images/image_1.jpg"
import footerImg2 from "../images/image_2.jpg";

const Footer = () => {
  return (
    <>
      <footer className="body-content">
        <section className="footer">
          <section className="inner-footer">
            <section className="footer-items">
              <h2>Pet Sitting</h2>
              <section className="border"></section>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>

              <section className="footer-social-media">
                <a href="/">
                  <i className="fa fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
              </section>
            </section>

            <section className="footer-items">
              <h2>Latest News</h2>
              <section className="border"></section>
              <img
                alt="footer-img"
                className="footer-img mt-20"
                src={footerImg1}
              />
              <section className="footer-p">
                <p>Even the all-powerful pointing has no about</p>
              </section>
              <h6 className="clear">April 7, 2020 Admin</h6>
              <hr />

              <img alt="footer-img" className="footer-img" src={footerImg2} />
              <section className="footer-p">
                <p>Even the all-powerful pointing has no about</p>
              </section>
              <h6 className="clear">April 7, 2020 Admin</h6>
            </section>

            <section className="footer-items">
              <section className="ml-60">
                <h2>Quick Links</h2>
              </section>
              <section className="border-ml-80"></section>
              <ul className="ml-30">
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/">
                  <li>About</li>
                </a>
                <a href="/">
                  <li>Services</li>
                </a>
                <a href="/">
                  <li>Works</li>
                </a>
                <a href="/">
                  <li>Blog</li>
                </a>
                <a href="/">
                  <li>Contact</li>
                </a>
              </ul>
            </section>

            <section className="footer-items">
              <h2>Have a Question</h2>
              <section className="border"></section>
              <ul className="mr-20">
                <i className="fa fa-flag">
                  &nbsp;203 Fake St. Mountain View, San Francisco, California,
                  USA
                </i>
                <i className="fa fa-phone">&nbsp;+2 392 3929 210 </i>
                <i className="fa fa-envelope">&nbsp; info@yourdomain.com</i>
              </ul>
            </section>
            <section className="footer-bottom">
              Copyright &copy; 2020 All right reserved | This template is
              with&nbsp;
              <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;
              from&nbsp;
              <a href="/">colorlib.com</a>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
