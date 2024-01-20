import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

function Type() {
  return (
    <div>
      {/* <!-- types --> */}
      <section className="types">
        <div className="container">
          <h2 className="text-center">
            <span>
              <img src="/react-petslove/images/footprint.png" alt="before" />
            </span>
            Types of Snack
            <span>
              <img src="/react-petslove/images/footprint.png" alt="" />{" "}
            </span>
          </h2>

          <div className="d-flex justify-content-lg-between justify-content-md-center flex-wrap">
            {/* <!-- type1 --> */}
            <div className="card border-0 text-white shadow mb-4">
              <div className="position-relative">
                <a href="#" className="d-block type-card-hover">
                  <img
                    src="/react-petslove/images/type1.png"
                    className="card-img-top typeFood"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <h4 className="card-title">預購熱門寵食</h4>
                  </div>
                </a>
                <div className="card-body">
                  <ul className="text-dark list-unstyled">
                    <li className="mb-2">
                      <img src="/react-petslove/images/footprint.png" alt="" />
                      下單後開始製作
                      <img src="/react-petslove/images/footprint.png" alt="" />
                    </li>
                    <li className="mb-2">
                      <img src="/react-petslove/images/footprint.png" alt="" />
                      等待時間約2~5天
                      <img src="/react-petslove/images/footprint.png" alt="" />
                    </li>
                    <li>
                      <img src="/react-petslove/images/footprint.png" alt="" />
                      可保存兩週
                      <img src="/react-petslove/images/footprint.png" alt="" />
                    </li>
                  </ul>
                  <a href="./product.html" className="btn ">
                    了解更多
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- type2 --> */}
            <div className="card text-white shadow mb-4">
              <div>
                <a href="#" className="d-block type-card-hover">
                  <img
                    src="/react-petslove/images/type2.png"
                    className="card-img-top typeFood"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <h4 className="card-title card-text">當天現貨寵食</h4>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <ul className="text-dark list-unstyled">
                  <li className="mb-2">
                    <img src="/react-petslove/images/footprint.png" alt="" />
                    當天清晨採購
                    <img src="/react-petslove/images/footprint.png" alt="" />
                  </li>
                  <li className="mb-2">
                    <img src="/react-petslove/images/footprint.png" alt="" />
                    限量製作
                    <img src="/react-petslove/images/footprint.png" alt="" />
                  </li>
                  <li>
                    <img src="/react-petslove/images/footprint.png" alt="" />
                    可當天傍晚取貨
                    <img src="/react-petslove/images/footprint.png" alt="" />
                  </li>
                </ul>
                <a href="./product.html" className="btn">
                  了解更多
                </a>
              </div>
            </div>
            {/* <!-- type3 --> */}
            <div className="card shadow text-white mb-4">
              <a href="#" className="d-block type-card-hover">
                <img
                  src="/react-petslove/images/type5.jpg"
                  className="card-img-top typeFood"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h4 className="card-title card-text">客製寵物零食</h4>
                </div>
              </a>

              <div className="card-body">
                <ul className="text-dark list-unstyled">
                  <li className="mb-2">
                    <img src="/react-petslove/images/footprint.png" alt="" />
                    依照主子喜好
                    <img src="/react-petslove/images/footprint.png" alt="" />
                  </li>
                  <li className="mb-2">
                    <img src="/react-petslove/images/footprint.png" alt="" />
                    慶祝主子生日
                    <img src="/react-petslove/images/footprint.png" alt="" />
                  </li>
                  <li>
                    <img src="/react-petslove/images/footprint.png" alt="" />
                    客製化服務
                    <img src="/react-petslove/images/footprint.png" alt="" />
                  </li>
                </ul>
                <a href="./product.html" className="btn">
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- -------end of types------- --> */}
    </div>
  );
}

export default Type;
