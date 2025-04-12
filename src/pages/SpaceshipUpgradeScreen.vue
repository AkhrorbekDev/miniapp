<script setup>
import {ref} from "vue";
import UpgradePartBottomSheet from "@/components/UpgradePartBottomSheet.vue";

const activeTabIndex = ref(4);
const showBottomSheet = ref(false);

const openBottomSheet = () => {
  showBottomSheet.value = true;
};
</script>
<template>
  <div class="min-h-screen bg-black text-white sticky top-0 overflow-hidden upgrade-page">

    <!-- Main content -->
    <div class="relative z-10 max-w-md overflow-hidden mx-auto px-[19px]">
      <!-- Spaceship display -->
      <div class="mb-6 flex flex-col justify-between header">
        <div class="flex justify-center mb-4">
        </div>
        <div class="flex justify-between items-center">
          <div>
            <div class="text-[#ffffff30] text-[12px]">Модель шатла</div>
            <div class="text-[13px] font-bold mb-4">Cyber ship AS-200</div>
          </div>
          <div class="flex rounded-[9px] overflow-hidden text-[#ffffff] text-[12px] tabs">
            <div class="text-white py-[8px] px-[13px] font-bold first">
              345кк
            </div>
            <div class="flex-grow bg-transparent text-right py-[8px] px-[13px] second">
              Добыча в час
            </div>
          </div>
        </div>
      </div>

      <div class="h-px bg-gray-800 !mt-[21px] !mb-[15px]"></div>

      <!-- Navigation tabs -->
      <div class="upgrade-types">
        <button @click="activeTabIndex = 1" :class="{_active: activeTabIndex === 1}"
                class=" upgrade-types__type flex-1 rounded-full text-white font-medium">
          Добыча
        </button>
        <button @click="activeTabIndex = 2" :class="{_active: activeTabIndex === 2}"
                class=" upgrade-types__type flex-1 text-white font-medium">
          Броня
        </button>
        <button @click="activeTabIndex = 3" :class="{_active: activeTabIndex === 3}"
                class=" upgrade-types__type flex-1 text-white font-medium">
          Двигатель
        </button>
        <button @click="activeTabIndex = 4"
                :class="{_active: activeTabIndex === 4, '_main-active': activeTabIndex === 4}"
                class=" upgrade-types__type flex-1 text-white font-medium text-yellow-500">
          Особое
        </button>
      </div>

      <!-- Upgrade cards grid -->
      <div v-show="activeTabIndex ===1" class=" upgrade-parts">
        <!-- Card 1: Upgradable -->
        <div v-for="n in 8" class="bg-gray-900 rounded-xl overflow-hidden upgrade-parts__part"
             :class="{
          'max-level': (n % 2) === 0,
        }">
          <div class="flex items-center justify-between">
            <div class="upgrade-parts__part-level">
              1 Ур.
            </div>
            <div class="text-yellow-500 text-xs font-medium">
              35K Монет
            </div>

          </div>
          <div class="upgrade-parts__part-img">
            <img src="@/assets/upgrade-part-img.png" alt="">
          </div>
          <div class="text-center upgrade-parts__part-footer">
            <div class="font-medium mb-1">Дрон добытчик</div>
            <div class="text-gray-400 text-sm mb-3">+35K к добычи</div>
            <button
              @click="openBottomSheet"
              class="w-full upgrade-parts__part-btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
              {{ ((n % 2) !== 0) ? 'Улучшить' : 'Максимальный уровень' }}
            </button>
          </div>
        </div>
      </div>
      <div v-show="activeTabIndex ===2" class=" upgrade-parts">
        <!-- Card 1: Upgradable -->
        <div v-for="n in 5" class="bg-gray-900 rounded-xl overflow-hidden upgrade-parts__part"
             :class="{
          'max-level': (n % 2) === 0,
        }">
          <div class="flex items-center justify-between">
            <div class="upgrade-parts__part-level">
              1 Ур.
            </div>
            <div class="text-yellow-500 text-xs font-medium">
              35K Монет
            </div>

          </div>
          <div class="upgrade-parts__part-img">
            <img src="@/assets/upgrade-part-img.png" alt="">
          </div>
          <div class="text-center upgrade-parts__part-footer">
            <div class="font-medium mb-1">Дрон добытчик</div>
            <div class="text-gray-400 text-sm mb-3">+35K к добычи</div>
            <button
              class="w-full upgrade-parts__part-btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
              {{ ((n % 2) !== 0) ? 'Улучшить' : 'Максимальный уровень' }}
            </button>
          </div>
        </div>
      </div>
      <div v-show="activeTabIndex ===3" class=" upgrade-parts">
        <!-- Card 1: Upgradable -->
        <div v-for="n in 4" class="bg-gray-900 rounded-xl overflow-hidden upgrade-parts__part"
             :class="{
          'max-level': (n % 2) === 0,
        }">
          <div class="flex items-center justify-between">
            <div class="upgrade-parts__part-level">
              1 Ур.
            </div>
            <div class="text-yellow-500 text-xs font-medium">
              35K Монет
            </div>

          </div>
          <div class="upgrade-parts__part-img">
            <img src="@/assets/upgrade-part-img.png" alt="">
          </div>
          <div class="text-center upgrade-parts__part-footer">
            <div class="font-medium mb-1">Дрон добытчик</div>
            <div class="text-gray-400 text-sm mb-3">+35K к добычи</div>
            <button
              class="w-full upgrade-parts__part-btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
              {{ ((n % 2) !== 0) ? 'Улучшить' : 'Максимальный уровень' }}
            </button>
          </div>
        </div>
      </div>

      <div v-show="activeTabIndex === 4 " class="special-tabs">
        <p class="title">
          Специальные улучшения
        </p>
        <div>
          <div class="special-tabs__notification">
            <div></div>
            <div>
              <div class="notify-title">
                Название заголовка
              </div>
              <div class="notify-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="notify-suprise">
                <span class="text-[#F3BE5C]">35К Монет</span> и <span class="text-[#C35CF3]">500К камня</span>
              </div>
            </div>
          </div>
          <div class="special-tabs__notification">
            <img src="@/assets/Group%2081.png" alt="">
            <div>
              <div class="notify-title">
                Название заголовка
              </div>
              <div class="notify-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="notify-end-task">
                Задание выполнено
              </div>
            </div>
          </div>
        </div>
        <p class="title">
          Ежедневные задания
        </p>
        <div class="special-tasks">
          <div v-for="n in 4" class="special-task">
            <div class="special-task__timer">
              <img src="@/assets/icons/mingcute_time-fill.svg" alt="">
              <span>12:00</span>
            </div>
            <div class="notify-title">
              Название заголовка
            </div>
            <div class="notify-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="special-task__items">
              <div v-for="n in 4" class="task">
                <div :class="{checked: n === 1}" class="checkbox">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.28711 0.957031L9.87793 1.54297L3.33496 8.09082L0.12207 4.87793L0.712891 4.28711L3.33496 6.90918L9.28711 0.957031Z"
                      fill="white" fill-opacity="0.14"/>
                  </svg>

                </div>
                <div class="task-title">
                  Пригласить <span>1 друга</span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between !mt-[12px]">
              <div class="notify-suprise">
                <span class="text-[#F3BE5C]">35К Монет</span> и <span class="text-[#C35CF3]">500К камня</span>
              </div>
              <a href="#" class="share-link">
                <span>t.me/zalupa_bobra</span>
                <img src="@/assets/icons/bxs_share.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UpgradePartBottomSheet v-model:is-open="showBottomSheet"/>
  </div>
