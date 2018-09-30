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
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    <el-form-item label="文章分类">
                         <el-select v-model="form.category" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="封面图片">
                     <p v-if="form.picture!=''">
                         <img :src="form.picture" width="50" height="50"/>
                     </p>
                      
                      <input type="file" name="file" @change="upFile" />
                    </el-form-item>

                    <el-form-item label="文章标签">
                        
                            <!--
                            <el-checkbox-group v-model="form.type">
                                <el-checkbox label="科技" name="type"></el-checkbox>
                                <el-checkbox label="IT" name="type"></el-checkbox>
                                <el-checkbox label="生活" name="type"></el-checkbox>
                                <el-checkbox label="汽车" name="type"></el-checkbox>
                            </el-checkbox-group>
                        -->
                            
                            <el-checkbox-group v-model="form.type" @change="handleTagSel">
                                    <el-checkbox v-for="tag in tags" :label="tag" :key="tag.id">{{tag.name}}</el-checkbox>
                            </el-checkbox-group>
                    </el-form-item>
    
                    <el-form-item label="文章内容">
                        <!--
                        <el-input type="textarea" v-model="form.desc"></el-input>
                        -->
                        <!--
                        <textarea id="simplemde"></textarea>
                        -->
                        <mavon-editor v-model="form.desc" :subfield="false" :preview="true"></mavon-editor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
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
        defaultData: "edit",
        form: {
          name: '',
          category: '',
          picture: '',
          type: [],
          desc: '',
        },
        tags: [
                {id:1, name:'科技'},
                {id:2, name:'生活'},
                {id:3, name:'汽车'},
                {id:4, name:'足球'}
        ],
        options: [{
          value: 1,
          label: '编程技巧'
        }, {
          value: 2,
          label: '时间管理'
        }, {
          value: 3,
          label: '个人提升'
        }, {
          value: 4,
          label: '健康知识'
        }, {
          value: 5,
          label: '飙车技巧'
        }],
        imageUrl: '',

        

       
      }
    },
    components:{
      Aside,
      mavonEditor
    },
    mounted(){
      /*
        let self = this;
        let simplemde = new SimpleMDE({
            element: document.getElementById('simplemde'),
            autofocus: true,
            autosave: true,
            previewRender:function(textplain){
                return marked(textplain,{
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            }
        });
        simplemde.codemirror.on('change', function(){
            var value = simplemde.value();
            //console.log(value);
            self.form.desc = value;
        });
        //simplemde.value('快来创建你的新博客吧~');
        */
    },
    methods: {
      onSubmit() {
          console.log(this.form);
          
        this.$ajax.post('http://127.0.0.1:8090/articleadd',this.form).then(res=>{
           console.log(res);
           if(res.data.success==true){
                this.form.name='';
                this.form.category='';
                this.form.picture='';
                this.form.type=[];
                this.form.desc='';
           }
        })
         
      },
      handleTagSel() {
          console.log();
          /*
            if(this.form.tags.indexOf(tag) != -1){
                this.form.tags.splice(this.form.tags.indexOf(tag), 1);
               
            }
            */
     },
    upFile:function(e){
        var formdata = new FormData();
        console.log(e.target.files);
        formdata.append('file', e.target.files[0]);
        console.log(formdata);

        this.$ajax({
            method: 'POST',
            url: 'http://127.0.0.1:8090/fileupload',
            data: formdata,
        }).then((res)=>{
            console.log(res);
            this.form.picture = res.data.path;
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