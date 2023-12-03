<template>
    <div class="container">
        <footer class="footer-area">
          <div class="main" v-for="(footer, i) in footers" :key="i">
            <div class="copy">
                <p>&copy; {{ footer.cop_1 }}
                    <span id="dac">
                    <a :href="footer.cop_3" target="_blank">
                        <img id="dac-logo" src="../assets/2.webp" alt="footer" />
                    </a>
                    </span>
                    {{ footer.cop_2 }}
                    <span class="non-clickable-link">{{ footer.cgu }}</span>
                </p>
            </div>
          </div>
      </footer>
    </div>
</template>
  
<script>
  export default {
      name: 'FooterVue',
      props: {
          msg: String
      },
      data: () => ({
          footers: [
              {
                  cop_1: `Romain Doyen ${new Date().getFullYear()} by  `,
                  cop_2: ' Tous droits réservés.',
                  cop_3: 'https://designandcreation.vercel.app/',
                  cgu: ' CGU'
              }
          ]
      }),
  }
</script>

