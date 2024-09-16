<template>
  <form ref="form" @submit.prevent="sendEmail" class="contact-form">
    <div class="form-group">
      <label for="lastName">Nom</label>
      <input
        type="text"
        placeholder="Votre nom..."
        name="user_lastname"
        v-model="form.lastName"
        @input="validateLastName"
      />
      <p v-if="errors.lastName" class="error">{{ errors.lastName }}</p>
      <p v-if="valid.lastName" class="valid">{{ valid.lastName }}</p>
    </div>
    <div class="form-group">
      <label for="firstName">Prénom</label>
      <input
        type="text"
        placeholder="Votre prénom..."
        name="user_firstname"
        v-model="form.firstName"
        @input="validateFirstName"
      />
      <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
      <p v-if="valid.firstName" class="valid">{{ valid.firstName }}</p>
    </div>
    <div class="form-group">
      <label for="company">Société</label>
      <input
        type="text"
        placeholder="Le nom de votre société..."
        name="user_company"
        v-model="form.company"
        @input="validateCompany"
      />
      <p v-if="errors.company" class="error">{{ errors.company }}</p>
      <p v-if="valid.company" class="valid">{{ valid.company }}</p>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        placeholder="Votre email..."
        name="user_email"
        v-model="form.email"
        @input="validateEmail"
      />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>
      <p v-if="valid.email" class="valid">{{ valid.email }}</p>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea
        name="message"
        placeholder="Votre message..."
        v-model="form.message"
        @input="validateMessage"
      ></textarea>
      <p v-if="errors.message" class="error">{{ errors.message }}</p>
      <p v-if="valid.message" class="valid">{{ valid.message }}</p>
    </div>
    <button type="submit" class="submit-btn">Envoyer</button>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import {
  validateLastName,
  validateFirstName,
  validateSociety,
  validateEmail,
  validateMessage,
} from "../utils/checkForm";

export default {
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        company: "",
        email: "",
        message: "",
      },
      errors: {
        lastName: "",
        firstName: "",
        company: "",
        email: "",
        message: "",
      },
      valid: {
        lastName: "",
        firstName: "",
        company: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    validateLastName() {
      const result = validateLastName(this.form.lastName);
      this.errors.lastName = result.error;
      this.valid.lastName = result.isValid ? "Nom valide." : "";
    },
    validateFirstName() {
      const result = validateFirstName(this.form.firstName);
      this.errors.firstName = result.error;
      this.valid.firstName = result.isValid ? "Prénom valide." : "";
    },
    validateCompany() {
      const result = validateSociety(this.form.company);
      this.errors.company = result.error;
      this.valid.company = result.isValid ? "Société valide." : "";
    },
    validateEmail() {
      const result = validateEmail(this.form.email);
      this.errors.email = result.error;
      this.valid.email = result.isValid ? "Email valide." : "";
    },
    validateMessage() {
      const result = validateMessage(this.form.message);
      this.errors.message = result.error;
      this.valid.message = result.isValid ? "Message valide." : "";
    },
    validateForm() {
      this.validateLastName();
      this.validateFirstName();
      this.validateCompany();
      this.validateEmail();
      this.validateMessage();

      return (
        !this.errors.lastName &&
        !this.errors.firstName &&
        !this.errors.company &&
        !this.errors.email &&
        !this.errors.message
      );
    },
    sendEmail() {
      if (this.validateForm()) {
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            this.$refs.form,
            {
              publicKey: import.meta.env.VITE_PUBLIC_KEY,
            }
          )
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
      } else {
        alert("Veuillez corriger les erreurs dans le formulaire.");
      }
    },
    resetForm() {
      this.form.lastName = "";
      this.form.firstName = "";
      this.form.company = "";
      this.form.email = "";
      this.form.message = "";
      this.valid = {
        lastName: "",
        firstName: "",
        company: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 14px;
}
.valid {
  color: green;
  font-size: 14px;
}
</style>
