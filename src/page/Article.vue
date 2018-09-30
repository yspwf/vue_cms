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
                    <el-table  ref="multipleTable" :data="tableData3" tooltip-effect="dark"  style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        
                         <el-table-column prop="title" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="time" label="地址" :formatter="dateFormat" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column label="封面" width="120">
                          <template slot-scope="scope">
                            <img  :src="scope.row.path" alt="" style="width: 50px;height: 50px">
                          </template>
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                        
                    </el-table>
            

                <el-pagination background layout="prev, pager, next" :total="1000" class="page">
                </el-pagination>
 
                </el-main>
            </el-container>
      </el-container>
</template>

<script>
import Aside from '../components/Aside.vue';
  export default {
    data() {
      return {
        tableData3: [],
        multipleSelection: []
      }
    },
    created(){
      this.getList(); 
    },
    components:{
      Aside
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row){
        //console.log(row);
        this.$router.push({path:'/edit',query:{id:row.id}})
      },
      getList(){
        this.$ajax.get('http://127.0.0.1:8090/article').then((res)=>{
          console.log(res);
          this.tableData3 = res.data;
        })
      },
      dateFormat:function(row, column) {  
          var date = row.time;  
          if (date == undefined) {  
             return "";  
          }  
          try {
              var date = new Date(date).toISOString().
                  replace(/T/, ' ').
                  replace(/\..+/, '');
          }catch(e){
              console.log(e);
              var date = "0000-00-00 00:00:00";
          }finally{
              return date;
          }
      }  
    }
  }
</script>
<style>
.has-gutter,.el-table__row{
    font-size:14px;
}
.page{
    margin-top:50px;
}
</style>
