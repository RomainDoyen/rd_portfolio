<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-btn" @click="closeModal">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
      <div class="modal-body">
        <div class="modal-image">
          <img :src="imageSrc" alt="Image du projet" />
        </div>
        <div class="modal-info">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    imageSrc: String,
    title: String,
    description: String
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>