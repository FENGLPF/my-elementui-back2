<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix" id="step_1">
        <span>IntroJS：有bug，引导动画会遮盖原本内容</span>
      </div>
      <div id="step_2">
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button @click="setGuide" type="danger">危险按钮</el-button>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "IntroStep",
  data() {
    return {

    }
  },
  mounted() {
    // this.setGuide()
  },
  methods: {
    setGuide() {
      let data=[
        {element: '#step_1',intro: '步骤1',position: 'right'},
        {element: '#step_2',intro: '步骤2',position: 'left'},
      ]
      this.$intro().setOptions({
        prevLabel: "上一步",
        nextLabel: "下一步",
        skipLabel: "跳过",
        doneLabel: "我知道了",
        steps:data,
        overlayOpacity: 0.4,
        hidePrev: true,
        hideNext: true,
        showStepNumbers: true,
        highlightClass: "highlight",
        exitOnOverlayClick: false,
        tooltipClass: "tool-tip",
      }).oncomplete(()=> {
        //点击结束按钮后执行的事件
      }).onexit(()=> {
        //点击跳过按钮后执行的事件
      }).start()
    },
  }
}
</script>

<style scoped>

</style>
