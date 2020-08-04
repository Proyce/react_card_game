import React from "react";
import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";
import gallery4 from "../images/gallery-4.jpg";
import gallery5 from "../images/gallery-5.jpg";
import gallery6 from "../images/gallery-6.jpg";

const Gallery = () => {
  return (
    <>
      <section>
        <section class="container-gallery">
          <h1> Pets Gallery</h1>
          <section className="section-img-gallery">
            <img className="img-gallery" src={gallery1} alt="gallery-img" />
            <img className="img-gallery" src={gallery2} alt="gallery-img" />
            <img className="img-gallery" src={gallery3} alt="gallery-img" />
            <img className="img-gallery" src={gallery4} alt="gallery-img" />
            <img className="img-gallery" src={gallery5} alt="gallery-img" />
            <img className="img-gallery" src={gallery6} alt="gallery-img" />
          </section>
        </section>
      </section>
    </>
  );
};

export default Gallery;
