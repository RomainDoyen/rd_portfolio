<template>
    <div class="container">
        <footer class="footer-area">
          <div class="main" v-for="(footer, i) in footers" :key="i">
              <div class="footer">
                  <div class="single-footer">
                      <h4> 🙋🏽‍♂️ {{ msg }}</h4>
                      <div class="footer-social">
                          <a target="_blank" href="https://www.facebook.com/designandcreation39/"><i class="fa-brands fa-facebook-f"></i></a>
                          <a target="_blank" href="https://github.com/RomainDoyen/"><i class="fa-brands fa-github"></i></a>
                          <a target="_blank" href="https://www.instagram.com/designandcreation_rd/"><i class="fa-brands fa-instagram"></i></a>
                      </div>
                  </div>
                  <div class="single-footer">
                      <h4> 📨 {{ footer.subtitle }}</h4>
                      <p>&nbsp;{{ footer.mail }}</p>
                  </div>
              </div>
              <div class="copy">
                  <p>&copy; {{ footer.cop_1 }}<span id="dac"><img id="dac-logo" src="../assets/2.webp" alt="footer"/></span>{{ footer.cop_2 }}<a href="#">{{ footer.cgu }}</a></p>
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
                  subtitle: 'Mail',
                  mail: 'romain.doyen39@gmail.com',
                  cop_1: `Romain Doyen ${new Date().getFullYear()} by  `,
                  cop_2: ' Tous droits réservés.',
                  cgu: ' CGU'
              }
          ]
      }),
  }
</script>

