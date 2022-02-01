<template>
  <div>
  <footer class="site-footer">
    <div class="site-footer__upper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="footer-widget footer-widget__about">
              <a href="/">
                <img src="/assets/images/logo-1-1.png" width="129" alt="">
              </a>
              <p>Lorem Ipsum is simply dummy text the <br> printing and setting industry. Lorm Ipsum
                <br> has been the text ever.</p>
            </div><!-- /.footer-widget -->
          </div><!-- /.col-lg-4 -->

          <div class="col-lg-5">
            <div class="footer-widget__links-wrap">
              <div class="footer-widget">
                <h3 class="footer-widget__title">Company</h3>
                <ul class="list-unstyled footer-widget__links-list">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Services</a></li>
                </ul><!-- /.list-unstyled footer-widget__links-list -->
              </div><!-- /.footer-widget -->
              <div class="footer-widget">
                <h3 class="footer-widget__title">Explore</h3>
                <ul class="list-unstyled footer-widget__links-list">
                  <li><a href="#">News</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Download</a></li>
                  <li><a href="#">Free Trial</a></li>
                </ul><!-- /.list-unstyled footer-widget__links-list -->
              </div><!-- /.footer-widget -->
              <div class="footer-widget">
                <h3 class="footer-widget__title">Links</h3>
                <ul class="list-unstyled footer-widget__links-list">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Services</a></li>
                </ul><!-- /.list-unstyled footer-widget__links-list -->
              </div><!-- /.footer-widget -->
            </div><!-- /.footer-widget__links-wrap -->
          </div><!-- /.col-lg-5 -->
          <div
            class="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
            <div class="footer-widget">
              <div class="footer-widget__social">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </div><!-- /.footer-widget__social -->
            </div><!-- /.footer-widget -->
          </div><!-- /.col-lg-3 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.site-footer__upper -->
    <div class="site-footer__bottom">
      <div class="container text-center">
        <p>© copyright 2020 by <a href="https://trian.app" target="_blank">trian.app</a></p>
      </div><!-- /.container -->
    </div><!-- /.site-footer__bottom -->
  </footer>

      <a @click="scrollTop" class="scroll-to-target scroll-to-top" :style="`display: ${scrollBtn ? 'inline' : 'none'}`" href="#"><i class="fa fa-angle-up"></i></a>


  </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
