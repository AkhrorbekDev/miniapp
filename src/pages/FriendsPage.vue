<template>
  <div class="min-h-screen bg-black text-white font-sans friends-page">
    <!-- Main container with subtle pattern -->
    <div class="relative py-[20px]">

      <!-- Profile card -->
      <FriendsHeader/>
      <div class="h-px bg-gray-800 !mt-[21px] !mb-[15px]"></div>

      <div class=" !px-[16px]">
        <div class="content-types">
          <button @click="activeTabIndex = 1" :class="{_active: activeTabIndex === 1}"
                  class=" content-types__type flex-1 rounded-full text-white font-medium">
            Список всех друзей
          </button>
          <button @click="activeTabIndex = 2" :class="{_active: activeTabIndex === 2}"
                  class=" content-types__type flex-1 text-white font-medium">
            Топ 10 друзей по добычи
          </button>
        </div>
      </div>

      <!-- Friends list -->
      <div class=" flex flex-col gap-[5px]  !px-[16px]">
        <template v-if="activeTabIndex === 1">
          <template v-for="i in 10" :key="i">
            <div
              class="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-[#333333]">
<!--              <div class="flex items-center gap-4">-->
<!--                <div class="flex items-center gap-[11px]">-->
<!--                  <div-->
<!--                    class="w[42px] h-[42px] rounded-[7px] bg-[#E5E5E5] flex items-center justify-center overflow-hidden">-->
<!--                    <img src="@/assets/image%201.png" alt="">-->
<!--                  </div>-->
<!--                  <div class="flex flex-col text-start">-->
<!--                    <div class="text-[14px] font-[400] text-[#FFFFFF]">Имя</div>-->
<!--                    <div class="text-[13px] font-[400] text-[#FFFFFF]"><span class="text-[#F3BE5C]">173</span>-->
<!--                      Уровень-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-[11px]">
                  <div class="w-10 h-10 flex items-center justify-center">
                    <div
                      class="w[42px] h-[42px] rounded-[7px] bg-[#E5E5E5] flex items-center justify-center overflow-hidden">
                      <img src="@/assets/image%201.png" alt="">
                    </div>
                  </div>
                  <div class="flex flex-col text-start">
                    <div class="text-[14px] font-[400] text-[#FFFFFF]">Имя</div>
                    <div class="text-[13px] font-[400] text-[#FFFFFF]"><span class="text-[#F3BE5C]">173</span>
                      Уровень
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <p class="text-[11px] text-[#fff]">Дата приглашения</p>
                <p class="text-[11px]">
                  <span
                    class="text-[#7A7A7A]">20.02.2025 16:35</span>
                </p>
              </div>
            </div>
          </template>
        </template>

        <template v-if="activeTabIndex === 2">
          <template v-for="i in 10" :key="i">
            <div
              class="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-[#333333]">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 flex items-center justify-center">
                  <div class="rating" :class="{
                  '_first-tab': i === 1,
                  '_second-tab': i === 2,
                  '_third-tab': i === 3,

                }">
                  <span>
                    {{ i }}
                  </span>
                  </div>
                </div>
                <div>
                  <h3 class="username">Fedotov</h3>
                  <p class="text-[#ffdd7e] font-bold">173 <span class="text-gray-400 font-normal">Уровень</span>
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-[11px] text-[#fff]">Добыча камня</p>
                <p class="text-[11px]"><span class="text-[#9d56f4] font-bold">345</span><span
                  class="text-[#7A7A7A]">кк</span> <span class="text-[#D1D1D1]">(в секунду)</span>
                </p>
              </div>
            </div>
          </template>
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

.friends-page {
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

</style>
