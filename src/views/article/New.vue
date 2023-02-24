<script setup lang="ts">
import Markdown from "vue3-markdown-it";
const source = `## 这是


- 大飒飒的
- 大撒大撒

大苏打实打


1. 伟大的adasdsd
2. 打算大苏打是
`;
</script>

<template>
  <article>
    <div class="top">
      <h1 class="title">人生无论怎么度过都像是浪费</h1>
      <p class="time">January 25, 2023</p>
    </div>
    <div class="markdown-con">
      <Markdown :source="source" />
    </div>
  </article>
</template>

<style scoped lang="less">
.top {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 2.5rem;
    padding: 1.5rem;
  }

  .time {
    font-size: 1rem;
    font-weight: 900;
    color: cadetblue;
  }
}

.markdown-con {
  display: flex;
  width: 60vw;
  margin-top: 2rem;
  justify-content: center;
}
</style>
