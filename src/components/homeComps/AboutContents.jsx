import React from "react";
import PageTitle from "./PageTitle";

const AboutContents = () => {
  return (
    <>
      <PageTitle />
      {/* about-section */}
      <section className="about-section pt_120 pb_120">
        <div className="pattern-layer rotate-me" />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box pr_90 mr_40">
                  <div
                    className="image-shape"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-3.png)",
                    }}
                  />
                  <figure className="image">
                    <img src="assets/images/resource/about-1.jpg" alt />
                  </figure>
                  <div className="rating-box">
                    <ul className="rating mb_5 clearfix">
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                    </ul>
                    <h6>5 Star Rating Bank</h6>
                  </div>
                  <div className="experience-box">
                    <div className="inner">
                      <h2>40</h2>
                      <h6>Years of Experiense</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box ml_40">
                  <div className="sec-title mb_20">
                    <h6>About US</h6>
                    <h2>Connecting Europe and Asia with Smarter Banking..</h2>
                  </div>
                  <div className="text-box mb_40">
                    <p>
                      At Qulo Credit Union, we believe banking should be as borderless as your ambitions. Serving individuals and businesses across Europe and Asia, we provide seamless financial solutions designed for a connected world.
                    </p>
                  </div>
                  <div className="inner-box mb_45">
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-10" />
                      </div>
                      <h3>24/7 Digital Banking</h3>
                      <p>
                        Access your money anytime, anywhere.
                      </p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11" />
                      </div>
                      <h3>99.99% Success</h3>
                      <p>
                        Personal & Business Solutions – Tailored services for your goals.
                      </p>
                    </div>
                  </div>
                  <div className="btn-box">
                    <a href="/" className="theme-btn btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
      {/* funfact-section */}
      <section className="funfact-section about-page pt_95 pb_120">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-21" />
                </div>
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={50}>
                    0
                  </span>
                  <span>k+</span>
                </div>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-22" />
                </div>
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={90}>
                    0
                  </span>
                  <span>Bn</span>
                </div>
                <p>Total Transection</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-23" />
                </div>
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={40}>
                    0
                  </span>
                  <span>+</span>
                </div>
                <p>Branchs in USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact-section end */}
      {/* video-section */}
      <section className="video-section alternat-2 centred">
        <div
          className="bg-layer parallax-bg"
          data-parallax='{"y": 100}'
          style={{
            backgroundImage: "url(/assets/images/background/video-bg.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="inner-box">
            <h2>The 3rd Generation Private Commercial Bank</h2>
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                className="lightbox-image"
                data-caption
              >
                <i className="icon-20" />
                <span className="border-animation border-1" />
                <span className="border-animation border-2" />
                <span className="border-animation border-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* video-section end */}
      {/* feature-style-three */}
      <section className="feature-style-three pt_120 pb_90">
        <div className="auto-container">
          <div className="sec-title mb_70 centred">
            <h6>Why US</h6>
            <h2>Why Choose Us</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-5" />
                  </div>
                  <h4>
                    <a href="/">Innovation at Scale</a>
                  </h4>
                  <p>
                    Cutting-edge technology that simplifies money management, anytime and anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-6" />
                  </div>
                  <h4>
                    <a href="/contact">24/7 Personalized Support from the Expert Team</a>
                  </h4>
                  <p>
                    Dedicated teams offering guidance tailored to your financial goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-7" />
                  </div>
                  <h4>
                    <a href="#">Community-Driven Values</a>
                  </h4>
                  <p>
                     A commitment to integrity, trust, and financial growth for every member.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-8" />
                  </div>
                  <h4>
                    <a href="#">Global Presence</a>
                  </h4>
                  <p>
                    Serving individuals and businesses across the United Sates, Europe and Asia with Seamless cross-border solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature-style-three end */}
      {/* apps-section */}
      <section className="apps-section about-page pb_120">
        <div
          className="light-icon"
          style={{ backgroundImage: "url(assets/images/icons/icon-4.png)" }}
        />
        <div className="auto-container">
          <div className="inner-container">
            <div className="shape">
              <div
                className="shape-1"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-4.png)",
                }}
              />
              <div
                className="shape-2"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-3.png)",
                }}
              />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image image-1">
                    <img src="assets/images/resource/mockup-1.png" alt />
                  </figure>
                  <figure className="image image-2">
                    <img src="assets/images/resource/mockup-2.png" alt />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title mb_20">
                    <h6>Mobile App</h6>
                    <h2>Get the Fastest and Most Secure Banking</h2>
                  </div>
                  <div className="text-box mb_50">
                    <p>
                      Experience fast, secure, and convenient banking with our mobile app — available now on the Google Play Store and Apple App Store.
                    </p>
                  </div>
                  <div className="btn-box">
                    <a href="#" className="play-store mr_20">
                      <img src="assets/images/icons/icon-2.png" alt />
                      <span>get it on</span>
                      Google Play
                    </a>
                    <a href="#" className="play-store">
                      <img src="assets/images/icons/icon-3.png" alt />
                      <span>Download on the</span>
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* apps-section end */}
      {/* testimonial-style-two */}
      <section className="testimonial-style-two pt_120 pb_120">
        <div
          className="bg-layer"
          style={{
            backgroundImage:
              "url(/assets/images/background/testimonial-bg-2.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
              <div className="sec-title mr_70">
                <h6>Testimonials</h6>
                <h2>Love from Happy Clients</h2>
                <p>
                  Trusted by members Across Europe and Asia.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
              <div className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="author-box">
                      <figure className="thumb-box">
                        <img
                          src="assets/images/resource/testimonial-4.png"
                          alt
                        />
                      </figure>
                      <h4>Julien Anthor</h4>
                      <span className="designation">Manager</span>
                    </div>
                    <ul className="rating mb_15 clearfix">
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                    </ul>
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                      pellentesque etiam nis quis at arcu nunc neque ac integer
                      sit lobortis diam semper nulla duis in blandit.”
                    </p>
                  </div>
                </div>
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="author-box">
                      <figure className="thumb-box">
                        <img
                          src="assets/images/resource/testimonial-5.png"
                          alt
                        />
                      </figure>
                      <h4>Rolier Demonil</h4>
                      <span className="designation">Manager</span>
                    </div>
                    <ul className="rating mb_15 clearfix">
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                      <li>
                        <i className="icon-9" />
                      </li>
                    </ul>
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                      pellentesque etiam nis quis at arcu nunc neque ac integer
                      sit lobortis diam semper nulla duis in blandit.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-style-two end */}
      {/* subscribe-section */}
      <section className="subscribe-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}
        />
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text-box">
                <h2>Subscribe us to Recieve Latest Updates</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner ml_40">
                <form method="post" action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                    <button type="submit" className="theme-btn btn-two">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section end */}
    </>
  );
};

export default AboutContents;
