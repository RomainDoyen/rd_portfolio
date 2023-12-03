<template>
    <div class="articles">
      <h2 id="competence">{{ msg }}</h2>
      <div class="skills-bar" ref="boxArticles">
        <div class="bar" v-for="(skill, i) in skillsset" :key="i">
          <table>
            <tbody>
              <tr>
                <th scope="col">{{ skill.title }}</th>
              </tr>
              <tr v-for="(tech, j) in skill.tech" :key="j">
                <td><img v-bind:src="getImageUrl(tech.icon)" alt="techno" /></td>
                <td>{{ tech.title }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, onSnapshot, getDocs } from 'firebase/firestore';
import { storage } from '../utils/firebase.config.js';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'SkillsVue',
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.animateBoxes(); // Call the animation function when the component is mounted
    });
  },
  setup() {
    const skillsset = ref([]);

    onMounted(async () => {
      const db = getFirestore();
      const skillsCollection = collection(db, 'skillsset');

      const snapshot = await getDocs(skillsCollection);
      const skillsPromises = snapshot.docs.map(async (doc) => {
        const skillData = doc.data();
        const techCollection = collection(doc.ref, 'tech');
        const techSnapshot = await getDocs(techCollection);
        const techData = techSnapshot.docs.map((techDoc) => techDoc.data());
        return { ...skillData, tech: techData };
      });

      skillsset.value = await Promise.all(skillsPromises);
      // console.log("SkillsSet Data :");
      // console.log(skillsset.value);
    });

    const getImageUrl = (name) => {
      return new URL(`../assets/${name}`, import.meta.url).href;
    };

    // debugger

    return { skillsset, getImageUrl };
  },
  methods: {
    animateBoxes() {
      const boxArticles = this.$refs.boxArticles; // Référence à l'élément DOM
      
      // Utilise querySelectorAll pour sélectionner tous les éléments internes
      const boxes = boxArticles.querySelectorAll('.skills-bar');

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
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
            },
          }
        );
      });
    },
  },
};
</script>