<template>
  <section class="faq-style-one">
    <div class="container">
      <div class="block-title text-center">
        <img
          src="~/assets/images/round-circle-1-7.png"
          alt="Awesome Image"
          class="wow rotateIn"
          data-wow-duration="1000ms"
        />
        <h2>
          Want to ask something <br />
          from us?
        </h2>
      </div>
      <!-- /.block-title -->
      <div class="accrodion-grp" data-grp-name="faq-accrodion">
        <AccordionCard
          title="Pre and post launch mobile app marketing pitfalls to avoid"
          content=" There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."
          v-bind:activeState="true"
        >
        </AccordionCard>
        <AccordionCard
          title="Boostup your application traffic is just a step away"
          content=" There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."
          v-bind:activeState="false"
        >
        </AccordionCard>
        <AccordionCard
          title="How to update application new features"
          content=" There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."
          v-bind:activeState="false"
        >
        </AccordionCard>
        <AccordionCard
          title="How to connect with the support to improve app experience"
          content=" There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."
          v-bind:activeState="false"
        >
        </AccordionCard>
      </div>
    </div>
    <!-- /.container -->
  </section>
  <!-- /.faq-style-one -->
</template>

<script>
import AccordionCard from "~/components/AccordionCard";
export default {
  components: {
    AccordionCard,
  },
};
</script>
