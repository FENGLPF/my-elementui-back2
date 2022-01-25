<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Echarts使用示例</span>
      </div>
      <div>
        <div id="chartColumn" style="width: 100%; height: 400px;">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "Echarts",
  data() {
    return {
      chartColumn: null
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine(){
      this.chartColumn = echarts.init(document.getElementById('chartColumn'));

      this.chartColumn.setOption({
        title: { text: 'Column Chart' },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      });
    }
  }
}
</script>

<style scoped>

</style>
