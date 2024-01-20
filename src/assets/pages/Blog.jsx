import React from "react";

function Blog() {
  return (
    <div>
      {/* <!-- -------mobile of knowPets start ------- --> */}
      <section className="knowPets mt-8 d-md-none">
        <div className="container">
          <h2 className="text-center pt-5 ">
            <span>
              <img src="/react-petslove/images/footprint.png" alt="footprint" />
            </span>
            寵物生活知識
            <span>
              <img src="/react-petslove/images/footprint.png" alt="footprint" />
            </span>
          </h2>
          <div className="card type-card-hover">
            <img
              src="/react-petslove/images/article1.png"
              className="card-img-top"
              alt="article1"
            />
            <div className="card-body">
              <span className="card-text text-muted"> 2022-08-21 </span>
              <h5 className="card-title">
                謠言破解！
                <br />
                毛孩其實可以吃豬肉！
              </h5>

              <p className="card-text">
                <small className="text-muted">#健康 #謠言破解</small>
              </p>
            </div>
          </div>
          <div className="card type-card-hover">
            <img
              src="/react-petslove/images/article2.png"
              className="card-img-top"
              alt="article2"
            />
            <div className="card-body">
              <span className="card-text text-muted"> 2023-09-12 </span>
              <h5 className="card-title">
                謠言破解！
                <br />
                毛孩其實可以吃豬肉！
              </h5>

              <p className="card-text">
                <small className="text-muted">#健康 #謠言破解</small>
              </p>
            </div>
          </div>
          <div className="card type-card-hover">
            <img
              src="/react-petslove/images/article3.png"
              className="card-img-top"
              alt="article3"
            />
            <div className="card-body">
              <span className="card-text text-muted"> 2023-09-21 </span>
              <h5 className="card-title">
                謠言破解！
                <br />
                毛孩其實可以吃豬肉！
              </h5>

              <p className="card-text">
                <small className="text-muted">#健康 #謠言破解</small>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end mobile of know pets --> */}

      {/* <!-- start lg of know pets --> */}
      <section className="knowPets-lg mt-9 d-none d-md-block pb-md-8">
        <div className="container">
          <h2 className="text-center pt-md-8">
            <span>
              <img src="/react-petslove/images/footprint.png" alt="footprint" />
            </span>
            Pet's Blog
            <span>
              <img src="/react-petslove/images/footprint.png" alt="footprint" />
            </span>
          </h2>
          <div className="card shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row">
              <div className="col-md-4">
                <img src="/react-petslove/images/article1.png" alt="article1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-text text-muted"> 2020-08-21 </span>
                  <h5 className="card-title">謠言破解! 毛孩其實可以吃豬肉！</h5>

                  <p className="card-text">
                    <small className="text-muted">#健康 #謠言破解</small>
                  </p>
                  <p className="card-text">
                    過去常常誤解豬肉難消化，容易有寄生蟲，其實只要來源衛生，選擇衛生、有合格認證的肉品來源，避免來路不明的劣質豬肉，才能帶給毛孩安全又美味的豬料理喔！
                  </p>

                  {/* <a className="moreBtn" href="./articleDetail.html">
                    More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row">
              <div className="col-md-4">
                <img src="/react-petslove/images/article2.png" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-text text-muted"> 2021-09-12 </span>
                  <h5 className="card-title">謠言破解! 毛孩其實可以吃豬肉！</h5>

                  <p className="card-text">
                    <small className="text-muted">#健康 #謠言破解</small>
                  </p>
                  <p className="card-text">
                    過去常常誤解豬肉難消化，容易有寄生蟲，其實只要來源衛生，選擇衛生、有合格認證的肉品來源，避免來路不明的劣質豬肉，才能帶給毛孩安全又美味的豬料理喔！
                  </p>
                  {/* <a className="moreBtn" href="./articleDetail.html">
                    More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row">
              <div className="col-md-4">
                <img src="/react-petslove/images/article3.png" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-text text-muted"> 2021-12-26 </span>
                  <h5 className="card-title">謠言破解! 毛孩其實可以吃豬肉！</h5>

                  <p className="card-text">
                    <small className="text-muted">#健康 #謠言破解</small>
                  </p>
                  <p className="card-text">
                    過去常常誤解豬肉難消化，容易有寄生蟲，其實只要來源衛生，選擇衛生、有合格認證的肉品來源，避免來路不明的劣質豬肉，才能帶給毛孩安全又美味的豬料理喔！
                  </p>
                  {/* <a className="moreBtn" href="./articleDetail.html">
                    More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end lg of know pets --> */}
    </div>
  );
}

export default Blog;
