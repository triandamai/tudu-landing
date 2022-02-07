<template>
  <header class="site-header header-one home-page-two">
    <nav
      :class="`navbar navbar-expand-lg navbar-light header-navigation stricky ${
        sticky ? 'stricky-fixed' : ''
      }`"
    >
      <div class="container clearfix">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="logo-box clearfix">
          <nuxt-link class="navbar-brand" to="/">
            <img 
            src="~/assets/images/logo-dark.png"
            width="100"
             alt="Awesome Image" />
          </nuxt-link>
          <button class="menu-toggler">
            <span class="fa fa-bars"></span>
          </button>
        </div>
        <!-- /.logo-box -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="main-navigation">
          <ul class="one-page-scroll-menu navigation-box">
            <li class="scrollToLink">
              <nuxt-link to="/"
                >Home
                <button class="sub-nav-toggler">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span></button
              ></nuxt-link>
            </li>
            <li class="scrollToLink">
              <nuxt-link to="#service">Features</nuxt-link>
            </li>
            <li class="scrollToLink">
              <nuxt-link to="#features">App Screens</nuxt-link>
            </li>
      
          
          </ul>
        </div>
      
      </div>
      <!-- /.container -->
    </nav>
  </header>
  <!-- /.site-header -->
</template>

<script>
import Vue from "vue";
import VueScrollactive from "vue-scrollactive";
import NuxtLogo from "./NuxtLogo.vue";
Vue.use(VueScrollactive);
export default {
  components: { NuxtLogo },
  data() {
    return {
      sticky: false,
      menuOpen: false,
      menuClose: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.menuCloseHandle();
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },

    menuCloseHandle() {
      //Close Mobile Menu
      let sideMenuCloser = document.querySelector(".menu-toggler");
      sideMenuCloser.addEventListener("click", function () {
        document.querySelector(".main-navigation").classList.toggle("showen");
      });

      let subMenuColse = document.querySelectorAll(".sub-nav-toggler");
      subMenuColse.forEach((subMenuColseBtn) => {
        subMenuColseBtn.addEventListener("click", function (event) {
          let subMenu =
            event.currentTarget.parentElement.parentElement.children[1];
          event.preventDefault();
          console.log("clicked");
          subMenu.classList.toggle("active");
        });
      });
    },
  },
};
</script>
