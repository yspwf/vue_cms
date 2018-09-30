<template>
    <div class="app">
     
         <router-view></router-view>
    </div>
</template>

<script>
 export default {
     data (){
         return {
             user:'234234'
         }
     }
 }
</script>
<style>
 *,body{
            margin: 0;
            padding: 0;
        }
a{
    color: #409EFF;
    text-decoration:none;
    display: inline-block;
}
ul,li{
    list-style: none;
    margin:0;
    padding: 0;
}
.app{
    color: #999;
}

.el-container{
    min-height: 700px;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background: #fff;
  }


</style>

