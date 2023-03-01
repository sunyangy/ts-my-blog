<script setup lang="ts">
import * as Article from "../../api/article";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

type articleType = {
  title: string;
  content: string;
};

const article: articleType = reactive({
  title: "",
  content: "# hello world",
});

const pushAricle = async () => {
  const result = await Article.reqPubArticle(article);
  if (result.code == "200") {
    ElMessage({
      type: "success",
      message: "博客发表成功",
    });
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  } else {
    ElMessage({
      type: "error",
      message: "博客发表失败",
    });
  }
};

const onChange = (val: string) => {};

const onUploadImg = (files: any) => {
  console.log(Array.from(files));
};
</script>

<template>
  <div>
    <div class="btn-container">
      <div class="input-container">
        <label for="title"></label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="请输入标题"
          v-model="article.title"
        />
      </div>
      <button class="btn-63" @click="pushAricle"><span>发布</span></button>
    </div>
    <md-editor
      style="height: 80vh"
      v-model="article.content"
      @onChange="onChange"
      @onUploadImg="onUploadImg"
    />
  </div>
</template>

<style scoped lang="less">
.btn-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  .input-container {
    #title {
      height: 100%;
      width: 20rem;
      margin-left: 2rem;
      padding: 1rem;
      border-radius: 10px;
    }

    #title:focus {
      //   border: 1px solid skyblue;
      outline: none;
      border-color: skyblue;
    }
  }

  .btn-63 {
    margin-right: 10rem;
  }
}

.btn-63,
.btn-63 *,
.btn-63 :after,
.btn-63 :before,
.btn-63:after,
.btn-63:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-63 {
  -webkit-tap-highlight-color: transparent;
  background-color: #000;
  background-image: none;
  color: #53aa56;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}
.btn-63:disabled {
  cursor: default;
}
.btn-63:-moz-focusring {
  outline: auto;
}
.btn-63 svg {
  display: block;
}
.btn-63 [hidden] {
  display: none;
}
.btn-63 {
  background: none;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-weight: 900;
  padding: 1.5rem 4rem;
  position: relative;
  text-transform: uppercase;
}
.btn-63 span {
  background: #53aa56;
  border: 1px solid;
  border-radius: 1rem;
  display: grid;
  inset: 0;
  place-items: center;
  pointer-events: none;
  position: absolute;
}
.btn-63:hover span {
  -webkit-animation: headShake 0.8s;
  animation: headShake 0.8s;
}
@-webkit-keyframes headShake {
  0% {
    transform: translateX(0);
  }
  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes headShake {
  0% {
    transform: translateX(0);
  }
  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
