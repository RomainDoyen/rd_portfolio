<template>
    <div class="articles">
      <h2 id="competence">👨🏻‍💻 {{ msg }}</h2>
      <div class="skills-bar">
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

export default {
  name: 'SkillsVue',
  props: {
    msg: String
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
  }
};
</script>