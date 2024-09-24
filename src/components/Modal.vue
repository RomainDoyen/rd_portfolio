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

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  font-weight: bold;
}

.close-btn:hover {
  color: #f00;
}

.modal-body {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.modal-image img {
  max-width: 2000px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.modal-info {
  margin-top: 20px;
  flex-grow: 1;
}

.modal-info h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.modal-info p {
  font-size: 1.2rem;
  line-height: 1.6;
}

@media only screen and (max-width: 830px) {
  .modal-body {
    flex-direction: column;
  }

  .close-btn {
    z-index: 1;
  }

  .modal-image {
    margin-top: 30px;
  }
}
</style>

