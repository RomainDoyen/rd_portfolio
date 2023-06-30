<template>
    <div class="articles">
      <h2 id="portfolio"> 📸 {{ msg }}</h2>
          <div class="cot">
            <div class="box-article art" v-for="projet in projets" :key="projet.id">
              <div v-if="projet?.link" class="link">
                <a class="link-projet" target="_blank" :href="projet.link">
                  <i class="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
              </div>
              <div v-if="projet?.link_code" class="link">
                <a class="link-projet" target="_blank" :href="projet.link_code">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
              <h3>{{ projet.title }}</h3>
              <h4>{{ projet.description }}</h4>
              <img :src="getImageUrl(projet.img)" alt="projet">
              <div class="techno">
                <span class="tags" v-for="tech in projet.tech" :key="tech.id" :style="{ backgroundColor: tech.color }"># {{ tech.name }}</span>
              </div>
            </div>
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
            tech: [
              {
                id: '0',
                name: 'React',
                color: '#61DBFB'
              },
              {
                id: '1',
                name: 'Firebase',
                color: '#FFCA28'
              },
              {
                id: '2',
                name: 'SASS',
                color: '#CC6699'
              }
            ],
            img: 'dac.webp',
            link: 'https://designandcreation.vercel.app/',
            link_code: 'https://github.com/RomainDoyen/designandcreation-react',
          },
          {   
            id: '1',
            title: '🍔 Dodo Cuisto (Application mobile)',
            description: 'Application de recette créole',
            tech: [
              {
                id: '0',
                name: 'Java',
                color: '#ed2122'
              },
              {
                id: '1',
                name: 'XML',
                color: '#F7DF1E'
              },
              {
                id: '2',
                name: 'SQLite',
                color: '#41a1db'
              }
            ],
            img: 'dc.webp',
            link_code: 'https://github.com/RomainDoyen/DodoCuistoAndroid'
          },
          {
            id: '2',
            title: '☀️ Weather App (version Web)',
            description: 'Obtenir la météo par le biais d\'une API',
            tech: [
              {
                id: '0',
                name: 'Vue JS',
                color: '#41B883'
              },
              {
                id: '1',
                name: 'OpenWeatherMap',
                color: '#F7DF1E'
              }
            ],
            img: 'weather-app.png',
            link: 'https://times-app.netlify.app/',
            link_code: 'https://github.com/RomainDoyen/weather-app',
          },
          {
            id: '3',
            title: '☀️ Weather App (version Mobile)',
            description: 'Obtenir la météo par le biais d\'une API',
            tech: [
              {
                id: '0',
                name: 'React Native',
                color: '#61DBFB'
              },
              {
                id: '1',
                name: 'OpenWeatherMap',
                color: '#F7DF1E'
              }
            ],
            img: 'weather-app-phone.png',
          },
          {
            id: '4',
            title: '💫 Astrologie 23',
            description: 'Projet réaliser dans le cadre scolaire',
            tech: [
              {
                id: '0',
                name: 'HTML',
                color: '#E34F26'
              },
              {
                id: '1',
                name: 'CSS',
                color: '#2299f8'
              },
              {
                id: '2',
                name: 'JS',
                color: '#F7DF1E'
              },
              {
                id: '3',
                name: 'JQUERY',
                color: '#73c3e8'
              }
            ],
            img: 'astrologie23.png',
            link: 'https://vingt-trois.netlify.app/',
            link_code: 'https://github.com/RomainDoyen/astro-23',
          },
        ],
    }),
  };
</script>