import React from "react";

const PageTitle = ({ title = "About Us" }) => {
  return (
    <>
      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/background/page-title.jpg)",
          }}
        />
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}
          />
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}
          />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{title}</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
