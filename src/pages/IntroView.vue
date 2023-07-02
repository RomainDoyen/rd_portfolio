<template>
    <div class="articles">
      <h2> 👨🏽‍🎓 {{ msg }}</h2>
      <div v-for="(post, i) in posts" :key="i">
          <div class="sous-articles">
            <div class="box-article">
              <p class="gh">{{ post.articles }}</p>
            </div>
          </div>
        <scroll-animation></scroll-animation>
        <div class="sous-articles">
          <a href="/files/romain-doyen-cv.pdf" download="romain-doyen-cv.pdf"><i class="fa-regular fa-file-pdf"></i>&nbsp; {{ post.cv }}</a>
          <a href="https://github.com/RomainDoyen" target="_blank"><i class="fa-brands fa-github"></i>&nbsp; Mon Github</a>
        </div>
      </div>
    </div>
</template>
  
<script>
  import ScrollAnimation from "../components/ScrollAnimation.vue";
  
  export default {
    components: {
      ScrollAnimation,
    },
    name: "IntroVue",
    props: {
      msg: String
    },
    data: () => ({
      posts: [
        {
          articles: "Étudiant en Informatique et passionné par les domaines du développements (web front-end, design UI / UX, mobile) et de la maintenance informatique.",
          cv: "Télécharger mon CV",
        },
      ],
    }),
  };
</script>