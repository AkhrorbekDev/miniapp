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
        <div
          class="border-s !py-[12px] !px-[14px] flex items-center justify-between rounded-[13px]">
          <div class="flex flex-col items-start justify-center">
            <p class="text-[11px] font-[400] text-[#FFFFFF]">
              Камней
            </p>
            <p class="text-[8px]">
              <span class="text-[11px] text-[#9d56f4]">345</span>КК
            </p>
          </div>
          <div class="w-[1px] h-[12px] bg-white !mx-[8px]"/>
          <div class="flex flex-col items-start justify-center">
            <p class="text-[11px] font-[400] text-[#FFFFFF]">
              Монет
            </p>
            <p class="text-[8px]">
              <span class="text-[11px] text-[#F3BE5C]">345</span>КК
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-start justify-between !mt-[9px]">
        <div
          class="flex items-center gap-[7px] !py-[7px] !px-[9px] rounded-[13px] bg-[#ffffff20] backdrop-blur-sm">
          <div class="w-[30px] h-[30px]">
            <img src="@/assets/icons/image%2017.svg" alt="">
          </div>
          <div class="!ml-5px !mr-[11px]">
            <p class="text-[10px] font-[400] text-[#FFFFFF]">
              Топливо
            </p>
            <p class="text-[13px] font-[400] text-[#ABD70E]">
              1k <span class="text-[10px] font-[400] text-[#FFFFFF38]">/ 5,5k</span>
            </p>
          </div>
          <button class="buy-btn">
            Купить
          </button>
        </div>
        <div class="flex gap-[7px] items-center">
          <div class="flex flex-col items-center justify-center gap-[5px]">
            <button
              class="rounded-[13px] border border-[#ffffff23] overflow-hidden  w-[46px] h-[46px] flex items-center justify-center">
              <span class="calendar-icon purple">
                <img src="@/assets/icons/calendar%202.png" alt="">
              </span>
            </button>
            <span class="text-[10px] font-[400] text-[#FFFFFF]">
              3 ч.
            </span>
          </div>
          <div class="flex flex-col items-center justify-center gap-[5px]">
            <button
              class="rounded-[13px] border border-[#ffffff23] overflow-hidden  w-[46px] h-[46px] flex items-center justify-center">
              <span class="calendar-icon blue">
                <img src="@/assets/icons/calendar%202.png" alt="">
              </span>
            </button>
            <span class="text-[10px] font-[400] text-[#FFFFFF]">
              3 ч.
            </span>
          </div>
          <div class="flex flex-col items-center justify-center gap-[5px]">
            <button
              class="rounded-[13px] border border-[#ffffff23] overflow-hidden  w-[46px] h-[46px] flex items-center justify-center">
              <span class="calendar-icon yellow">
                <img src="@/assets/icons/calendar%202.png" alt="">
              </span>
            </button>
            <span class="text-[10px] font-[400] text-[#FFFFFF]">
              3 ч.
            </span>
          </div>


        </div>
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

.buy-btn {
  background: linear-gradient(180deg, #ADCA47 12.5%, #546515 146.43%);
  width: 64px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #889C45;

  box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset, 0px 4px 29.2px 0px #ADCA474F;



}


</style>
