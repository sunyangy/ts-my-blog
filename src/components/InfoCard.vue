<script setup lang="ts">
import { ref } from "vue";
const mask = ref();
console.log(mask);
const showAvatar = () => {
  console.log(1);
  mask.value.style.display = "block";
};
const closeMask = () => {
  mask.value.style.display = "none";
};
</script>

<template>
  <aside class="info-container" id="info">
    <div class="avatar" @click="showAvatar">
      <img src="../assets/image/fin.jpg" alt="" />
    </div>
    <div class="mask" ref="mask">
      <span class="icon" @click="closeMask">x</span>
      <div
        style="
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        "
      >
        <img src="../assets/image/fin.jpg" alt="" />
      </div>
    </div>
    <h3 class="name">Fin</h3>
    <p class="sign">念念不忘，必有回响</p>
    <div class="social">
      <span
        ><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-github"></use>
        </svg>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youxiang4"></use>
        </svg>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-twitter-circle-fill"></use>
        </svg>
      </span>
    </div>
  </aside>
</template>

<style scoped lang="less">
.info-container {
  position: sticky;
  top: 6rem;
  width: 20rem;
  height: 22rem;
  padding-top: 3rem;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  .avatar {
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .name {
    margin-top: 1.5rem;
    font-size: 20px;
    color: #006644;
  }
  .sign {
    margin-top: 1rem;
    color: #808080;
    font-weight: 900;
  }
  .social {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem;
    span {
      display: inline-block;
      padding: 1rem;
      cursor: pointer;
      svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #808080;
  display: none;
}

.mask .icon {
  position: fixed;
  cursor: pointer;
  top: 1rem;
  right: 2rem;
  color: blanchedalmond;
  font-size: 2rem;
}

.mask img {
  margin: auto;
  z-index: 999;
}
</style>
