<script setup lang="ts">
import Markdown from "vue3-markdown-it";
import { marked } from "marked";
import * as Article from "../../api/article";
import { useRoute } from "vue-router";
import { computed, onMounted, reactive } from "vue";
const route = useRoute();
const { articleId } = route.params;
const state = reactive({
  article: {},
});

const getArticleDetail = async () => {
  const result = await Article.reqGetArticleById(articleId);

  state.article = result.data.article;
};

const markedtext = computed(() => {
  return marked.parse(state.article.content);
});

onMounted(() => {
  getArticleDetail();
});
</script>

<template>
  <article>
    <!-- <div v-html="markedtext"></div> -->
    <div class="top">
      <h1 class="title">{{ state.article.title }}</h1>
      <p class="time">{{ state.article.updateTime?.split("T")[0] }}</p>
    </div>
    <div class="markdown-con">
      <Markdown :source="state.article.content" />
    </div>
  </article>
</template>

<style scoped lang="less">
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
  line-height: 2.5rem;
  align-items: center;
  justify-content: center;
}
</style>
