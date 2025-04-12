<template>
  <div class="min-h-screen bg-black text-white font-sans weekly-prices">
    <!-- Main container with subtle pattern -->
    <div class="relative pb-[20px]">

      <!-- Profile card -->
      <!-- Header section -->
      <div class="w-full max-w-md !px-[16px] !pt-[17px] header flex flex-col justify-between">
        <div
          class=" !py-[13px] text-center z-10 bg-[#ffffff20] backdrop-blur-sm rounded-2xl">
          <h1 class="text-[14px] uppercase font-bold mb-2">ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ ПОДАРКОВ</h1>
          <p class="text-[9px] uppercase">КАЖДЫЙ ДЕНЬ ГРУЗОВОЙ ШАТЛ ПРИЛЕТАЕТ С ПОДАРКАМИ</p>
        </div>
        <div>
          <div class=" !mb-[9px] flex justify-between items-center">
            <p class="text-[14px] max-w-[150px] font-[400] text-[#FFFFFF] ">
              Ваш счетчик ежедневных входов
            </p>
            <button
              class="max-w-[86px] w-full text-white font-400 py-2 rounded-lg current-day__btn">
              <span class="font-bold">21</span> День
            </button>
          </div>
          <p class="text-[10px] font-[400]  text-[#FFFFFF65] !mt-[9px]">
            В случае пропуска дня, он не засчитывается в счетчик и вы не сможете забрать последнию
            награду. Каждое 1 число месяца счетчик сбрасывается
          </p>
        </div>
      </div>

      <div class="h-px bg-gray-800 !mt-[21px] !mb-[15px]"></div>

      <!-- Friends list -->
      <div class="flex items-center justify-between !mb-[6px] !px-[16px]">
        <p class="text-[14px] font-[400] text-[#FFFFFF] ">
          Текущий сезон:
        </p>
        <p class="text-[14px] font-[400] text-[#FFE554] ">
          Солнце
        </p>
      </div>
      <div class=" calendar gap-[5px]  !px-[16px]">
        <template v-for="i in 31" :key="i">
          <div
            :class="{
              '_1st': i === 1,
              '_2nd': i === 2,
              '_3rd': i === 3,
              _active: 1 === i,
            }"
            class="flex flex-col items-center relative justify-between py-[9px] bg-[#1a1a1a] rounded-[13px] border border-[#333333] calendar-item">
            <div class="checkbox">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.28711 0.957031L9.87793 1.54297L3.33496 8.09082L0.12207 4.87793L0.712891 4.28711L3.33496 6.90918L9.28711 0.957031Z"
                  fill="white" fill-opacity="0.14"/>
              </svg>

            </div>
            <p class="calendar-day">
              1 День
            </p>
            <img src="@/assets/icons/coin.svg" alt="">
            <p class="calendar-award">200кк</p>
          </div>
        </template>
      </div>

      <BottomNav/>

      <!-- Timer -->

    </div>
  </div>
</template>

<script setup>
// You can add reactive data and methods here
import {ref} from 'vue'
import BottomNav from "@/components/BottomNav.vue";
import FriendsHeader from "@/components/FriendsHeader.vue";

const friends = ref([
  {id: 1, name: 'Fedotov', level: 173, mining: 345},
  {id: 2, name: 'Fedotov', level: 173, mining: 345},
  {id: 3, name: 'Fedotov', level: 173, mining: 345},
  {id: 4, name: 'Fedotov', level: 173, mining: 345},
  {id: 5, name: 'Fedotov', level: 173, mining: 345},
  {id: 6, name: 'Fedotov', level: 173, mining: 345},
  {id: 7, name: 'Fedotov', level: 173, mining: 345},
  {id: 8, name: 'Fedotov', level: 173, mining: 345},
  {id: 9, name: 'Fedotov', level: 173, mining: 345},
  {id: 10, name: 'Fedotov', level: 173, mining: 345},
])

const activeTab = ref('top10')
const activeTabIndex = ref(1)
</script>

<style scoped lang="scss">
/* You can add additional styles here if needed */
body {
  background-color: black;
}

.weekly-prices {
  background: url("@/assets/iPhone 16 - 12.png") no-repeat center;
  background-size: cover;

  .username {
    font-family: Stapel;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;

    color: #ffffff;
  }
}

.content-types {
  border: 1px solid #222222;
  padding: 7px 13px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(8px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
  margin-bottom: 18px;
  overflow: hidden;

  &__type {
    border-radius: 9px;
    width: 100%;
    height: 31px;
    overflow: hidden;
    font-family: Stapel;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;


    &._active {
      border: 1px solid rgba(197, 158, 245, 1);
      box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset, 0px 4px 29.2px 0px #9D56F44F;

      background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
    }
  }
}

.rating {
  width: 42px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("@/assets/icons/Vector.png") no-repeat center;
  color: #878787;

  span {
    margin-bottom: 5px;
  }

  &._first-tab {
    background: url("@/assets/icons/1st.png") no-repeat center;
    color: #FFDD7E;
  }

  &._second-tab {
    background: url("@/assets/icons/2nd.png") no-repeat center;
    color: #C9C9C9;
  }

  &._third-tab {
    background: url("@/assets/icons/3rd.png") no-repeat center;
    color: #FFA43D;
  }
}

.header {
  height: 191px;
  background: url("@/assets/week.png") no-repeat center;
  background-size: contain;
}

.current-day__btn {
  background: linear-gradient(180deg, #FF325E 0%, #860F23 100%);
  min-width: 87px;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  &-item {
    width: 100%;
    height: 109px;
    background: #1a1a1a;
    border-radius: 13px;
    border: 1px solid #333333;
    .checkbox {
      background: #ffffff;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ffffff20;
      position: absolute;
      top: -5px;
      right: 0;
      visibility: hidden;
      svg {
        path {
          fill: #111 !important;
          fill-opacity: 1;
        }
      }
    }
    &._1st {
      background: #1C1909;
    }
    &._2nd {
      background: #090F1C;
    }
    &._3rd {
      background: #19091C;
    }
    &._active {
      background: #89A132;
      .checkbox {
        visibility: visible;
      }
    }
  }
  &-day {
    font-family: Stapel;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
  }
  &-award {
    font-family: Stapel;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;

    color: #ffffff;
  }
}
</style>
