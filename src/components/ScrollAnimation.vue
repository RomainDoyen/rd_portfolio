<template>
    <div class="scroll-animation" :class="{ 'fade-in-up': visible }"></div>
</template>
  
<script>
  export default {
      data() {
          return {
              visible: false
          }
      },
      mounted() {
          window.addEventListener('scroll', this.handleScroll);
      },
      methods: {
          handleScroll() {
              if (window.pageYOffset > 100) {
                  this.visible = true;
                  window.removeEventListener('scroll', this.handleScroll);
              }
          }
      }
  }
</script>