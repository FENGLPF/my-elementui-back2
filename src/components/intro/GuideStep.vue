<template>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span>vue-guide：有warn，未解决</span>
        </div>
        <div >
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button id="step_1" type="primary">主要按钮</el-button>
            <el-button id="step_2" type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button @click="myGuide" type="danger">危险按钮</el-button>
          </el-row>
        </div>
      </el-card>
</template>

<script>
import Guide from 'vue-guide'
export default {
  name: "GuideStep",
  data() {
    return {

    }
  },
  async mounted() {

  },
  methods: {
    myGuide() {
      Guide({
        elements: [
          {
            target: '#step_1', // id
            text: 'test1',
            // placement: 'right-top',
          },
          {
            target: '#step_2', // vue ref
            text: 'test2',
            // placement: 'right-bottom',
          },
        ],
      });
    }
  }
}
</script>

<style scoped>

</style>
