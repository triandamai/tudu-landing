<template>

  <section class="page-header">
    <div class="container">
      <h2>{{ title }}</h2>
      <ul class="list-unstyled thm-breadcrumb">
        <li class="home-bread"><nuxt-link to="/">Home</nuxt-link></li>
        <li><span>{{ title }}</span></li>
      </ul><!-- /.list-unstyled -->
    </div><!-- /.container -->
  </section>

</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String
      }
    }

  }
</script>

<style scoped>

</style>
