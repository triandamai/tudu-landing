<template>
  <div>
    <NavTwo />
    <PageHeader title="News Details" />
    <BlogDetails />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import PageHeader from "../components/PageHeader";
  import BlogDetails from "../components/BlogDetails";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, BlogDetails, PageHeader, NavTwo},
    head(){
      return {
        title: "Apiton | News Details"
      }
    }
  }
</script>
