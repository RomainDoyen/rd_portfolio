<template>
    <div class="articles">
      <h2 id="formation">🎓 {{ msg }}</h2>
      <div class="contains">
        <div v-for="(educ, i) in educs" :key="i">
        <div class="educ">
          <div class="box-article">
            <h3 class="ghj">{{ educ.ecole }}</h3>
            <h4 class="ghj">{{ educ.diplome }}</h4>
            <p class="gh">{{ educ.date }}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "EducationVue",
    props: {
      msg: String
    },
    data: () => ({
      educs: [
        {
          ecole: '📖 From Scratch - Développement web',
          diplome: ' 📆 React de A à Z',
          date: '2021 - 2022'
        },
        {
          ecole: '📖 MOOC Université De La Réunion',
          diplome: '📟 Maîtriser le shell Bash',
          date: '2019 - 2020'
        },
        {
          ecole: '🏫 Université De La Réunion - Sainte-Clotilde',
          diplome: '🎓 Licence : Informatique',
          date: '2016-08 - 2021-07'
        },
        {
          ecole: '🏫 Lycée Marie Curie - Saint-Anne',
          diplome: '🎓 Baccalauréat Technologique : Science Et Technologie Sante Sociale',
          date: '2014-09 - 2016-07'
        },
        {
          ecole: '🏫 Collège Thérésien Cadet - Sainte-Rose',
          diplome: '🎓 Diplôme Du Brevet',
          date: '2008-09 - 2012-06'
        },
      ]
    })
  };
</script>