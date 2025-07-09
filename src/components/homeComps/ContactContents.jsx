import React from "react";
import PageTitle from "./PageTitle";

const ContactContents = () => {
  return (
    <>
      <PageTitle title="Contact Details" />
      <section className="contact-info-section centred pt_120 pb_90">
        <div className="auto-container">
          <div className="sec-title mb_70">
            <h6>Contact US</h6>
            <h2>Contact Details</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div
                className="info-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-2" />
                  </div>
                  <h3>Our Location</h3>
                  <p>
                    1901 Thornridge Cir. Shiloh, <br />
                    Hawaii 81063
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div
                className="info-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-43" />
                  </div>
                  <h3>Email Address</h3>
                  <p>
                    <a href="mailto:contact@example.com">contact@example.com</a>
                    <br />{" "}
                    <a href="mailto:support@example.com">support@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div
                className="info-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-44" />
                  </div>
                  <h3>Phone Number</h3>
                  <p>
                    Emergency Cases <br />
                    <a href="tel:2085550112">+(208) 555-0112</a> (24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContents;
