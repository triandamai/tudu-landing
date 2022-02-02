<template>
  <section class="inner-banner">
    <div class="container">
      <ul class="thm-breadcrumb">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><span class="sep">.</span></li>
        <li>
          <span class="page-title">{{ pageName }}</span>
        </li>
      </ul>
      <!-- /.thm-breadcrumb -->
      <h2>{{ title }}</h2>
    </div>
    <!-- /.container -->
  </section>
  <!-- /.inner-banner -->
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    pageName: {
      type: String,
    },
  },
};
</script>
