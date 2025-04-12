<script setup lang="ts">

import BaseBottomSheet from "@/components/BaseBottomSheet.vue";
</script>

<template>
  <BaseBottomSheet>
    <div class="upgrade-part">
      <div class="upgrade-part__image">
        <img src="@/assets/dron.png" alt="">
      </div>
      <div class="upgrade-part__info">
        <div class="upgrade-part__leveling">
          <p class="text-[10px] font-[400] text-[#FFFFFF]">
            1 Ур.
          </p>
          <img src="@/assets/icons/tabler_arrow-up.svg" alt="">
          <p class="text-[10px] font-[400] text-[#9D56F4]">
            1 Ур.
          </p>
        </div>
        <div class="upgrade-part__title">Дрон добытчик</div>
        <div class="upgrade-part__desc">
          +35К к добычи
        </div>
        <div class="upgrade-part__tags">
          <div class="upgrade-part__level">
            1 Ур.
          </div>
          <div class="upgrade-part__fuel">
            <img src="@/assets/icons/image%2017.svg" alt="">
            <span>
              156
            </span>
          </div>
          <div class="upgrade-part__damage">
            156кк урона
          </div>
        </div>
        <div class="upgrade-part__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
        <div class="upgrade-part__btns">
          <button class="buy-btn">
            Купить за 500к монет
          </button>
          <button class="star-btn">
            <img src="@/assets/icons/solar_stars-bold.svg" alt="">
            1115
          </button>
        </div>
      </div>
    </div>
  </BaseBottomSheet>
</template>

<style scoped lang="scss">
.upgrade-part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__image {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("@/assets/upgrade-part-bg.png") no-repeat center;
    background-size: inherit;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__leveling {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;

  }

  &__tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 15px;
    margin-bottom: 17px;
  }

  &__content {
    font-family: Stapel;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFFA6;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 33px;
    margin-bottom: 44px;

    .buy-btn {
      background: linear-gradient(180deg, #ADCA47 12.5%, #546515 146.43%);
      box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset, 0px 4px 29.2px 0px #ADCA474F;
      border-color: #D2E197;
    }


    .star-btn {
      background: linear-gradient(180deg, #FFD941 12.5%, #655215 146.43%);
      border-color: #FFEA94;
      box-shadow: 0px 4px 13.9px 0px #FFFFFF40 inset,
      0px 4px 29.2px 0px #FFD9414F;

    }

    button {
      height: 57px;
      border: 1px solid;
      border-radius: 6px;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 17px 23px;
      font-family: Stapel;
      font-weight: 400;
      font-size: 15px;
      line-height: 100%;
      letter-spacing: 0%;

    }
  }

  &__level, &__fuel, &__damage {
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

  &__fuel {
    width: max-content !important;
    gap: 6px;
    border-color: #D9FF53;
    color: #D9FF53;
    padding-left: 4px;
    padding-right: 4px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  &__damage {
    width: max-content !important;
    gap: 6px;
    border-color: #F3BE5C;
    color: #F3BE5C;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 11px;
    padding-right: 11px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  &__title {
    font-family: Stapel;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: center;
  }

  &__desc {
    font-family: Stapel;
    font-weight: 400;
    font-size: 11px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF82;
    text-align: center;
    margin-top: 5px;
  }

  &__infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
