<template>
  <form ref="form" @submit.prevent="sendEmail" class="contact-form">
    <div class="form-group">
      <label for="lastName">Nom</label>
      <input type="text" name="user_lastname" />
    </div>
    <div class="form-group">
      <label for="firstName">Prénom</label>
      <input type="text" name="user_firstname" />
    </div>
    <div class="form-group">
      <label for="company">Société</label>
      <input type="text" name="user_company" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="user_email" />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea name="message"></textarea>
    </div>
    <button type="submit" class="submit-btn">Envoyer</button>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID, 
          import.meta.env.VITE_TEMPLATE_ID, 
          this.$refs.form, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          (response) => {
            alert("Message envoyé avec succès !");
            this.resetForm();
          },
          (error) => {
            alert("Erreur lors de l'envoi du message.");
            console.error(error);
          }
        );
    },
    resetForm() {
      this.form.lastName = "";
      this.form.firstName = "";
      this.form.company = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>