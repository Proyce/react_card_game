import React from "react";

const Header = () => {
  return (
    <>
      <section className="carousel">
          <h1>Highest Quality Care For Pets <br/> You'll Love</h1>
          <section className="btn-text">                
          <button className="btn-learn">LEARN MORE</button>
          </section>        
      </section>

    <section class="row">
    <section class="column">
      <section class="card active">
      <section className="card-icon"><i className="fa fa-paw fa-2x card-icon-text"></i></section>
        <h3 className="card-text">Dog Walking </h3>
        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right</p>
     <i class="fa fa-chevron-circle-right fa-3x"></i>
      </section>
  </section>
  
    <section class="column">
      <section class="card">
      <section className="card-icon"><i className="fa fa-cutlery fa-2x card-icon-text"></i></section>
        <h3 className="card-text">Pet Daycare</h3>
        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
        <i class="fa fa-chevron-circle-right fa-3x"></i>
      </section>
    </section>
    
    <section class="column">
      <section class="card">
      <section className="card-icon"><i className="fa fa-heartbeat fa-2x card-icon-text"></i></section>
        <h3 className="card-text">Pet Grooming</h3>
        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
        <i class="fa fa-chevron-circle-right fa-3x"></i>
      </section>
    </section>
  </section>
    </>
  );
};

export default Header;
