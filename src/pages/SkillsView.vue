<template>
    <div class="articles">
      <h2 id="competence">👨🏻‍💻 {{ msg }}</h2>
      <div class="skills-bar">
        <div class="bar" v-for="(skill, i) in skills" :key="i">
          <div class="info">
            <!-- <span><img v-bind:src="require(`@/assets/${skill.icon}`)" /></span> -->
            <span><img v-bind:src="getImageUrl(skill.icon)" /></span>
          </div>
          <div class="title"><span>{{ skill.title }}</span></div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "SkillsVue",
    props: {
      msg: String
    },
    setup() {
      const getImageUrl = (name) => {
          return new URL(`../assets/${name}`, import.meta.url).href
      }
      return { getImageUrl }
    },
    data : () => ({
      skills: [
        {
          title: 'HTML',
          icon : 'html-5.webp',
        },
        {
          title: 'CSS',
          icon : 'css3.webp',
        },
        {
          title: 'JavaScript',
          icon : 'javascript.webp',
        },
        {
          title: 'Vue',
          icon: 'vue.png',
        },
        {
          title: 'Photoshop',
          icon: 'photoshop.webp',
        },
        {
          title: 'Illustrator',
          icon: 'illustrator.webp',
        },
        {
          title: 'Figma',
          icon: 'figma.webp',
        },
        {
          title: 'MySQL',
          icon: 'mysql.webp',
        },
        {
          title: 'Github',
          icon: 'github.webp',
        },
        {
          title: 'Wordpress',
          icon: 'wordpress.webp',
        },
        {
          title: 'React',
          icon: 'react.png',
        },
        {
          title: 'Firebase',
          icon: 'firebase.png',
        },
      ]
    })
  };
</script>