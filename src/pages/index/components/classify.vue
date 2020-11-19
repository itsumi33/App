<template>
    <div class="box">
       <div class="left-box">
           <ul>
               <li class="left" v-for="(item,index) in list" :key="item.id"  @click="get(index)">{{item.catename}}</li>
           </ul>
       </div>
       <div class="right-box">
           <ul>
               <router-link v-for="item in rightList" :key="item.id" tag='li' :to="'/cateDetail?id='+item.id">
                   <p class="title">{{item.catename}}</p>
                   <p><img :src="$preImg+item.img" alt=""></p>
               </router-link>
           </ul>
       </div>
    </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            rightList:[]
        }
    },
    computed:{
        ...mapGetters({
            list:'cate/list'
        })
    },
    methods:{
        ...mapActions({
            reqCateList:'cate/reqCateList'
        }),
        get(index){     
            this.rightList = this.list[index].children;
            // console.log(this.rightList);
        }
    },
    mounted(){
        this.reqCateList();
        this.rightList = this.list[0].children;
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        display: flex;
    }
    .left-box{
        height: 100vh;
        width: 100px;
    }
    .left{
        height: 100px;
        line-height: 100px;
        font-size: 22px;
        text-align: center;
    }
    .active{
        background: #fff;
        color: #ff6700;
    }
    .right-box li{
         width: 100px;
        height: 100px;
        margin: 20px;
        position: relative;
    }
    img{
        width: 100px;
        height: 100px;
    }
    .right-box ul{
        display: flex;
        width: 300px;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    .right-box .title{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: lightskyblue;
        color: #fff;
    }
</style>