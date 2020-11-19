<template>
  <div class="home">
    <ul>
      <router-link v-for="item in goodsList" :key="item.id" :to="'/homeDetail?id='+item.id" tag="li">
        <p class="hone"><img :src="$preImg+item.img" alt=""></p>
        <p class="goodsname">{{item.goodsname}}</p>
        
      </router-link>
    </ul>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters({
        goodsList:'goods/list'
      })
  },
    methods:{
      ...mapActions({
        reqGoodsList:'goods/reqGoodsList',
        reqCateList:'cate/reqCateList'
      })
    },
    mounted(){
      this.reqGoodsList();
      this.reqCateList();
    }
}
</script>

<style scoped>
ul{
  background: #fff;
}
    li{
      margin-top: 20px;
      display: flex;
      height: 2.5rem;
    }
   .hone img{
      width: 2.5rem;
      height: 2.5rem;
    }
   .home .goodsname{
      margin-top: 1rem;
      margin-left: 30px;
      font-size: 30px;
    }
</style>