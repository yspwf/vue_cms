<template>
 
            <el-aside width="200px">
                <el-menu :default-openeds="['1']">
                <el-submenu index="1">
                    
                    <template slot="title"><i class="el-icon-message"></i>文章管理</template>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            
                            <router-link to="/article">文章管理</router-link>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                           
                            <router-link to="/articleAdd">文章添加</router-link>
                        </el-menu-item>
                         <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                           
                            <router-link to="/test">测试</router-link>
                        </el-menu-item>
                  
                    
                    
                </el-submenu>

                <el-submenu index="1">
                    
                    <template slot="title"><i class="el-icon-message"></i>订单管理</template>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <router-link to="/collection">代收款</router-link>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <router-link to="/data">数据统计</router-link>
                        </el-menu-item>
                        
                  
                    
                    
                </el-submenu>

                <el-submenu index="1">
                    
                    <template slot="title"><i class="el-icon-message"></i>基本设置</template>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            
                            <router-link to="/article">网站设置</router-link>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                           
                            <router-link to="/articleAdd">轮播管理</router-link>
                        </el-menu-item>
                         <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                           
                            <router-link to="/test">单页管理</router-link>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                           
                            <router-link to="/test">栏目管理</router-link>
                        </el-menu-item>
                  
                    
                    
                </el-submenu>
                </el-menu>
            </el-aside>
</template>
