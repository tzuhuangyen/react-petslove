import React from "react";

function About() {
  return (
    <div>
      {/*<!-- about jc of mobile-->*/}
      <section className="about d-md-none">
        <div className="container">
          <h2>
            <span>
              <img src="./assets/images/footprint.png" alt="before" />
            </span>
            關於傑西
            <span>
              <img src="./assets/images/footprint.png" alt="" />{" "}
            </span>
          </h2>
          <div className="card align-items-center text-center">
            <img
              src="./assets/images/about JC1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">當天現買食材</h5>
              <p className="card-text">
                為了主子的健康 傑西幾乎每天凌晨到港口購買新鮮食材 並製作鮮食
              </p>
            </div>
          </div>
          <div className="card align-items-center text-center">
            <img
              src="./assets/images/about JC2.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">不添加任何防腐劑</h5>
              <p className="card-text">
                傑西細心研究食譜
                <br />
                希望不添加防腐劑的鮮食
                <br />
                讓11位主子們(5貓6狗)年延益壽！
              </p>
            </div>
          </div>
          <div className="card align-items-center text-center">
            <img
              src="./assets/images/about JC1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">手工限量製作</h5>
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
        <h2 className="text-center" data-aos="zoom-in" data-aos-duration="1200">
          <span>
            <img src="./assets/images/footprint.png" alt="before" />
          </span>
          關於傑西
          <span>
            <img src="./assets/images/footprint.png" alt="" />{" "}
          </span>
        </h2>
        <div>
          <div
            className="card-body1"
            data-aos="zoom-in-left"
            data-aos-duration="1300"
          >
            <img
              className="aboutImg1"
              src="./assets/images/about JC1.png"
              alt=""
            />
            <div className="card-title">
              <h3>當天現買食材</h3>
            </div>
            <p className="card-text">
              為了主子的健康
              <br />
              傑西幾乎每天凌晨到港口購買新鮮食材並製作鮮食
            </p>
          </div>
        </div>
        <div>
          <div
            className="card-body2"
            data-aos="zoom-in-right"
            data-aos-duration="1400"
          >
            <img
              className="aboutImg2"
              src="./assets/images/about JC2.png"
              alt=""
            />
            <div className="card-title">
              <h3>不添加任何防腐劑</h3>
            </div>
            <p className="card-text">
              傑西細心研究食譜
              <br />
              不添加防腐劑的鮮食讓11位主子們(5貓6狗)年延益壽！
            </p>
          </div>
        </div>
        <div>
          <div
            className="card-body3"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img
              className="aboutImg3"
              src="./assets/images/about JC3.png"
              alt=""
            />
            <div className="card-title">
              <h3>手工限量製作</h3>
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
