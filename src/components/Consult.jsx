import React from "react";

const Consult = () => {
  return (
    <>
      <section className="consult-container">
        <section className="consult-img left"></section>

        <section className="consult-form right">
          <h2>Free Consultation</h2>
          <section className="form-container">
            <section className="form-group">
              <section className="form-field">
                <section className="select-wrap">
                  <select name="" id="" className="form-control form-group">
                    <option value="">Select services</option>
                    <option value="">Cat Sitting</option>
                    <option value="">Dog Walk</option>
                    <option value="">Pet Spa</option>
                    <option value="">Pet Grooming</option>
                    <option value="">Pet Daycare</option>
                  </select>
                </section>
              </section>
            </section>

            <section container-form-half>
              <section className="form-group form-half-section">
                <input
                  type="text"
                  className="form-control form-half left"
                  placeholder="Enter Your Name"
                />
              </section>
              <section className="form-group form-half-section">
                <input
                  type="text"
                  className="form-control form-half right"
                  placeholder="Vehicle Number"
                />
              </section>
              <section className="form-group form-half-section">
                <section className="input-wrap">
                  <input
                    type="text"
                    className="form-control appointment_date form-half left"
                    placeholder="Date"
                  />
                </section>
              </section>
              <section className="form-group form-half-section">
                <section className="input-wrap">
                  <input
                    type="text"
                    className="form-control appointment_time form-half right"
                    placeholder="Time"
                  />
                </section>
              </section>
            </section>
            <section className="form-group">
              <textarea
                className=" form-message"
                name=""
                id=""
                cols="30"
                rows="7"
                placeholder="Message"
              ></textarea>
            </section>
            <section className="form-group">
              <input
                type="submit"
                className="form-control form-submit"
                value="SEND MESSAGE"
              />
            </section>
          </section>
        </section>

        <section className="clear"></section>
      </section>
    </>
  );
};

export default Consult;
