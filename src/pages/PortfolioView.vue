<template>
  <div class="articles">
    <h2 id="portfolio">{{ msg }}</h2>
    <div class="cot" ref="boxArticles">
      <div class="box-article art" v-for="projet in projets" :key="projet.id">
        <div v-if="projet?.link" class="link">
          <a class="link-projet" target="_blank" :href="projet.link" aria-label="Lien vers le site du projet"
            v-tooltip="'Voir le site'"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div v-if="projet?.link_code" class="link">
          <a class="link-projet" target="_blank" :href="projet.link_code" aria-label="Lien vers le code source"
            v-tooltip="'Voir le code'"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <h3>{{ projet.title }}</h3>
        <h4>{{ projet.description }}</h4>
        <video v-if="projet.video" :src="getImageUrl(projet.video)" controls width="500"></video>
        <img v-if="projet.img" :src="getImageUrl(projet.img)" alt="projet" @click="openModal(projet)" />
        <div class="techno">
          <span class="tags" v-for="tech in projet?.tech" :key="tech.id"># {{ tech.name }}</span>
        </div>
      </div>
    </div>
    <Modal
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      :imageSrc="currentImage"
      :title="currentTitle"
      :description="currentDescription"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Modal from '../components/Modal.vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'floating-vue/dist/style.css';

export default {
  name: 'PortfolioVue',
  components: {
    Modal,
  },
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.animateBoxes();
    });
  },
  setup() {
    const projets = ref([]);
    const isModalOpen = ref(false);
    const currentImage = ref('');
    const currentTitle = ref('');
    const currentDescription = ref('');

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
    });

    const getImageUrl = (name) => {
      return new URL(`../assets/${name}`, import.meta.url).href;
    };

    const openModal = (projet) => {
      currentImage.value = getImageUrl(projet.img);
      currentTitle.value = projet.title;
      currentDescription.value = projet.description;
      isModalOpen.value = true;
    };

    return { 
      projets, 
      getImageUrl, 
      isModalOpen, 
      openModal, 
      currentImage, 
      currentTitle, 
      currentDescription, 
    };
  },
  methods: {
    animateBoxes() {
      const boxArticles = this.$refs.boxArticles;
      const boxes = boxArticles.querySelectorAll('.cot');
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
