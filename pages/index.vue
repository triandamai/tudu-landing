<template>
  <div>
    <Nav />
    <Banner />
    <Service />
    <CallToAction />
    <FunFact />
    <CallToActionTwo />
    <Pricing />
    <Testimonial />
    <Brands />
    <Team />
    <Video />
    <Screenshots />
    <Faq />
    <BlogArea />
    <Contact />
    <CallToActionThree />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Banner from "../components/Banner";
  import Service from "../components/Service";
  import CallToAction from "../components/CallToAction";
  import FunFact from "../components/FunFact";
  import CallToActionTwo from "../components/CallToActionTwo";
  import Pricing from "../components/Pricing";
  import Testimonial from "../components/Testimonial";
  import Brands from "../components/Brands";
  import Team from "../components/Team";
  import Video from "../components/Video";
  import Screenshots from "../components/Screenshots";
  import Footer from "../components/Footer";
  import Faq from "../components/Faq";
  import BlogArea from "../components/BlogArea";
  import Contact from "../components/Contact";
  import CallToActionThree from "../components/CallToActionThree";
  import Subscribe from "../components/Subscribe";
  export default {
    components: {
      Subscribe,
      CallToActionThree,
      Contact,
      BlogArea,
      Faq,
      Footer,
      Screenshots,
      Video,
      Team,
      Brands,
      Testimonial,
      Pricing,
      CallToActionTwo,
      FunFact,
      CallToAction,
      Service,
      Banner,
      Nav

    }
  }
</script>
