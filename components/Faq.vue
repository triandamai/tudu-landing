<template>
  <section class="faq-one">
    <img src="/assets/images/shapes/faq-bg-1-1.png" class="faq-one__bg-shape-1" alt="">
    <div class="container">
      <div class="block-title text-center">
        <p>Frequently Asked Questions</p>
        <h3>Want to Ask Something <br> From Appton?</h3>
      </div><!-- /.block-title -->
      <div class="accrodion-grp wow fadeIn" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
        <div class="accordion-container-one">
          <div class="ac">
            <h2 class="ac-q accordion__title-text" tabIndex="0">Pre and post launch mobile app marketing pitfalls to avoid</h2>
            <div class="ac-a accordion__content">
              <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                in some by inject humour or random words. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div class="ac accordion__content">
            <h2 class="ac-q accordion__title-text" tabIndex="0">Boostup your application traffic is just a step away</h2>
            <div class="ac-a">
              <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                in some by inject humour or random words. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div class="ac">
            <h2 class="ac-q accordion__title-text" tabIndex="0">How to update application new features</h2>
            <div class="ac-a accordion__content">
              <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                in some by inject humour or random words. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div class="ac">
            <h2 class="ac-q accordion__title-text" tabIndex="0">How to connect with the support to improve app experience</h2>
            <div class="ac-a accordion__content">
              <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                in some by inject humour or random words. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "Faq",
      mounted() {
        new Accordion('.accordion-container-one');
      }
    }
</script>

<style scoped>
  .ac {
    margin-top: 10px;
    padding: 10px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #ee464b;
  }

  .ac>.ac-q {
    font: bold 15px Arial, sans-serif;
    font-size: 20px;
    color: #444;
    padding: 10px 30px 10px 10px;
    margin: 0;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
    font-weight: 500;
  }

  .ac.is-active .ac-q {
    color: #ee464b !important;
  }
  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    font: 16px/1.5 Arial, sans-serif;
    color: #444;
    margin: 0;
    padding: 10px
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013';
    color: #ee464b;
  }
</style>
