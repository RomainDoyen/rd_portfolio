<template>
    <div class="articles">
      <h2> 👨🏽‍🎓 {{ msg }}</h2>
      <div v-for="(post, i) in posts" :key="i">
          <div class="sous-articles">
            <div class="box-article" ref="boxArticles">
              <p class="gh">{{ post.articles }}</p>
            </div>
          </div>
        <scroll-animation></scroll-animation>
        <div class="sous-articles" ref="boxArticles">
          <a href="/files/romain-doyen-cv.pdf" download="romain-doyen-cv.pdf" aria-label="CV"><i class="fa-regular fa-file-pdf"></i>&nbsp; {{ post.cv }}</a>
          <a href="https://github.com/RomainDoyen" target="_blank" aria-label="Profile Github"><i class="fa-brands fa-github"></i>&nbsp; Mon Github</a>
        </div>
      </div>
    </div>
</template>
  
<!--<script>
  import ScrollAnimation from "../components/ScrollAnimation.vue";
  import gsap from "gsap";
  
  export default {
    components: {
      ScrollAnimation,
    },
    mounted() {
      const homeAnim = this.$refs.homeAnim;
      gsap.to(homeAnim, { duration: 1, y: 0, opacity: 1, delay: 0.3 });
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
</script> -->

<script>
import ScrollAnimation from "../components/ScrollAnimation.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    ScrollAnimation,
  },
  mounted() {
    this.$nextTick(() => {
      this.animateBoxes(); // Call the animation function when the component is mounted
    });
  },
  methods: {
    animateBoxes() {
      const boxes = this.$refs.boxArticles; // Use a more descriptive name for the reference
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            repeat: 0,
            scrollTrigger: {
              trigger: box,
              start: "top 80%", // Adjust the trigger point based on your needs
            },
          }
        );
      });
    },
  },
  name: "IntroVue",
  props: {
    msg: String,
  },
  data: () => ({
    posts: [
      {
        articles:
          "Étudiant en Informatique et passionné par les domaines du développements (web front-end, design UI / UX, mobile) et de la maintenance informatique.",
        cv: "Télécharger mon CV",
      },
      // Add more post objects if needed
    ],
  }),
};
</script>
