import React from "react";
import faqImg from "../images/faq-img.jpg";

const Faqs = () => {
  return (
    <>
      <section className="faq-container">
        <section className="left-faq left">
          <h1>Frequently Asked Questions</h1>

          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <br />
            Vokalia and Consonantia, there live the blind texts..
          </p>

          <button class="accordion">How To Train Your Pet Dog</button>
          <section class="panel">
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </section>

          <button class="accordion">How To Manage Your Pets</button>
          <section class="panel">
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </section>

          <button class="accordion">
            What Is The Best Grooming For Your Pets
          </button>
          <section class="panel">
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </section>

          <button class="accordion">
            What Are The Requirements For Sitting Your Pets
          </button>
          <section class="panel">
            <ol>
              <li>Far far away, behind the word mountains</li>
              <li>Consonantia, there live the blind texts</li>
              <li>When she reached the first hills of the Italic Mountains</li>
              <li>Bookmarksgrove, the headline of Alphabet Village</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ol>
          </section>
        </section>

        <section className="faq-right right">
          <img alt="" className="faq-img" src={faqImg} />
        </section>
        <section className="clear"></section>
      </section>
    </>
  );
};

export default Faqs;
