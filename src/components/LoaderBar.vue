<script setup lang="ts">

</script>

<template>
  <div class="w-full !mt-[12px] h-3 bg-[#323232] rounded-[3px]  overflow-hidden">
    <div class="loader-wrapper rounded-[3px] overflow-hidden">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader-wrapper {
  background: linear-gradient(90deg, #8732FF 0%, #B73CFF 100%);
  width: max-content;
}

.loader {
  width: calc(80px / cos(45deg));
  height: 14px;
  background: repeating-linear-gradient(-45deg, #9d56f4 0 10px, #f456f2 0 20px) left/200% 100%;
  animation: l3 2s infinite linear;
}

@keyframes l3 {
  0% {
    background-position: right
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-40px) scale(1.1);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 12s ease-in-out infinite;
}
</style>
