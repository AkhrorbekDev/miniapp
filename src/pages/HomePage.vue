<script setup lang="ts">

import HomeHeader from "@/components/HomeHeader.vue";
import LoaderBar from "@/components/LoaderBar.vue";
import BottomNav from "@/components/BottomNav.vue";
import {ref} from 'vue'

const showResult = ref(true)
const count = ref(0)
const onTap = (e) => {
  // animation trigger
  const el = e.currentTarget;
  el.classList.remove('tapped');
  void el.offsetWidth; // Force reflow
  el.classList.add('tapped');

  count.value += 1

  if (count.value === 5) {
    showResult.value = !showResult.value
    count.value = 0
  }
}
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-between !pt-[17px] home-page">
    <HomeHeader/>
    <div v-if="showResult" class="flex flex-col items-center min-w-[386px] min-h-[386px]">
      <div class="w-full max-w-[221px]">
        <div class="flex items-center justify-between text-[10px] font-[400] text-[#FFFFFF]">
          <span class="text-[#FFFFFF]">Здоровье планеты</span>
          <span class="text-[#F3BE5C]">
              <span class="text-[10px] font-[400] text-[#FFFFFF]">65,656/</span>
              <span class="text-[11px] font-[400] text-[#FFFFFF38]"> 150,000</span>
            </span>
        </div>
        <LoaderBar stop/>

      </div>
      <button class="tap-btn tap-animate" @click="onTap">
        <img src="@/assets/icons/yellowplanet.png" alt="">
      </button>

    </div>
    <div v-else class="flex flex-col items-center  min-w-[386px] min-h-[386px]">
      <img src="@/assets/icons/Union.png" alt="">
      <div class="!mt-[11px] max-w-[252px] text-center">
        <p class="text-[16px] font-[400]  text-[#FFFFFF]">
          Планета уничтожена!
        </p>
        <p class="text-[12px] font-[400] text-[#7D7D7D]">
          Вы нанесли <span class="text-[#FF3460]">876ккк</span> урона, что составляет <span
          class="text-[#9D56F4]">
          43%
        </span> от общего здоровья планеты.
        </p>
      </div>
      <div class="border-dashed border-[1px] border-[#ffffff23]
      rounded-[13px] h-[43px] w-full max-w-[221px] !mt-[11px] !mb-[9px]
       flex items-center justify-center text-[#7D7D7D] text-[12px]
      ">
        Ваша награда: <span class="text-[#F3BE5C]">30кк монет</span>
      </div>
      <button
        @click="showResult = !showResult"
        class="w-full !mb-[19px] max-w-[221px] upgrade-parts__part-btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
        Забрать награду
      </button>
      <p class="text-[12px] font-[400] text-[#7D7D7D]">
        Командиры прилетят к следующей планете через:
      </p>
      <p class="text-[16px] font-[400] text-[#FFFFFF]">
        34 д. 24 ч. 35 мин.
      </p>
    </div>
    <div>
      <div class="!px-[16px]  flex items-center justify-between !mb-[9px]">
        <div class="flex gap-[7px] items-center">
          <router-link
            :to="{
            name: 'fortune-wheel'
            }"
            class="rounded-[13px] border border-[#ffffff23] overflow-hidden  w-[46px] h-[46px] flex items-center justify-center">
          <span class="calendar-icon purple">
            <img src="@/assets/icons/ruletka.png" alt="">
          </span>
          </router-link>
          <router-link
            :to="{
             name: 'week-calendar',
            }"
            class="rounded-[13px] border border-[#ffffff23] overflow-hidden  w-[46px] h-[46px] flex items-center justify-center">
          <span class="calendar-icon red">
            <img src="@/assets/icons/calendar%202.png" alt="">
          </span>
          </router-link>
        </div>
        <div
          class="max-w-[115px]   !px-[12px] !py-[10px] overflow-hidden bg-[#ffffff20] backdrop-blur-sm rounded-[13px] flex flex-col items-center">
          <div class="flex items-center justify-between relative gap-[15px]">
            <p class="text-[9px] font-[400] max-w-[36px] text-[#FFFFFF]">
              Добыча за тап
            </p>
            <div class="w-[40px] relative">
              <p
                class="text-[10px] font-[400] text-[#ffffff30] !p-[5px] tap-info absolute top-[-25px]">
                <span class="text-[#FFCD0F]">+34</span>k
                <span>
                камня
              </span>
              </p>
            </div>
          </div>
          <router-link
            :to="{
            name: 'upgrade',
            }"
            class="update-btn border border-[#ffffff23] !text-white overflow-hidden rounded-[7px] !py-[7px] !px-[9px] flex items-center justify-center">
            Улучшить добычу
          </router-link>
        </div>
      </div>
    </div>
    <BottomNav/>

  </div>
</template>

<style scoped>
.home-page {
  background: url("@/assets/iPhone 16 - 12.png") no-repeat center;
  background-size: cover;
}

.buy-btn {
  background: linear-gradient(180deg, #ADCA47 12.5%, #546515 146.43%);
  width: 64px;
  height: 28px;
  top: 103px;
  left: 112px;
  border-radius: 6px;
  border: 1px solid;

  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 4px 29.2px 0px #ADCA474F;


}

.flex-grow {
  flex-grow: 1;
}

.tap-btn {
  img {
    object-fit: contain;
  }

}

.update-btn {
  background: linear-gradient(180deg, #9D56F4 12.5%, #5B328E 146.43%);
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 4px 29.2px 0px #9D56F430;
  font-size: 9px;
  text-align: center;
  white-space: nowrap;
  margin-top: 8px !important;
}

.upgrade-parts__part-btn {
  border: 1px solid rgba(197, 158, 245, 1);
  margin-top: 19px;
  box-shadow: 0px 4px 13.9px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 29.2px 0px rgba(157, 86, 244, 0.31);
  background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
  font-family: Stapel;
  height: 46px;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0%;

}

.tap-info {
  width: 40px;
  height: 40px;
  background-image: url("@/assets/icons/rest.png");
}


.tap-animate.tapped {
  animation: tap-bounce 0.25s ease;
}

@keyframes tap-bounce {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.93);
  }
  100% {
    transform: scale(1);
  }
}
</style>
