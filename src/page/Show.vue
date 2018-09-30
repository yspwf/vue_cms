<template>
      <!--
      <mavon-editor v-html="html" :subfield="false" :defaultOpen="defaultData"  :toolbarsFlag="false" :boxShadow="false" />
      -->
      <div class="content">
            <mavon-editor  v-html="html" ></mavon-editor>
      </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import marked from 'marked';
export default {
  data(){
    return {
        html:'',
        defaultData: "preview"
    }
  },
  components:{
      mavonEditor
  },
  created(){
    this.getContent();
  },
  methods:{
    getContent(){
      this.$ajax.post('http://127.0.0.1:8090/getContent',{id:8}).then((res)=>{
        console.log(res);
        //this.html = res.data['0'].content;
        let highlight_code = marked(res.data['0'].content)
         this.html = highlight_code; 
      });
    }
  }
}
</script>


<style>
.content{
    width:1200px;
    height: auto;
    margin: 20px auto;
    min-height: 500px;
}

</style>