</template>

<style scoped lang="scss">
@keyframes twinkle {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

.tabs {
  border: 1px solid #7147A4;

  .first {
    background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
  }
}

.upgrade-page {
  background: url("@/assets/iPhone 16 - 12.png") no-repeat center;
  background-size: cover;
}

.header {
  height: 232px;
  background: url("@/assets/ship.png") no-repeat center;
  background-size: contain;
}

.upgrade-types {
  border: 1px solid #222222;
  padding: 7px 13px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(8px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
      box-shadow: 0px 4px 13.9px 0px rgba(255, 255, 255, 0.25) inset;
      background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
      box-shadow: 0px 4px 29.2px 0px rgba(157, 86, 244, 0.31);
    }

    &._main-active {
      background: linear-gradient(180deg, #DEB058 0%, #A5851E 100%);

      border: 1px solid #D8BC7B;
      box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset;

      box-shadow: 0px 4px 29.2px 0px #DEB0584F;

      color: #ffffff;
    }
  }
}

.upgrade-parts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
  overflow: auto;

  &__part {
    border: 0.5px solid #262626;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    padding: 7px 9px;
  }

  &__part.max-level {
    background: rgba(255, 196, 85, 0.17);

    .upgrade-parts__part-btn {
      background: linear-gradient(180deg, #616161 0%, #363636 100%);
      border-color: #644E21;
      box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset, 0px 4px 29.2px 0px #6161614F;
      color: #AAAAAA;

    }
  }

  &__part-level {
    border: 0.5px solid rgba(157, 86, 244, 1);
    color: rgba(157, 86, 244, 1);
    background: transparent;
    width: 38px;
    height: 21px;
    border-radius: 6px;
    font-family: Stapel;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__part-img {
    width: 113px;
    height: 113px;
    background: url("@/assets/upgrade-part-bg.png") no-repeat center;
    background-size: inherit;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  &__part-btn {
    border: 1px solid rgba(197, 158, 245, 1);
    margin-top: 19px;
    box-shadow: 0px 4px 13.9px 0px rgba(255, 255, 255, 0.25) inset;
    background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
    box-shadow: 0px 4px 29.2px 0px rgba(157, 86, 244, 0.31);
    font-family: Stapel;
    height: 36px;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0%;
  }
}

.special-tabs {
  .title {
    font-family: Stapel;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    margin-bottom: 12px;

  }

  &__notification {
    padding: 13px 17px;
    border: 0.5px solid #202020;
    border-radius: 13px;
    background: #141414;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    img {
      width: 50px;
      object-fit: cover;
      height: 50px;
      margin-right: 17px;
    }

  }

  .special-tasks {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 11px;

    .special-task {
      padding: 13px 17px;
      border: 1px solid #202020;
      border-radius: 13px;
      background: #141414;
      backdrop-filter: blur(8px);
      position: relative;
      overflow: hidden;

      .share-link {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        margin-left: auto;
        text-decoration: none;
        color: #747474 !important;
        border: 0.5px dashed #747474;
        padding: 3px 6px;
        border-radius: 4px;
        gap: 17px;


        span {
          font-family: Stapel;
          font-weight: 400;
          font-size: 10px;
          line-height: 100%;
          letter-spacing: 0%;
          color: #747474 !important;
        }

        img {
          width: 16px;
          height: 16px;
        }
      }

      &__timer {
        font-family: Stapel;
        font-weight: 400;
        font-size: 10px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #FFFFFF;
        border: 1px solid #383838;
        border-bottom-left-radius: 13px;
        border-top-right-radius: 13px;
        position: absolute;
        top: 0px;
        right: 0px;
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 5px 12px;
        background: #262626;
      }

      &__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 7px;
        padding-bottom: 7px;
        margin-left: -17px;
        margin-right: -17px;
        padding-left: 0;
        padding-right: 0;
        background: #1B1B1B;
        row-gap: 5px;

        .task {
          padding-left: 17px;
          display: flex;
          align-items: center;
          gap: 6px;
          max-width: max-content;

          .checkbox {
            background: #2D2D2D;
            width: 16px;
            height: 16px;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ffffff20;

            &.checked {
              svg {
                path {
                  fill: #B4FF92 !important;
                  fill-opacity: 1;
                }
              }
            }
          }

          &-title {
            font-family: Stapel;
            font-weight: 400;
            font-size: 10px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #FFFFFFA6;

            span {
              color: #FFFFFF;
            }
          }

        }
      }
    }
  }

  .notify-title {
    font-family: Stapel;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;

  }

  .notify-description {
    font-family: Stapel;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFFA6;
    margin-top: 3px;
    margin-bottom: 11px;
    display: block;
    max-width: 294px;
  }

  .notify-suprise {
    font-family: Stapel;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFFA6;

    span:first-child {
      font-family: Stapel;
      font-weight: 400;
      font-size: 10px;
      line-height: 100%;
      letter-spacing: 0%;

    }

    span:last-child {
      font-family: Stapel;
      font-weight: 400;
      font-size: 10px;
      line-height: 100%;
      letter-spacing: 0%;
    }

  }

  .notify-end-task {
    font-family: Stapel;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #B4FF92;

  }
}
</style>

