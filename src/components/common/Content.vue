<template>
  <el-main class="content">
<!--    <router-view />-->
    <el-card class="card" shadow="hover">
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-card>
  </el-main>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
.content {
  background-color: #f1f4f5;
}
.card {
  height: 100%;
}
</style>
