<script lang="ts">
import dron from '../assets/dron.png'
import coin from '../assets/icons/coin.svg'


export default {
  data() {
    return {
      freeze: false,
      rolling: false,
      wheelDeg: 0,
      prizeNumber: 8,
      prizeListOrigin: [
        {
          icon: coin,
          name: "$10000"
        },
        {
          icon: dron,
          name: "Thank you!",
          type: 'default'
        },
        {
          icon: coin,

          type: 'medium',
          name: "$500"
        },
        {
          icon: coin,
          type: 'rare',
          name: "$100"
        },
        {
          icon: dron,
          type: 'super',
          name: "Thank you!"
        },
        {
          icon: dron,
          name: "$50"
        },
        {
          icon: dron,
          name: "$10"
        },
        {
          icon: dron,
          name: "Thank you!"
        }
      ]
    };
  },
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber);
    }
  },
  methods: {
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      const result = Math.floor(Math.random() * this.prizeList.length);
      this.roll(result);
    },
    roll(result) {
      this.rolling = true;
      const {wheelDeg, prizeList} = this;
      this.wheelDeg =
        wheelDeg -
        wheelDeg % 360 +
        6 * 360 +
        (360 - 360 / prizeList.length * result);
      setTimeout(() => {
        this.rolling = false;
        alert("Result：" + prizeList[result].name);
      }, 4500);
    }
  },
  watch: {
    prizeNumber() {
      this.freeze = true;
      this.wheelDeg = 0;

      setTimeout(() => {
        this.freeze = false;
      }, 0);
    }
  }
}
</script>

<template>
  <div class="fortune-page">
    <div class="wheel-wrapper">
      <div class="wheel-content">
        <div class="wheel-titles">
          <div class="wheel-title">КОЛЕСО ФОРТУНЫ</div>
          <div class="wheel-subtitle">КАЖДЫЙ ДЕНЬ ГРУЗОВОЙ ШАТЛ ПРИЛЕТАЕТ С ПОДАРКАМИ</div>

        </div>
        <div class="wheel-circle !mb-[50px]">
          <div class="_wheel-wrapper">
            <div
              class="wheel-pointer"
              @click="onClickRotate"
            >
            </div>
            <div
              class="wheel-bg"
              :class="{freeze: freeze}"
              :style="`transform: rotate(${wheelDeg}deg)`"
            >
              <div class="prize-list">
                <div
                  class="prize-item-wrapper"
                  v-for="(item,index) in prizeList"
                  :key="index"

                >
                  <div
                    class="prize-item"
                    :style="{
                    backgroundImage:`var(--${item.type || 'default'}-prize)`,
                    transform: `rotate(${(360/ prizeList.length) * index}deg)`
                  }"
                  >

                    <div class="prize-icon">
                      <img :src="item.icon">
                    </div>
                    <div class="prize-name">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="!px-[26px]">
          <div
            class="bg-[#ffffff20] w-full backdrop-blur-sm rounded-[13px] flex items-center justify-between !px-[10px] !py-[10px]">
            <div class=" flex items-center gap-[7px] text-[10px] font-[400] text-[#FFFFFF]">
              <img src="@/assets/icons/ruletka.png" alt="">
              <div>
                <p class="">
                  Спинов
                </p>
                <p class="text-[13px] text-[#C28FFF]">453</p>
              </div>
            </div>
            <button
              class=" get-spin-btn text-white font-medium py-2 rounded-lg transition-colors !px-[12px]">
              Получить спины
            </button>
          </div>
        </div>
        <div class="!px-[26px] !mt-[12px]">
          <button class="wheel-btn">
            Крутить колесо фортуны
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.fortune-page {
  background: url("@/assets/iPhone 16 - 17.jpg") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wheel-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 278px;
    height: 745px;
    background: #0F0F0F;
    position: relative;
    border-radius: 24px;

    .wheel-content {
      position: relative;
      z-index: 2;
      width: 100%;

    }

    &:before {
      content: "";
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      width: calc(100% + 20px);
      background: rgba(15, 15, 15, 0.30);
      border-radius: 24px;
    }

    &:after {
      position: absolute;
      bottom: -10px;
      background: url("@/assets/icons/fartuna-bottom-bg.png") no-repeat center;
      height: 278px;
      width: 534px;
    }
  }

  .wheel-titles {
    padding-top: 22px;
    max-width: 185px;
    margin-left: auto;
    margin-right: auto;

    .wheel-title {
      margin-bottom: 6px;
      font-family: Stapel;
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: center;
      text-transform: uppercase;
      color: #FFDE5C;
    }

    .wheel-subtitle {
      font-family: Stapel;
      font-weight: 400;
      font-size: 9px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFFAB;
    }
  }

  .wheel-circle {
    height: 396px;
    position: relative;
    margin-top: 30px;
  }
}

._wheel-wrapper {
  width: 420px;
  height: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 9px;
  border-radius: 1000px;

}

.wheel-pointer {
  width: 100px;
  height: 100px;
  border-radius: 1000px;
  background: #FFC455;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 60px;
  z-index: 10;
  cursor: pointer;
  box-shadow: 0px 0px 34.1px 0px #FFEBC7 inset , 0px 4px 80.9px 0px #FFC455;



  &::after {
    content: "";
    position: absolute;
    top: -28px;
    width: 38px;
    height: 52px;
    background:  url("@/assets/icons/wheel-arrow.svg") no-repeat center;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
  }
}

.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  overflow: hidden;
  transition: transform 4s ease-in-out;
  background: #0F0F0F;
  background: url("@/assets/Group 156.png") no-repeat center;

  box-shadow: 0px 0px 34.1px 0px #2A2C36 inset;

  &.freeze {
    transition: none;
    background: red;
  }
}

.prize-list {
  width: 95%;
  height: 95%;
  position: relative;
  text-align: center;
  transform: translate(10px, 15px);
  overflow: hidden;
  background: transparent;
}

.prize-item-wrapper {

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 186px;
}

.prize-item {
  --default-prize: url("@/assets/[Linked] Ellipse 17.png");
  --medium-prize: url("@/assets/whell-prize-bg-purple.png");
  --rare-prize: url("@/assets/whell-prize-bg-red.png");
  --super-prize: url("@/assets/whell-prize-bg-red.png");

  width: 100%;
  height: 100%;
  transform-origin: bottom;
  background-image: var(--default-prize);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 80%;
  background-position-y: -25px;
  .prize-name {
    font-family: Stapel;
    font-weight: 400;
    font-size: 9px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 8px 0 0;
  }

  .prize-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 47px;
      height: 47px;
    }
  }
}

.get-spin-btn {
  border: 1px solid rgba(197, 158, 245, 1);
  box-shadow: 0px 4px 13.9px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 29.2px 0px rgba(157, 86, 244, 0.31);
  background: linear-gradient(180deg, #9D56F4 0%, #5B328E 100%);
  font-family: Stapel;
  height: 28px;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  letter-spacing: 0%;

}

.wheel-btn {

  background: linear-gradient(180deg, #ADCA47 12.5%, #546515 146.43%);
  width: 100%;
  height: 46px;
  border-radius: 6px;
  border: 1px solid #D1E297;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset, 0px 4px 29.2px 0px #ADCA474F;
  color: #FFFFFF;

}
</style>
