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
                    
                <div class="order_title">
                  <h5>订单管理</h5>
                  <span>最新订单列表</span>
                </div>

                <div class="order_notice">
                  <div class="notices">
                      <h3><i class="el-icon-edit"></i>待收款</h3>
                      <div><span class="num">20</span><span>单待处理</span></div>
                      <div>无需新项目处理</div>
                  </div>
                  <div class="notices">
                      <h3><i class="el-icon-tickets"></i>待收款</h3>
                      <div><span class="num">20</span><span>单待处理</span></div>
                      <div>无需新项目处理</div>
                  </div>
                  <div class="notices">
                      <h3><i class="el-icon-date"></i>待收款</h3>
                      <div><span class="num">20</span><span>单待处理</span></div>
                      <div>无需新项目处理</div>
                  </div>
                  <div class="notices">
                      <h3><i class="el-icon-edit"></i>待收款</h3>
                      <div><span class="num">20</span><span>单待处理</span></div>
                      <div>无需新项目处理</div>
                  </div>
                </div>

                <div class="order_list"> 

                  <div class="list_head">
                    <div class="list_title">
                      <h5>订单管理</h5>
                      <span>最新订单列表</span>
                    </div>
                    <el-select class="list_select" v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-select class="list_select" v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>

                  <div class="lists">
                      <ul class="lists_title">
                        <li class="lists_num">#</li>
                        <li>订单编号</li>
                        <li>订单内容</li>
                        <li>订单状态</li>
                        <li>生产时间</li>
                        <li>操作人</li>
                      </ul>
                      <ul class="lists_content">
                        <li class="lists_num">1</li>
                        <li>2314345245463456</li>
                        <li>商品</li>
                        <li>代发货</li>
                        <li>2018-19-16</li>
                        <li>YYY</li>
                      </ul>
                      <ul class="lists_content">
                        <li class="lists_num">1</li>
                        <li>2314345245463456</li>
                        <li>商品</li>
                        <li>代发货</li>
                        <li>2018-19-16</li>
                        <li>YYY</li>
                      </ul>
                      <ul class="lists_content">
                        <li class="lists_num">1</li>
                        <li>2314345245463456</li>
                        <li>商品</li>
                        <li>代发货</li>
                        <li>2018-19-16</li>
                        <li>YYY</li>
                      </ul>
                      <ul class="lists_content">
                        <li class="lists_num">1</li>
                        <li>2314345245463456</li>
                        <li>商品</li>
                        <li>代发货</li>
                        <li>2018-19-16</li>
                        <li>YYY</li>
                      </ul>
                  </div>
                   

                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                  </el-pagination> 
                </div>

              </el-main>
            </el-container>
      </el-container>
</template>

<script>
import Aside from '../components/Aside.vue';
export default {
    data() {
      return {
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
       
      }
    },
    components:{
      Aside
    }
}
</script>
<style>
.order_title h5{
  font-size:16px;
  height: 30px;
    
}
.order_title span{
  font-size: 12px;
}
.order_notice{
  display: flex;
  display: -webkit-flex;
    padding-top: 20px;
}
.notices{
  width: 240px;
  justify-content: space-around;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  border:1px solid #f1f1f1;
  background: #fff;
  margin:0 120px 0 0;
}
.notices h3{
    height: 45px;
    line-height: 45px;
    margin: 5px 15px;
}
.notices div{
  height: 30px;
  line-height: 30px;
  margin: 5px 15px;
  font-size: 14px;
}
.notices i{
  width: 30px;
}
.notices span{
  height: 25px;
  line-height: 25px;
}
.notices .num{
  font-size: 26px;
  width: 45px;
  display: inline-block;
}

.order_list{
  width: 1300px;
  margin-top: 40px;
   border:1px solid #f1f1f1; 
}
.list_head{
  padding: 10px 15px;
}
.list_head .list_title{
  float:left;
 width: 890px;
}
.list_head .list_title h5{
  font-size:16px;
  height: 25px;
}
.list_head .list_title span{
  font-size:12px;
}
.list_head .list_select{
  width: 150px;
}
.lists{
  padding:20px 15px;  
 
}
.lists_title{
    color:#666;
}
.lists_title,.lists_content{
  display: flex;
  display: -webkit-flex;

}
.lists_content{
  border-bottom: 1px solid #f1f1f1;
}

.lists_title li,.lists_content li{
  float: left;
  width: 250px;
  height:45px;
  line-height: 45px;
  text-align: center;
}
.lists_title li{
  font-size: 16px;
}
.lists_content li{
  font-size: 14px;
}

.lists_title .lists_num,.lists_content .lists_num{
  width: 80px !important;
}
</style>