<template>

 <el-container style="border: 1px solid #eee">
            <Aside></Aside>
            <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                  <i class="el-icon-setting" style="margin-right: 15px"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
              </el-header>
              
              <el-main>
                <div class="statistical">
                  <div class="one">
                      <div class="lineChart" id="lineChart"></div>
                  </div>
                  <div class="tow">
                      <div class="histogram" id="histogram"></div>
                  </div>
                </div>
                <div class="statistical">
                  <div class="one">
                      
                  </div>
                  <div class="tow  three">
                      <div class="pieChart" id="pieChart"></div>
                  </div>
                </div>
                
               
                
                
              </el-main>
            </el-container>
      </el-container>


</template>


<script>
import Aside from '../components/Aside.vue';
import echarts from 'echarts';
  export default {
   
    data() {
      return {
        content:'# hello'
      }
    },
    components:{
      Aside
    },
    mounted(){
      this.drawLine();
      this.lineChart();
      this.pieLine();
    },
    methods: {
      lineChart(){
        let linechart = echarts.init(document.getElementById('lineChart'));
          var option = null;
          option = {
              title: { text: '同比增长/下降' },
              xAxis: {
                  type: 'category',
                  data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320, 990, 880, 678, 980, 670],
                  type: 'line'
              }]
          };
          if (option && typeof option === "object") {
                linechart.setOption(option, true);
            }
      },
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('histogram'))
          // 绘制图表
          myChart.setOption({
              title: { text: '柱状图统计'},
              tooltip: {},
              xAxis: {
                  data: ["一月","二月","三月","四月","五月","六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
              }]
          });
      },
      pieLine(){
        var pieChart = echarts.init(document.getElementById('pieChart'));
        var option = null;
        var data = genData(20);

        option = {
            title : {
                text: '同名数量统计',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 5,
                top: 20,
                bottom: 20,
                data: data.legendData,
                selected: data.selected
            },
            series : [
                {
                    name: '姓名',
                    type: 'pie',
                    radius : '40%',
                    center: ['50%', '80%'],
                    data: data.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };




        function genData(count) {
            var nameList = [ '赵', '钱', '孙'];
            var legendData = [];
            var seriesData = [];
            var selected = {};
            for (var i = 0; i <3; i++) {
                name = Math.random() > 0.65
                    ? makeWord(4, 1) + '·' + makeWord(3, 0)
                    : makeWord(2, 1);
                legendData.push(name);
                seriesData.push({
                    name: name,
                    value: Math.round(Math.random() * 100000)
                });
                selected[name] = i < 6;
            }

            return {
                legendData: legendData,
                seriesData: seriesData,
                selected: selected
            };

            function makeWord(max, min) {
                var nameLen = Math.ceil(Math.random() * max + min);
                var name = [];
                for (var i = 0; i < nameLen; i++) {
                    name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
                }
                return name.join('');
            }
        }
        ;
        if (option && typeof option === "object") {
            pieChart.setOption(option, true);
        }
      }
    }

  }
</script>

<style scoped>
.statistical{
  width: 1300px;
  overflow: hidden;
  margin-bottom: 40px;
}
.one{
  width: 600px;
  height:350px;
  float: left;
}

.tow{
  width: 700px;
  height: 350px;
  float: right;
}

.three{
  width: 450px;
  height: 350px;
}

.lineChart{
  width: 500px;
  height:350px;
}
.histogram{
  height: 350px;
  width: 600px;
}
.pieChart{
  width: 300px;
  height:350px;
}
</style>
