<template>
  <div>
    <div
      v-if="isOpen"
      class="bottomsheet-backdrop"
      @click="closeOnBackdropClick ? close() : null"
    ></div>
    <div
      class="bottomsheet-container"
      :class="{ 'bottomsheet-open': isOpen }"
    >
      <button
        v-if="showCloseButton"
        class="bottomsheet-close-button"
        @click="close"
      >
        <img src="@/assets/icons/close.svg" alt="">
      </button>
      <div class="bottomsheet-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseBottomSheet',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    closeOnBackdropClick: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit('update:isOpen', false);
    }
  }
}
</script>

<style scoped>
.bottomsheet-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.bottomsheet-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 90vh;
  background: linear-gradient(180.04deg, #171717 0.04%, #000000 99.96%);
  border-top: 1px solid #363636;



  border-radius: 35px 35px 0 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 1001;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.bottomsheet-open {
  transform: translateY(0);
}

.bottomsheet-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
}

.bottomsheet-drag-handle {
  width: 40px;
  height: 4px;
  background-color: #ccc;
  border-radius: 2px;
}

.bottomsheet-close-button {
  position: absolute;
  right: 26px;
  top: 22px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
}

.bottomsheet-content {
  padding: 0 16px 16px;
  overflow-y: auto;
  max-height: calc(90vh - 60px);
}
</style>
