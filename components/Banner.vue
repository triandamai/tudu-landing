<template>
  <section class="banner-one" id="home">
    <img
      src="/assets/images/shapes/banner-shape-1-1.png"
      class="banner-one__bg-shape-1"
      alt=""
    />
    <div
      class="banner-one__bg"
      style="
        background-image: url(/assets/images/resources/banner-image-1-1.jpg);
      "
    ></div>
    <!-- /.banner-one__bg -->
    <div class="container">
      <a
        href="https://www.youtube.com/watch?v=Kl5B6MBAntI"
        class="banner-one__video video-popup"
        ><i class="fa fa-play"></i></a
      ><!-- /.banner-one__video -->
      <div class="banner-one__moc">
        <img
          src="/assets/images/resources/banner-moc-1-1.png"
          class="wow fadeInUp"
          data-wow-duration="1500ms"
          alt=""
        />
      </div>
      <!-- /.banner-one__moc -->
      <div class="row">
        <div class="col-lg-7">
          <div class="banner-one__content">
            <form
              class="banner-one__mc-form mc-form"
              data-url="MAILCHIMP__POPUP__FORM__URL"
            >
              <input type="text" name="email" placeholder="Email address" />
              <button type="submit" class="thm-btn banner-one__mc-btn">
                <span>Free Trial</span></button
              ><!-- /.thm-btn banner-one__mc-btn -->
            </form>
            <div class="mc-form__response"></div>
            <!-- /.mc-form__response -->
            <h3>
              Manage Your <br />
              Project with <br />
              Application
            </h3>
            <p>
              Nulla facilisi. Proin felis neque, suscipit egestas erat a <br />
              tincidunt finibus magna consectetur lacus.
            </p>
            <a href="#" class="thm-btn banner-one__btn"
              ><span>Discover More</span></a
            >
            <!-- /.thm-btn banner-one__btn -->
          </div>
          <!-- /.banner-one__content -->
        </div>
        <!-- /.col-lg-7 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "Banner",
  mounted() {
    // MediaBox('.mediabox', { rel: '0' });
    new GLightbox({
      selector: ".video-popup",
      touchNavigation: false,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped></style>
