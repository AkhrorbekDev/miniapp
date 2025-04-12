<template>
  <div class="min-h-screen bg-black text-white font-sans leveling-page">
    <!-- Main container with subtle pattern -->
    <div class="relative pb-[20px]">
      <div class="w-full max-w-md !px-[16px] !pt-[17px] header">
        <div class="w-full h-full flex flex-col justify-end">
          <div class="flex items-center justify-between text-[10px] font-[400] text-[#FFFFFF]">
            <span class="text-[#FFFFFF]">173 Уровень</span>
            <span class="text-[#F3BE5C]">
              <span class="text-[10px] font-[400] text-[#FFFFFF]">65,656/</span>
              <span class="text-[11px] font-[400] text-[#FFFFFF38]"> 150,000</span>
            </span>
          </div>
          <LoaderBar/>
          <p class="text-[13px] font-[400]  text-[#FFFFFF42] !mt-[9px]">
            Добывайте камни чтобы повышать уровень вашего шатла, за каждый добытый камень с планеты,
            вы получаете +1 очко к опыту уровня
          </p>

        </div>
      </div>

      <div class="h-px bg-gray-800 !mt-[21px] !mb-[15px]"></div>


      <!-- Friends list -->
      <div class=" flex flex-col gap-[5px]  !px-[16px]">
        <template v-for="i in 6" :key="i">
          <div
            class="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-[#333333]"
            :class="{
                  '_level-1': i === 1,
                  '_level-2': i === 2,
                  '_level-3': i === 3,

                }">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-[11px]">
                <div class="w-10 h-10 flex items-center justify-center">
                  <div class="rating">
                      <span>
                        {{ i }}
                      </span>
                  </div>
                </div>
                <div class="flex flex-col text-start">
                  <div class="text-[14px] font-[400] text-[#FFFFFF] level-name">Начинающий I</div>
                  <div class="text-[13px] font-[400] text-[#FFFFFF]"><span class="text-[#F3BE5C]">173</span>
                    Уровень
                  </div>
                </div>
              </div>
            </div>
            <button
              class="max-w-[86px] w-full upgrade-parts__part-btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
              {{ ((i % 2) !== 0) ? 'Получено' : 'Не получено' }}
            </button>
          </div>
        </template>
      </div>
      <div class="text-center max-w-[231px] !mx-auto !mt-[20px]">
        <p class="text-[13px] text-white">Вы достигли максимального уровня!</p>
        <p class="text-[12px] text-[#7D7D7D]">Узнайте больше о том, что вы можете сделать с этим</p>
        <button
          class="max-w-[221px] !mt-[21px] !h-[46px] w-full upgrade-parts__part-btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
          Перейти и узнать
        </button>
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
import LoaderBar from "@/components/LoaderBar.vue";

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

.upgrade-parts__part-btn {
  border: 1px solid rgba(197, 158, 245, 1);
  background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
  box-shadow: 0px 4px 13.9px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 29.2px 0px rgba(157, 86, 244, 0.31);
  font-family: Stapel;
  height: 36px;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0%;
}

.leveling-page {
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


}

._level-1 {
  .rating {
    background: url("@/assets/icons/1st-purple.png") no-repeat center;
    color: #FFDD7E;

  }

  .level-name {
    color: #B87EFF;
  }
}

._level-2 {
  .rating {
    background: url("@/assets/icons/2nd-green.png") no-repeat center;
    color: #C9C9C9;

  }

  .level-name {
    color: #75FFBF;
  }
}

._level-3 {
  .rating {
    background: url("@/assets/icons/1st.png") no-repeat center;
    color: #FFA43D;


  }

  .level-name {
    color: #FFE063;
  }
}

.header {
  height: 171px;
}
</style>
