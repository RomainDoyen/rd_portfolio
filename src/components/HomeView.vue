<template>
    <div class="home--vue">
      <header>
        <div class="head-motion">
          <img id="head-ban" src="../assets/header.webp" alt="header"/>
        </div>
        <div class="head">
          <img class="logo" src="../assets/rd.webp" alt="logo"/>
          <h1>{{ msg }}</h1>
          <p>{{ msgp }}</p>
        </div>
        <div class="sous-articles" ref="boxArticles">
          <a href="/files/romain-doyen-cv.pdf" download="romain-doyen-cv.pdf" aria-label="CV"><i class="fa-regular fa-file-pdf"></i>&nbsp; {{ post.cv }}</a>
          <a href="https://github.com/RomainDoyen" target="_blank" aria-label="Profile Github"><i class="fa-brands fa-github"></i>&nbsp; Mon Github</a>
        </div>
      </header>
  
      <div :class="{ 'motion_menu': true, scrolled: scrolled }">
          <div class="menu">
              <ul>
                  <li><a href="#competence" aria-label="Compétences"><i class="fa-solid fa-code"></i>&nbsp; Compétences</a></li>
                  <li><a href="#portfolio" aria-label="Portfolio"><i class="fa-solid fa-book"></i>&nbsp; Portfolio</a></li>
                  <li><a href="#apropos" aria-label="À propos"><i class="fa-solid fa-house"></i>&nbsp; À propos</a></li>
                  <li><a href="#contactme" aria-label="Contact"><i class="fa-solid fa-phone"></i>&nbsp; Contact</a></li>
              </ul>
          </div>
      </div>

      <!-- <div class="sous-articles top">
        <div class="contact-social">
          <a target="_blank" href="https://www.facebook.com/designandcreation39/" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a target="_blank" href="https://github.com/RomainDoyen/" aria-label="Github"><i class="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://www.instagram.com/designandcreation_rd/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/romain-doyen/" aria-label="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div> -->
  
      <skills-vue msg="Compétences" />
      <portfolio-vue msg="Portfolio"/>
      <intro-vue msg="À propos"/>
      <contact-vue msg="Contactez-moi !"/>
    </div>
</template>

<script>
import IntroVue from "../pages/IntroView.vue";
import SkillsVue from "../pages/SkillsView.vue";
import PortfolioVue from "../pages/PortfolioView.vue";
import ContactVue from "../pages/ContactView.vue";

export default {
  name: "HomeVue",
  props: {
    msg: String,
    msgp: String,
  },
  components: {
    IntroVue,
    SkillsVue,
    PortfolioVue,
    ContactVue,
  },
  data() {
    return {
      scrolled: false,
      post: {
        cv: "Télécharger mon CV",
      },
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 470) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
