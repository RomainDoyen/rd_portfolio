<template>
    <div class="articles">
      <h2 id="portfolio"> 📸 {{ msg }}</h2>
          <div class="cot">
            <div class="box-article art" v-for="projet in projets" :key="projet.id">
              <h3>{{ projet.title }}</h3>
              <h4>{{ projet.description }}</h4>
              <p>Technologie utilisé : <span class="techno">{{ projet.techno }}</span></p>
              <!-- <img :src="require(`../assets/${projet.img}`)" alt="projet"> -->
              <img :src="getImageUrl(projet.img)" alt="projet">
              <div v-if="projet?.link" class="link">
                <a class="link-projet" target="_blank" :href="projet.link">Voir le projet</a>
              </div>
            </div>
          </div>
        <div class="sous-articles">
          <a href="https://github.com/RomainDoyen" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>&nbsp; Mon Github</a>
        </div>
    </div>
</template>
  
<script>
  export default {
      name: "PortfolioVue",
      props: {
          msg: String
      },
      setup() {
        const getImageUrl = (name) => {
            return new URL(`../assets/${name}`, import.meta.url).href
        }
        return { getImageUrl }
      },
      data: () => ({
        projets: [
          {
            id: '0',
            title: '🎨 Design And Creation',
            description: 'Portfolio de dessins et logo',
            techno: 'React JS, Firebase',
            img: 'dac.webp',
            link: 'https://designandcreation.vercel.app/'
          },
          {   
            id: '1',
            title: '🍔 Dodo Cuisto (Application mobile)',
            description: 'Application de recette créole',
            techno: 'Java, XML, SQLite',
            img: 'dc.webp',
            link: 'https://github.com/RomainDoyen/DodoCuistoAndroid'
          },
          {
            id: '2',
            title: '☀️ Weather App (version Web)',
            description: 'Obtenir la météo par le biais d\'une API',
            techno: 'Vue JS, OpenWeatherMap',
            img: 'weather-app.png',
            link: 'https://times-app.netlify.app/'
          },
          {
            id: '3',
            title: '☀️ Weather App (version Mobile)',
            description: 'Obtenir la météo par le biais d\'une API',
            techno: 'React Native, OpenWeatherMap',
            img: 'weather-app-phone.png',
          },
          {
            id: '4',
            title: '💫 Astrologie 23',
            description: 'Projet réaliser dans le cadre scolaire',
            techno: 'HTML, CSS, JS, JQUERY',
            img: 'astrologie23.png',
            link: 'https://vingt-trois.netlify.app/'
          },
        ],
    }),
  };
</script>