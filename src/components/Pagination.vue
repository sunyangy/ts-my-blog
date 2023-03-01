<script setup lang="ts">
import { onMounted } from "vue";
import * as Article from "./../api/article";
const props = defineProps({
  total: Number,
  size: {
    default: 5,
    type: Number,
  },
});

const handleCurrentChange = async (val: number) => {
  const result = await getArticleList(val, props.size);
  console.log(result);
};

const getArticleList = async (page: number, size: number) => {
  const result = await Article.reqGetArticleList(page, size);
  return result;
};

onMounted(() => {
  handleCurrentChange(1);
});
</script>

<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="100"
    class="mt-4"
    @current-change="handleCurrentChange"
  />
</template>

<style scoped lang="less"></style>
