<template>
  <section class="app-shot-one" id="screens">
    <div class="container-fluid">
      <div class="block-title text-center">
        <p>Application Screenshots</p>
        <h3>Checkout Our Application <br> Interface Look</h3>
      </div><!-- /.block-title -->

      <div class="app-shot-one__carousel">
        <swiper :options="swiperOptions">

          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-1.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-2.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-3.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-4.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-5.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-1.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-2.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-3.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-4.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-5.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-1.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-2.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-3.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-4.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
          <swiper-slide>
        <div class="item">
          <img src="/assets/images/app-shots/app-shot-n-1-5.png" alt="Awesome Image" />
        </div><!-- /.item -->
          </swiper-slide>
        </swiper>

      </div><!-- /.app-shot-one__carousel owl-theme owl-carousel -->
    </div><!-- /.container-fluid -->
  </section>
</template>


<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "Screenshots",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 5,
          loop: true,
          speed: 1000,
          spaceBetween : 20,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 5
            },
            768:{
              slidesPerView : 2
            },
            640:{
              slidesPerView : 2
            },
            320:{
              slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
