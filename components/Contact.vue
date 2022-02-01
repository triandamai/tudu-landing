<template>
  <section class="contact-one">
    <img
      src="/assets/images/shapes/contact-bg-shape-1-1.png"
      class="contact-one__bg-shape-1"
      alt=""
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <form action="#" class="contact-form-validated contact-one__form">
            <div class="block-title">
              <p>Contact Now</p>
              <h3>
                Have Question? Write <br />
                a Message
              </h3>
            </div>
            <!-- /.block-title -->
            <div class="row">
              <div class="col-lg-6">
                <input type="text" placeholder="Name" name="name" />
              </div>
              <!-- /.col-lg-6 -->
              <div class="col-lg-6">
                <input type="text" placeholder="Email Address" name="email" />
              </div>
              <!-- /.col-lg-6 -->
              <div class="col-lg-6">
                <input type="text" placeholder="Subject" name="subject" />
              </div>
              <!-- /.col-lg-6 -->
              <div class="col-lg-6">
                <select name="services">
                  <option value="">Discussion For</option>
                  <option value="Pricing Query">Pricing Query</option>
                  <option value="Free Trial">Free Trial</option></select
                ><!-- /#.selectpicker -->
              </div>
              <!-- /.col-lg-6 -->
              <div class="col-lg-12">
                <textarea placeholder="Write Message" name="message"></textarea>
              </div>
              <!-- /.col-lg-12 -->
              <div class="col-lg-12 text-left">
                <button type="submit" class="thm-btn contact-one__btn">
                  <span>Send Message</span>
                </button>
                <!-- /.thm-btn contact-one__btn -->
              </div>
              <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
          </form>
          <!-- /.contact-one__form -->
          <div class="result"></div>
          <!-- /.result -->
        </div>
        <!-- /.col-lg-7 -->
        <div class="col-lg-5 d-flex wow fadeInRight" data-wow-duration="1500ms">
          <div class="my-auto">
            <div class="contact-one__image">
              <img src="/assets/images/resources/contact-1-1.jpg" alt="" />
            </div>
            <!-- /.contact-one__image -->
          </div>
          <!-- /.my-auto -->
        </div>
        <!-- /.col-lg-5 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped></style>
