<template>
  <div>
    <NavTwo />
    <PageHeader title="News" />
    <Blog />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import PageHeader from "../components/PageHeader";
  import Blog from "../components/Blog";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, Blog, PageHeader, NavTwo},
    head(){
      return {
        title: "Apiton | Blog"
      }
    }
  }
</script>
