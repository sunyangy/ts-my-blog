<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="navigate-container">
    <nav class="navigate">
      <div class="nav-items">
        <span @click="router.push('/home')">博客</span>
        <span @click="router.push('/art')">艺术</span>
        <span @click="router.push('/article')">写文章</span>
        <span @click="router.push('/about')">关于我</span>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="less">
.navigate-container {
  height: 4rem;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  .navigate {
    width: 100rem;
    max-width: 1120px;
    display: flex;
    justify-content: end;
    .nav-items {
      width: 20rem;
      display: flex;
      justify-content: space-around;

      span {
        font-size: 22px;
        font-weight: 900;
        color: #75a3a3;
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 750px) {
  .navigate-container {
    .navigate {
      display: flex;
      justify-content: center;

      .nav-items {
        display: flex;
      }
    }
  }
}
</style>
