<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#9d56f4] to-[#000000] text-white flex flex-col items-center justify-between relative overflow-hidden loading-page">
    <!-- Floating elements in background -->


    <!-- Header section -->
    <div class="w-full max-w-md !px-[16px] !pt-[17px]">
      <div
        class=" !py-[13px] text-center z-10 bg-[#ffffff20] backdrop-blur-sm rounded-2xl">
        <h1 class="text-[14px] font-bold mb-2">ПОКОРЯЙ КОСМИЧЕСКИЕ ПРОСТОРЫ</h1>
        <p class="text-[9px]">СТАНЬ КОМАНДИРОМ СВОЕГО СОБСТВЕННОГО ШАТЛА</p>
      </div>
    </div>
    <!-- Floating elements -->
    <div>

      <!-- App name section -->
      <div class="w-full max-w-md px-6 text-center !mb-[25px] z-10">
        <h2 class="text-[20px] font-bold mb-4">Название приложения</h2>
        <p class="text-[14px] opacity-80 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <!-- Social media section -->
      <div class="w-full max-w-md px-6 text-center z-10">
        <h3 class="text-[12px] font-medium mb-6">Следите за нами в соц. сетях</h3>
        <div class="flex justify-center gap-[5px] !mt-[10px]">
          <a href="#"
             class="w-[40px] h-[40px] rounded-full bg-[#FF0000] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="white">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a href="#"
             class="w-[40px] h-[40px] rounded-full bg-[#1877F2] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="white">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="#"
             class="w-[40px] h-[40px] rounded-full bg-[#E1306C] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="white">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#"
             class="w-[40px] h-[40px] rounded-full bg-[#76dcf9] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="white">
              <path
                d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.38c-.375.071-.697-.237-.697-.621v-2.764c-2.395-.286-4.3-1.603-4.3-4.364 0-1.025.365-1.903 1.025-2.61.024-.027.151-.367-.043-.822-.193-.456-.124-1.119.207-1.65.331.074 1.131.261 2.115 1.06.395-.103.814-.168 1.246-.192.433.024.852.089 1.246.192.984-.799 1.784-.986 2.115-1.06.331.531.4 1.194.207 1.65-.193.455-.067.795-.043.822.66.707 1.025 1.585 1.025 2.61 0 2.761-1.905 4.078-4.3 4.364v2.764c0 .384-.321.692-.697.621-1.651-.313-3.124-1.007-4.106-1.982z"/>
            </svg>
          </a>
          <a href="#"
             class="w-[40px] h-[40px] rounded-full bg-[#323232] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="white">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#"
             class="w-[40px] h-[40px] rounded-full bg-[#474747] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="white">
              <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
    <!-- Loading section -->
    <div class="w-full max-w-md px-6 py-12 mt-auto text-center z-10">
      <div class="text-[16px] text-white flex flex-col items-center">
        <p class=" mb-2">50%</p>
        <p class="mb-4">Загрузка космического пространства</p>
        <div class="w-full !mt-[12px] h-3 bg-[#323232] rounded-[3px]  overflow-hidden">
          <div class="loader-wrapper rounded-[3px] overflow-hidden">
            <div class="loader"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative stars -->
  </div>
</template>

<style scoped lang="scss">
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

.loading-page {
  background: url("@/assets/iPhone 16 - 15.png") no-repeat center;
  background-size: cover;
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

<script setup>
// No additional script needed for this component
</script>
