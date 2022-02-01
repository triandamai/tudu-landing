<template>
  <section class="video-one">
    <div
      class="container-fluid"
      style="background-image: url(/assets/images/resources/video-bg-1-1.jpg)"
    >
      <div class="video-one__content wow fadeInLeft" data-wow-duration="1500ms">
        <div class="block-title">
          <p>Video Tutorial</p>
          <h3>
            Watch Now <br />
            Our Video <br />
            Tutorial
          </h3>
        </div>
        <!-- /.block-title -->
      </div>
      <!-- /.video-one__content -->
      <a
        href="https://www.youtube.com/watch?v=4XCsFEzCC7U"
        class="video-one__btn video-popup-two"
        ><i class="fa fa-play"></i></a
      ><!-- /.video-one__btn video-popup -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "Video",
  mounted() {
    // MediaBox('.mediabox', { rel: '0' });
    new GLightbox({
      selector: ".video-popup-two",
      touchNavigation: false,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped></style>
