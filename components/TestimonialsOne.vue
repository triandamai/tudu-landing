<template>
  <section class="testimonials-style-one">
    <img
      src="~/assets/images/map-1-1.png"
      alt="Awesome Image"
      class="map-img"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div class="my-auto">
            <!-- <img src="~/assets/images/testi-1-1.png" alt="Awesome Image" class="testi-img" /> -->
            <div id="testimonials-slider-pager">
              <div class="testimonials-slider-pager-one">
                <a href="#" class="pager-item active" data-slide-index="0"
                  ><img src="~/assets/images/testi-1-1.jpg" alt="Awesome Image"
                /></a>
                <a href="#" class="pager-item" data-slide-index="1"
                  ><img src="~/assets/images/testi-1-2.jpg" alt="Awesome Image"
                /></a>
                <a href="#" class="pager-item" data-slide-index="2"
                  ><img src="~/assets/images/testi-1-3.jpg" alt="Awesome Image"
                /></a>
                <a href="#" class="pager-item" data-slide-index="3"
                  ><img src="~/assets/images/testi-1-4.jpg" alt="Awesome Image"
                /></a>
                <a href="#" class="pager-item" data-slide-index="4"
                  ><img src="~/assets/images/testi-1-5.jpg" alt="Awesome Image"
                /></a>
                <a href="#" class="pager-item" data-slide-index="5"
                  ><img src="~/assets/images/testi-1-6.jpg" alt="Awesome Image"
                /></a>
              </div>
              <!-- /.testimonials-slider-pager-one -->
              <div class="testimonials-slider-pager-two">
                <swiper
                  class="swiper gallery-thumbs"
                  :options="swiperOptionThumbs"
                  ref="swiperThumbs"
                >
                  <swiper-slide>
                    <div class="pager-item" data-slide-index="0">
                      <img
                        src="~/assets/images/testi-1-1.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="pager-item" data-slide-index="1">
                      <img
                        src="~/assets/images/testi-1-2.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="pager-item" data-slide-index="2">
                      <img
                        src="~/assets/images/testi-1-3.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="pager-item" data-slide-index="3">
                      <img
                        src="~/assets/images/testi-1-4.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="pager-item" data-slide-index="4">
                      <img
                        src="~/assets/images/testi-1-5.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="pager-item" data-slide-index="5">
                      <img
                        src="~/assets/images/testi-1-6.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <!-- /.testimonials-slider-pager-two -->
            </div>
            <!-- /#testimonials-slider-pager -->
          </div>
          <!-- /.my-auto -->
        </div>
        <!-- /.col-lg-6 -->
        <div class="col-lg-6">
          <div class="block-title">
            <img
              src="~/assets/images/round-circle-1-6.png"
              alt="Awesome Image"
              class="wow rotateIn"
              data-wow-duration="1000ms"
            />
            <h2>
              What’s our clients are <br />
              saying.
            </h2>
          </div>
          <!-- /.block-title -->
          <ul class="slider testimonials-slider list-unstyled">
            <swiper
              class="swiper gallery-top"
              :options="swiperOptionTop"
              ref="swiperTop"
            >
              <swiper-slide>
                <li class="slide-item">
                  <div class="single-testi-one">
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <h3>Delila Rayam</h3>
                  </div>
                  <!-- /.single-testi-one -->
                </li>
              </swiper-slide>
              <swiper-slide>
                <li class="slide-item">
                  <div class="single-testi-one">
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <h3>Terrilyn Werme</h3>
                  </div>
                  <!-- /.single-testi-one -->
                </li>
              </swiper-slide>
              <swiper-slide>
                <li class="slide-item">
                  <div class="single-testi-one">
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <h3>Kyle Demayo</h3>
                  </div>
                  <!-- /.single-testi-one -->
                </li>
              </swiper-slide>
              <swiper-slide>
                <li class="slide-item">
                  <div class="single-testi-one">
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <h3>Minta Hadad</h3>
                  </div>
                  <!-- /.single-testi-one -->
                </li>
              </swiper-slide>
              <swiper-slide>
                <li class="slide-item">
                  <div class="single-testi-one">
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <h3>Sherman Cibrian</h3>
                  </div>
                  <!-- /.single-testi-one -->
                </li>
              </swiper-slide>
              <swiper-slide>
                <li class="slide-item">
                  <div class="single-testi-one">
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <h3>Adrianne Hagans</h3>
                  </div>
                  <!-- /.single-testi-one -->
                </li>
              </swiper-slide>
            </swiper>
          </ul>
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.testimonials-style-one -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        slidesPerView: 1,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        slidesPerView: 1,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>
