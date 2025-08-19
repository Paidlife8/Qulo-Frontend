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
                    808 Washington Avenue Alamogordo,  <br />
                    NM 88310
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
                    <a href="mailto:contact@qulocredit.com">contact@qulocredit.com</a>
                    <br />{" "}
                    <a href="mailto:support@qulocredit.com">support@qulocredit.com</a>
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
                    Emergency Case <br />
                    <a href="tel:9175471462">+(917) 547-1462 </a> (24/7)
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
