<template>
  <section class="brand-style-one">
    <div class="container">
      <div class="brand-carousel-one">
        <swiper :options="swiperOptions">
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
          <swiper-slide>
            <div class="item">
              <img src="~/assets/images/brand-1-1.png" alt="Awesome Image" />
            </div>
          </swiper-slide>
          <!-- /.item -->
        </swiper>
      </div>
      <!-- /.brand-carousel-one -->
      <hr class="style-one" />
    </div>
    <!-- /.container -->
  </section>
  <!-- /.brand-style-one -->
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Brands",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },

        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
};
</script>
