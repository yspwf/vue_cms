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
                    

                     <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="文章标题">
                            <el-input v-model="formData.title"></el-input>
                        </el-form-item>

                        <el-form-item label="封面图片">
                            <p v-if="formData.path!=''">
                                <img :src="formData.path" width="50" height="50"/>
                            </p>
                              
                              <input type="file" name="file" @change="upFile" />
                        </el-form-item>
                    
                        <el-form-item label="文章内容">
                            <!--
                            <el-input type="textarea" v-model="form.desc"></el-input>
                            -->
                            <!--
                            <textarea id="simplemde"></textarea>
                            -->
                            <mavon-editor v-model="formData.content" :subfield="false" :preview="true"></mavon-editor>
                        </el-form-item>

                    </el-form>
              </el-main>
            </el-container>
      </el-container>
</template>

<script>

import Aside from '../components/Aside.vue';
import {mavonEditor} from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
    data() {
      return {
        form: {
          name: '',
          category: '',
          picture: '',
          type: [],
          desc: '',
        },
        formData:''
      }
    },
    components:{
      Aside,
      mavonEditor
    },
    created(){
        this.getContent();
    },
    methods:{
        getContent(){
            let id = this.$route.query.id;
            this.$ajax.post('http://127.0.0.1:8090/getContent',{id:id}).then((res)=>{
                console.log(res.data['0']);
                this.formData = res.data['0'];
            });
        },
        upFile(e){
          var fileData = new FormData();
         console.log(e);
         fileData.append('file', e.target.files['0']);
         this.$ajax({
           method:'POST',
           url:'http://127.0.0.1:8090/fileupload',
           data: fileData
         }).then((res)=>{
           this.formData.path = res.data.path;
         });
        }
    }
   

    
  
}
</script>
<style>
.CodeMirror {
    height: 300px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
