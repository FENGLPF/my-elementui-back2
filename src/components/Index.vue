<template>
  <div class="mainDiv">
    <el-container style="height: 100%">
      <el-header>
        <Header/>
      </el-header>
      <el-container >
        <el-aside width="auto" style="height: 100%">
          <Aside/>
        </el-aside>
        <el-main>
          <el-container>
            <el-header style="background-color: #f1f4f5;padding: 0;height: 40px">
              <AppTag class="app-tag"></AppTag>
              <el-divider></el-divider>
            </el-header>
            <el-main>
              <keep-alive :include="keepAlive" >
                <router-view class="main-content"/>
              </keep-alive>
            </el-main>
          </el-container>

<!--          <router-view class="main-content"/>-->
<!--          <router-view class="main-content" v-if="!$route.meta.keepAlive"></router-view>-->
<!--          <keep-alive>-->
<!--            <router-view class="main-content" v-if="$route.meta.keepAlive"></router-view>-->
<!--          </keep-alive>-->

        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import Header from "@/components/common/Header";
import Aside from "@/components/common/Aside";
import AppTag from "@/components/common/AppTag";

export default {
  name: "Index",
  components: {AppTag, Header, Aside},
  data() {
    return {

    }
  },
  computed: {
    keepAlive() {
      return this.$store.getters["appTag/getTagList"]
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
.mainDiv {
  position: fixed;
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #545c64;
  padding: 0;
}
.el-main {
  padding:  8px 8px 40px 8px;
  height: 100%;
  overflow: auto;
  background-color: #f1f4f5;
  /*padding-bottom: 100px;*/
}
.el-container {
  height: 100%;
}
.el-divider--horizontal {
  margin: 10px 0;
}
.main-content {
  border-radius: 2px;
  margin: 5px;
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
</style>
