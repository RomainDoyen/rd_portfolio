<template>
    <div class="articles">
      <h2 id="contactme">{{ msg }}</h2>
        <div class="sous-articles">
          <div class="box-article" v-for="(contact, i) in contacts" :key="i">
              <div class="contact">
                <div class="single-contact">
                      <!-- <h4>{{ contact.subtitle }}</h4> -->
                      <!-- <p>&nbsp;{{ contact.mail }}</p> -->
                      <a href="mailto:romain.doyen10@gmail.com" aria-label="Mail"><i class="fa-solid fa-envelope"></i>&nbsp;{{ contact.mail }}</a>
                  </div>
                  <div class="single-contact">
                      <h4>Mes réseaux !</h4>
                      <div class="contact-social">
                          <a target="_blank" href="https://www.facebook.com/designandcreation39/" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                          <a target="_blank" href="https://github.com/RomainDoyen/" aria-label="Github"><i class="fa-brands fa-github"></i></a>
                          <a target="_blank" href="https://www.instagram.com/designandcreation_rd/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                          <a target="_blank" href="https://www.linkedin.com/in/romain-doyen/" aria-label="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContactVue",
  props: {
    msg: String,
  },
  data: () => ({
    contacts: [
      {
        subtitle: 'Mail',
        mail: 'Contactez-moi !',
      }
    ]
  }),
};
</script>
