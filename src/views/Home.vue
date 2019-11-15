<template>
  <div class="home">
    <Navbar />
    <Article />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Article from "@/components/Article.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Article,
    Footer
  }
};
</script>
