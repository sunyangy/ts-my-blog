<script setup lang="ts">
import Markdown from "vue3-markdown-it";
import InfoCard from "../../components/InfoCard.vue";
import Pagination from "../../components/Pagination.vue";
import * as Article from "../../api/article";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const state = reactive({
  total: 0,
  page: 1,
  size: 5,
  articles: [],
});
onMounted(() => {
  getArticleList();
});
const getArticleList = async () => {
  const result = await Article.reqGetArticleList(state.page, state.size);
  state.articles = result.data.result;
  state.total = result.data.total;
};

const handleCurrentChange = async (val: number) => {
  const result = await Article.reqGetArticleList(val, state.size);
  state.page = val;
  state.articles = result.data.result;
};
</script>

<template>
  <!-- <el-button type="primary">点击</el-button> -->
  <div class="container">
    <div class="main-container">
      <InfoCard />
      <main class="article-container" id="article-container">
        <article
          class="article-item"
          v-for="article in state.articles"
          :key="article.id"
          @click="router.push(`/new/${article.id}`)"
        >
          <span class="time">{{ article.createTime.split("T")[0] }}</span>
          <h3 class="title">{{ article.title }}</h3>
          <!-- <div class="content">
            <Markdown :source="article.content" />
          </div> -->
        </article>
      </main>
    </div>
  </div>
  <div class="page">
    <el-pagination
      background
      :total="state.total"
      :current-page="state.page"
      :page-size="5"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
    ></el-pagination>
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: center;
}
.main-container {
  width: 95rem;
  max-width: 1600px;
  display: flex;
  // justify-content: space-between;
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

  .article-container {
    width: 70rem;
    // border-bottom: 1px solid saddlebrown;
    .article-item {
      // height: 12rem;
      padding: 1rem 0;
      border-bottom: 2px solid #478566;
      overflow: hidden;
      cursor: pointer;
      .time {
        font-size: 18;
        font-weight: 900;
        color: #999999;
      }
      .title {
        font-size: 32px;
        margin: 0.8rem 0;
      }

      .content {
        line-height: 1.5rem;
      }
    }
  }
}

.page {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 1536px) {
  .main-container {
    width: 90vw;

    #info {
      position: sticky;
      top: 6rem;
      .sign {
        font-size: 1px;
        font-weight: 100;
      }
    }
  }
}
@media (max-width: 768px) {
  #info {
    padding-top: 0rem;
    height: 17.5rem;

    .social {
      margin: 0rem;
    }
  }
}

@media (max-width: 750px) {
  #info {
    display: none;
  }

  #article-container {
    width: 100%;
    padding: 0 1rem;

    .article-item {
      width: 100%;
    }
  }
}
</style>
