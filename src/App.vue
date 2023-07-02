<script>
import HomeView from './components/HomeView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    FooterView
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: { 
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<template>
  <div class="container">
    <HomeView msg="Romain Doyen" msgp="💻 Front-end"/>
    <FooterView msg="Réseaux sociaux"/>
    <button @click="scrollToTop" id="myBtn" v-show="scY > 300">
      <i class="fa-solid fa-angle-up"></i>
    </button>
  </div>
</template>