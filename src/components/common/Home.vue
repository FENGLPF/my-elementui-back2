<template>
  <div>
    <el-row :gutter="16" class="my-row">
      <el-col :sm="16" style="height: 100%">
        <el-row :gutter="14" style="margin-bottom: 10px">
          <el-col :sm="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :sm="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :sm="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="14">
          <el-col :sm="12">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :sm="12">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="8">
        <el-card shadow="hover">
          鼠标悬浮时显示-右侧列
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.el-card {
  border-radius: 10px;
  /*margin: 5px;*/
  min-width: 100%;
  height: 100%;
  /*margin-right: 20px;*/
  transition: all .5s;
}
.my-row {
  /*margin-bottom: 20px;*/
  display: flex;
  flex-wrap: wrap
}
</style>
