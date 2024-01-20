import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Review() {
  return (
    <>
      <section className="review mb-4 mb-md-5">
        <div className="container">
          <h2 className="text-center mb-4 mt-md-8">
            <span>
              <img src="/react-petslove/images/footprint.png" alt="before" />
            </span>
            主子推薦
            <span>
              <img src="/react-petslove/images/footprint.png" alt="" />{" "}
            </span>
          </h2>
          {/* <!-- 輪播set --> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect="fade"
            className="swiper reviewSwiper"
          >
            <div className="swiper-wrapper">
              {/* <!-- slide-1 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="row d-flex">
                  {/* <!-- review dog&cat --> */}
                  <div className="col-12 col-md-5 d-flex flex-column p-0">
                    {/* <!-- dog reviews --> */}
                    <div className="card mt-7 mb-1 mx-3 mx-md-0 my-md-0 py-md-4 ps-md-8">
                      {/* <!-- 評價 --> */}
                      <div className="card-body p-5 review-cardBody">
                        {/* <!-- 頭像 --> */}
                        <img
                          src="/react-petslove/images/review-dog.png"
                          className="text-center reviewPetPic pt-3 pb-2"
                          alt="dogImg"
                        />
                        <h5 className="card-title fs-5 mb-0">比魯・2歲</h5>
                        <div className="ratings mb-md-3">
                          <div className="empty_star">★★★★★</div>
                          <div className="full_star">★★★★★</div>
                        </div>

                        <p className="card-text">
                          自從奴才幫我買了超鮮雞肉條，潔牙我的癢癢牙齒，我每天都乖乖不亂吠，這樣才可以吃更多JC的寵食
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- -product --> */}
                  <div className="col-12 col-md-7 d-flex flex-column p-0 mb-6">
                    <div className="card pe-md-8 mt-2 text-center">
                      <a href="#" className="review-card-hover">
                        <img
                          src="/react-petslove/images/review.png"
                          className="card-img-top reviewFoodPic"
                          alt="product"
                        />
                      </a>

                      <div className="card-body">
                        <h5 className="card-title m-0">超鮮雞肉條寵食</h5>
                        <div className="w-100 text-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- slide-2 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="row d-flex">
                  {/* <!-- review dog&cat --> */}
                  <div className="col-12 col-md-5 d-flex flex-column p-0">
                    {/* <!-- dog reviews --> */}
                    <div className="card mt-7 mb-1 mx-3 mx-md-0 my-md-0 py-md-4 ps-md-8">
                      {/* <!-- 評價 --> */}
                      <div className="card-body p-5 review-cardBody">
                        {/* <!-- 頭像 --> */}
                        <img
                          src="/react-petslove/images/review-dog.png"
                          className="text-center reviewPetPic pt-3 pb-2"
                          alt="dogImg"
                        />
                        <h5 className="card-title fs-5 mb-0">比魯・2歲</h5>
                        <div className="ratings mb-md-3">
                          <div className="empty_star">★★★★★</div>
                          <div className="full_star">★★★★★</div>
                        </div>

                        <p className="card-text">
                          自從奴才幫我買了超鮮雞肉條，潔牙我的癢癢牙齒，我每天都乖乖不亂吠，這樣才可以吃更多JC的寵食
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- -product --> */}
                  <div className="col-12 col-md-7 d-flex flex-column p-0 mb-6">
                    <div className="card pe-md-8 mt-2 text-center">
                      <a href="#" className="review-card-hover">
                        <img
                          src="/react-petslove/images/review.png"
                          className="card-img-top reviewFoodPic"
                          alt="product"
                        />
                      </a>

                      <div className="card-body">
                        <h5 className="card-title m-0">超鮮雞肉條寵食</h5>
                        <div className="w-100 text-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- slide-3 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="row d-flex">
                  {/* <!-- review dog&cat --> */}
                  <div className="col-12 col-md-5 d-flex flex-column p-0">
                    {/* <!-- dog reviews --> */}
                    <div className="card mt-7 mb-1 mx-3 mx-md-0 my-md-0 py-md-4 ps-md-8">
                      {/* <!-- 評價 --> */}
                      <div className="card-body p-5 review-cardBody">
                        {/* <!-- 頭像 --> */}
                        <img
                          src="/react-petslove/images/review-dog.png"
                          className="text-center reviewPetPic pt-3 pb-2"
                          alt="dogImg"
                        />
                        <h5 className="card-title fs-5 mb-0">NiNi・2歲</h5>
                        <div className="ratings mb-md-3">
                          <div className="empty_star">★★★★★</div>
                          <div className="full_star">★★★★★</div>
                        </div>

                        <p className="card-text">
                          自從奴才幫我買了超鮮雞肉條，潔牙我的癢癢牙齒，我每天都乖乖不亂吠，這樣才可以吃更多JC的寵食
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- -product --> */}
                  <div className="col-12 col-md-7 d-flex flex-column p-0 mb-6">
                    <div className="card pe-md-8 mt-2 text-center">
                      <a href="#" className="review-card-hover">
                        <img
                          src="/react-petslove/images/review.png"
                          className="card-img-top reviewFoodPic"
                          alt="product"
                        />
                      </a>

                      <div className="card-body">
                        <h5 className="card-title m-0">超鮮雞肉條寵食</h5>
                        <div className="w-100 text-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            {/* <!-- 手機 swiper-control左右按鈕和 pagination --> */}
            <div className="swiper-control d-flex justify-content-center align-items-center ">
              <span className="material-symbols-outlined swiper-button-prev fs-md link-primary me-4">
                west
              </span>
              <div className="swiper-pagination swiper-pagination-bullets gap-2"></div>
              <span className="material-symbols-outlined swiper-button-next fs-md link-primary ms-4">
                east
              </span>
            </div>
          </Swiper>
        </div>
      </section>

      {/* <!-- -------end phone of review------- --> */}
    </>
  );
}

export default Review;
