<template>
    <div class="articles">
      <h2 id="portfolio"> 📸 {{ msg }}</h2>
          <div class="cot">
            <div class="box-article art" v-for="projet in projets" :key="projet.id">
              <div v-if="projet?.link" class="link">
                <a class="link-projet" target="_blank" :href="projet.link" aria-label="Lien vers le site du projet">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <div v-if="projet?.link_code" class="link">
                <a class="link-projet" target="_blank" :href="projet.link_code" aria-label="Lien vers le code source">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              <h3>{{ projet.title }}</h3>
              <h4>{{ projet.description }}</h4>
              <img :src="getImageUrl(projet.img)" alt="projet" />
              <div class="techno">
                <span class="tags" v-for="tech in projet?.tech" :key="tech.id" :style="{ backgroundColor: tech.color }"># {{ tech.name }}</span>
              </div>
            </div>
          </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, onSnapshot, getDocs } from 'firebase/firestore';
import { storage } from '../utils/firebase.config.js';

export default {
  name: 'PortfolioVue',
  props: {
    msg: String
  },
  setup() {
    const projets = ref([]);

    onMounted(async () => {
      const db = getFirestore();
      const projetsCollection = collection(db, 'projets');

      const snapshot = await getDocs(projetsCollection);
      const projetPromises = snapshot.docs.map(async (doc) => {
        const projetData = doc.data();
        const techCollection = collection(doc.ref, 'tech');
        const techSnapshot = await getDocs(techCollection);
        const techData = techSnapshot.docs.map((techDoc) => techDoc.data());
        return { ...projetData, tech: techData };
      });

      projets.value = await Promise.all(projetPromises);
      // console.log("Projets Data :");
      // console.log(projets.value);
    });

    const getImageUrl = (name) => {
      return new URL(`../assets/${name}`, import.meta.url).href;
    };

    return { projets, getImageUrl };
  }
};
</script>