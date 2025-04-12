<script setup lang="ts">

import UserProfile from "@/components/UserProfile.vue";
import BottomNav from "@/components/BottomNav.vue";
import LoaderBar from "@/components/LoaderBar.vue";
</script>

<template>
  <div class="">
    <div class="!px-[16px] ">
      <div
        class=" !py-[12px] !px-[11px] flex items-center justify-between z-10 bg-[#ffffff20] backdrop-blur-sm rounded-[13px]">
        <UserProfile/>
        <button
          class="add-friends__btn">
          Пригласить друга
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">


.border-s {
  border-width: 1px;
  border-color: #FFFFFF21;
  border-style: dashed;
  border-spacing: 10px;
}

.add-friends__btn {
  border: 1px solid #C1D481;
  box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset,  0px 4px 29.2px 0px #ADCA474F;
  background: linear-gradient(180deg, #ADCA47 12.5%, #546515 146.43%);
  border-radius: 9px;
  padding: 8px 10px;
  font-family: Stapel;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #FFFFFF;
  height: 35px;
}

</style>
