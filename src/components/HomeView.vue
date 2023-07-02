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
      </header>
  
      <div class="motion_menu">
          <div class="menu">
              <ul>
                  <li><a href="#home"><i class="fa-solid fa-house"></i>&nbsp; Acceuil</a></li>
                  <li><a href="#competence"><i class="fa-solid fa-code"></i>&nbsp; Compétences</a></li>
                  <li><a href="#portfolio"><i class="fa-solid fa-book"></i>&nbsp; Portfolio</a></li>
              </ul>
          </div>
      </div>
  
      <intro-vue msg="Étudiant en informatique"/>
      <skills-vue msg="Compétences" />
      <portfolio-vue msg="Portfolio"/>
    </div>
</template>

<script>
import IntroVue from "../pages/IntroView.vue";
import SkillsVue from "../pages/SkillsView.vue";
import PortfolioVue from "../pages/PortfolioView.vue";

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
  },
};
</script>
