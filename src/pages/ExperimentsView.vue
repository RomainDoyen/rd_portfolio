<template>
    <div class="articles">
      <h2 id="experience"> 👨🏽‍💼 {{ msg }}</h2>
      <div class="timeline">
        <div v-for="event in events" :key="event.id" class="timeline-item">
          <div class="timeline-content">
            <h3>{{ event.subtitle }}</h3>
            <div class="date-container">
              <span class="date">{{ event.date }}</span>
            </div>
            <h4>{{ event.lieu }}</h4>
            <p>{{ event.description.point_1 }}</p>
            <p>{{ event.description.point_2 }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "ExperimentsVue",
    props: {
      msg: String
    },
    data: () => ({
      events: [
      {
          id: 0,
          subtitle: 'Stage de développeur web Front-end/Backend',
          date: '2023-02 - 2023-05',
          lieu: 'D2IP, Sainte-Clotilde, Il De La Réunion',
          description: {
            point_1: '• Stage développeur Front-end/Backend durant trois mois dans l\'entreprise D2IP, SainteClotilde',
            point_2: '• Stage de trois mois pour la reprise et l\'amélioration d\'une application web de bulletin de notes scolaires'
          }
        },
        {
          id: 1,
          subtitle: 'Stage de développeur web Backend',
          date: '2022-02 - 2022-03',
          lieu: 'Flaxib, Sainte-Clotilde, Il De La Réunion',
          description: {
            point_1: '• Stage développeur Backend durant deux mois dans l\'entreprise Flaxib, SainteClotilde',
            point_2: '• Stage de deux mois pour la création d\'une application web qui calcule les itinéraires optimal pour les transports scolaires'
          }
        },
        {
          id: 2,
          subtitle: '🔧 Réparateur D\'électroménagers',
          date: '2021-01 - 2021-01',
          lieu: 'Electro-Dep, Saint-Anne, Il De La Réunion',
          description: {
            point_1: '• Réparation quotidienne d\'appareil électroménager',
            point_2: '• Localisation précise de la défaillance et identification de ses causes en démontant précautionneusement l\'appareil et en utilisant des outils de mesure et de diagnostic comme le multimètre.'
          }
        },
      ]
    })
  };
</script>