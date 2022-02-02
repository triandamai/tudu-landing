<template>
  <section class="fun-fact-style-one" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <h3 class="title-line">Numbers Speaks Everything</h3>
      <!-- /.title-line -->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-funfact-one text-center">
            <h3 class="counter">
              <countTo
                :startVal="0"
                :endVal="startCounter ? 4789 : 0"
                :duration="3000"
              ></countTo>
            </h3>
            <p>Downloads</p>
          </div>
          <!-- /.single-funfact-one -->
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-funfact-one text-center">
            <h3 class="counter">
              <countTo
                :startVal="0"
                :endVal="startCounter ? 6400 : 0"
                :duration="3000"
              ></countTo>
            </h3>
            <p>Likes</p>
          </div>
          <!-- /.single-funfact-one -->
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-funfact-one text-center">
            <h3 class="counter">
              <countTo
                :startVal="0"
                :endVal="startCounter ? 900 : 0"
                :duration="3000"
              ></countTo>
            </h3>
            <p>5 Star Rating</p>
          </div>
          <!-- /.single-funfact-one -->
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-funfact-one text-center">
            <h3 class="counter">
              <countTo
                :startVal="0"
                :endVal="startCounter ? 266 : 0"
                :duration="3000"
              ></countTo>
            </h3>
            <p>Awards</p>
          </div>
          <!-- /.single-funfact-one -->
        </div>
        <!-- /.col-lg-3 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.fun-fact-style-one -->
</template>

<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";

export default {
  name: "FunfactOne",
  components: { countTo },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      startCounter: false,
    };
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    },
  },
};
</script>
