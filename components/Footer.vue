<template>
  <div>
    <footer class="site-footer">
      <span class="bubble-1"></span>
      <span class="bubble-2"></span>
      <span class="bubble-3"></span>
      <span class="bubble-4"></span>
      <span class="bubble-5"></span>
      <span class="bubble-6"></span>
      <div class="container">
        <div class="inner-container">
          <div class="row">
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="footer-widget">
                <a href="index.html"
                  ><img 
                  src="~/assets/images/logo.png"
                  width="100"
                   alt="Awesome Image"
                /></a>
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-2 -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <div class="widget-title">
                  <h3>Address</h3>
                </div>
                <!-- /.widget-title -->
                <ul class="contact-list">
                  <li>tudu@trian.app</li>
            
                </ul>
                <!-- /.contact-list -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-3 -->
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="footer-widget">
                <div class="widget-title">
                  <h3>Explore</h3>
                </div>
                <!-- /.widget-title -->
                <ul class="links-list">
                
                  <li><a href="#">Features</a></li>
                
                </ul>
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-2 -->
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="footer-widget">
                <div class="widget-title">
                  <h3>Links</h3>
                </div>
                <!-- /.widget-title -->
                <ul class="links-list">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">privacy Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-2 -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <div class="widget-title">
                  <h3>Follow</h3>
                </div>
                <!-- /.widget-title -->
                <div class="social-block">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook-f"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </div>
                <!-- /.social-block -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-3 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.inner-container -->
      </div>
      <!-- /.container -->
    </footer>
    <!-- /.site-footer -->
    <div class="bottom-footer text-center">
      <div class="container">
        <p>&copy; copyright 2022 by <a href="https://trian.app">trian.app</a></p>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.bottom-footer -->
    <div v-if="sticky">
      <scrollactive>
        <a
          href="#wrapper"
          data-target="html"
          class="scroll-to-target scroll-to-top scrollactive-item"
          ><i class="fa fa-long-arrow-up"></i
        ></a>
      </scrollactive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      sticky: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
  },
};
</script>
