<template>
    <div class="home--vue">
      <header>
        <div class="head-motion">
          <img id="head-ban" src="../assets/header.webp" />
        </div>
        <div class="head">
          <img class="logo" src="../assets/rd.webp" />
          <h1>{{ msg }}</h1>
          <p>{{ msgp }}</p>
        </div>
      </header>
  
      <div class="motion_menu">
          <div class="menu">
              <ul>
                  <li><a href="#home"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;Acceuil</a></li>
                  <li><a href="#competence"><i class="fa fa-code" aria-hidden="true"></i>&nbsp;Compétences</a></li>
                  <li><a href="#portfolio"><i class="fa fa-book" aria-hidden="true"></i>&nbsp;Portfolio</a></li>
                  <li><a href="#experience"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Expériences</a></li>
                  <li><a href="#formation"><i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;Formations</a></li>
              </ul>
          </div>
      </div>
  
      <intro-vue msg="Étudiant en informatique"/>
      <skills-vue msg="Compétences" />
      <portfolio-vue msg="Portfolio"/>
      <experiments-vue msg="Expériences professionelles"/>
      <education-vue msg="Formations"/>
    </div>
</template>

<script>
import IntroVue from "../pages/IntroView.vue";
import SkillsVue from "../pages/SkillsView.vue";
import ExperimentsVue from "../pages/ExperimentsView.vue";
import EducationVue from "../pages/EducationView.vue";
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
    ExperimentsVue,
    EducationVue,
    PortfolioVue,
  },
};
</script>
