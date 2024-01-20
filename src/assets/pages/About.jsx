import React from "react";

function About() {
  return (
    <div>
      {/*<!-- about jc of mobile-->*/}
      <section className="about d-md-none">
        <div className="container">
          <h2>
            <span>
              <img src="/react-petslove/images/footprint.png" alt="before" />
            </span>
            About
            <span>
              <img src="/react-petslove/images/footprint.png" alt="" />{" "}
            </span>
          </h2>
          <div className="card align-items-center text-center">
            <img
              src="/react-petslove/images/about JC1.png"
              className="card-img-top"
              alt="about"
            />
            <div className="card-body">
              <h5 className="card-title">Fresh</h5>
              <p className="card-text">
                為了主子的健康 傑西幾乎每天凌晨到港口購買新鮮食材 並製作鮮食
              </p>
            </div>
          </div>
          <div className="card align-items-center text-center">
            <img
              src="/react-petslove/images/about JC2.png"
              className="card-img-top"
              alt="about"
            />
            <div className="card-body">
              <h5 className="card-title">No</h5>
              <p className="card-text">
                傑西細心研究食譜
                <br />
                希望不添加防腐劑的鮮食
                <br />
                讓11位主子們年延益壽！
              </p>
            </div>
          </div>
          <div className="card align-items-center text-center">
            <img
              src="/react-petslove/images/about JC1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Limited</h5>
              <p className="card-text">
                所有食品都由傑西親手製作
                <br />
                新鮮食材加全程高溫殺菌烘烤12小時以上。
                <br />
                數量有限!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*<!--about jc of md&lg -->*/}
      <div className="about-lg container d-none d-md-block">
        <h2 className="text-center">
          <span>
            <img src="/react-petslove/images/footprint.png" alt="before" />
          </span>
          About
          <span>
            <img src="/react-petslove/images/footprint.png" alt="" />
          </span>
        </h2>
        <div>
          <div className="card-body1">
            <img
              className="aboutImg1"
              src="/react-petslove/images/about JC1.png"
              alt="aboutImg1"
            />
            <div className="card-title">
              <h3>Fresh</h3>
            </div>
            <p className="card-text">
              For your pet's health
              <br />
              傑西幾乎每天凌晨到港口購買新鮮食材並製作鮮食
            </p>
          </div>
        </div>
        <div>
          <div className="card-body2">
            <img
              className="aboutImg2"
              src="/react-petslove/images/about JC2.png"
              alt="aboutImg2"
            />
            <div className="card-title">
              <h3>No preservatives</h3>
            </div>
            <p className="card-text">
              不添加防腐劑的鮮食讓11位主子們(5貓6狗)年延益壽！
            </p>
          </div>
        </div>
        <div>
          <div className="card-body3">
            <img
              className="aboutImg3"
              src="/react-petslove/images/about JC3.png"
              alt="aboutImg3"
            />
            <div className="card-title">
              <h3>Limited Quantity</h3>
            </div>
            <p className="card-text">
              為了主子的健康 所有食品都由傑西親手製作
              <br />
              新鮮食材加上全程高溫殺菌烘烤12小時以上
              <br />
              數量有限！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
