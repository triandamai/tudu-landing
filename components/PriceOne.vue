<template>
  <section class="pricing-style-one" id="pricing">
    <div class="container">
      <div class="block-title text-center">
        <img
          src="~/assets/images/round-circle-1-4.png"
          alt="Awesome Image"
          class="wow rotateIn"
          data-wow-duration="1000ms"
        />
        <h2>
          Choose plans which suits <br />
          your needs.
        </h2>
      </div>
      <!-- /.block-title -->
      <ul class="nav nav-tabs tab-title" role="tablist">
        <li class="nav-item">
          <a
            :class="`nav-link ${activeState === 'month' ? 'active' : ''}`"
            href="#monthly"
            role="tab"
            data-toggle="tab"
            @click="
              (e) => {
                e.preventDefault();
                activeState = 'month';
              }
            "
            >Monthly</a
          >
        </li>
        <li class="nav-item">
          <a
            :class="`nav-link ${activeState === 'year' ? 'active' : ''}`"
            @click="
              (e) => {
                e.preventDefault();
                activeState = 'year';
              }
            "
            href="#yearly"
            role="tab"
            data-toggle="tab"
            >Yearly</a
          >
        </li>
      </ul>
      <div class="tab-content">
        <div v-if="activeState == 'month'">
          <div
            role="tabpanel"
            class="tab-pane show active animated fadeInUp"
            id="monthly"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-pricing-one basic-pack">
                  <div class="top-block">
                    <span class="price">$20.00</span>
                    <span class="pack-name">basic pack</span>
                    <div class="line"></div>
                    <!-- /.line -->
                  </div>
                  <!-- /.top-block -->
                  <ul class="feature-lists">
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                  </ul>
                  <!-- /.feature-lists -->
                  <div class="bottom-block">
                    <a href="#" class="price-btn">Purchase</a>
                    <span class="tag-line">No hidden charges!</span>
                  </div>
                  <!-- /.bottom-block -->
                </div>
                <!-- /.single-pricing-one -->
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-pricing-one pro-pack">
                  <div class="top-block">
                    <span class="price">$30.00</span>
                    <span class="pack-name">Professional pack</span>
                    <div class="line"></div>
                    <!-- /.line -->
                  </div>
                  <!-- /.top-block -->
                  <ul class="feature-lists">
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                  </ul>
                  <!-- /.feature-lists -->
                  <div class="bottom-block">
                    <a href="#" class="price-btn">Purchase</a>
                    <span class="tag-line">No hidden charges!</span>
                  </div>
                  <!-- /.bottom-block -->
                </div>
                <!-- /.single-pricing-one -->
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-pricing-one biz-pack">
                  <div class="top-block">
                    <span class="price">$40.00</span>
                    <span class="pack-name">Business pack</span>
                    <div class="line"></div>
                    <!-- /.line -->
                  </div>
                  <!-- /.top-block -->
                  <ul class="feature-lists">
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                  </ul>
                  <!-- /.feature-lists -->
                  <div class="bottom-block">
                    <a href="#" class="price-btn">Purchase</a>
                    <span class="tag-line">No hidden charges!</span>
                  </div>
                  <!-- /.bottom-block -->
                </div>
                <!-- /.single-pricing-one -->
              </div>
              <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.tab-pane -->
        </div>
        <div v-if="activeState == 'year'">
          <div
            role="tabpanel"
            class="tab-pane show animated fadeInUp"
            id="yearly"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-pricing-one basic-pack">
                  <div class="top-block">
                    <span class="price">$20.00</span>
                    <span class="pack-name">basic pack</span>
                    <div class="line"></div>
                    <!-- /.line -->
                  </div>
                  <!-- /.top-block -->
                  <ul class="feature-lists">
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                  </ul>
                  <!-- /.feature-lists -->
                  <div class="bottom-block">
                    <a href="#" class="price-btn">Purchase</a>
                    <span class="tag-line">No hidden charges!</span>
                  </div>
                  <!-- /.bottom-block -->
                </div>
                <!-- /.single-pricing-one -->
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-pricing-one pro-pack">
                  <div class="top-block">
                    <span class="price">$30.00</span>
                    <span class="pack-name">Professional pack</span>
                    <div class="line"></div>
                    <!-- /.line -->
                  </div>
                  <!-- /.top-block -->
                  <ul class="feature-lists">
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                  </ul>
                  <!-- /.feature-lists -->
                  <div class="bottom-block">
                    <a href="#" class="price-btn">Purchase</a>
                    <span class="tag-line">No hidden charges!</span>
                  </div>
                  <!-- /.bottom-block -->
                </div>
                <!-- /.single-pricing-one -->
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-pricing-one biz-pack">
                  <div class="top-block">
                    <span class="price">$40.00</span>
                    <span class="pack-name">Business pack</span>
                    <div class="line"></div>
                    <!-- /.line -->
                  </div>
                  <!-- /.top-block -->
                  <ul class="feature-lists">
                    <li>Extra features</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>Full access</li>
                  </ul>
                  <!-- /.feature-lists -->
                  <div class="bottom-block">
                    <a href="#" class="price-btn">Purchase</a>
                    <span class="tag-line">No hidden charges!</span>
                  </div>
                  <!-- /.bottom-block -->
                </div>
                <!-- /.single-pricing-one -->
              </div>
              <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.tab-pane -->
        </div>
      </div>
      <!-- /.tab-content -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.pricing-style-one -->
</template>

<script>
export default {
  data() {
    return {
      activeState: "month",
    };
  },
};
</script>
