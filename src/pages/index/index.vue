<template>
    <div class="index">
         
        <div class="head">
            <h1>小U商城</h1>
            <input type="text" placeholder="寻找商品">
        </div>
        <router-view/>
      <div class="foot">
          <router-link to = '/index/home' tag = 'li' active-class = 'active'>首页</router-link>
          <router-link to = '/index/classify' tag = 'li' active-class = 'active'>分类</router-link>
          <router-link to = '/index/shopcar' tag = 'li' active-class = 'active'>购物车</router-link>
          <router-link to = '/index/mine' tag = 'li' active-class = 'active'>我的</router-link>
      </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
    font-size: 50px;
}
    .index{
        position: relative;
        width: 100vw;
        height: 100vh;
    }
    .head{
        background: #fff;
        line-height: 1.2rem;
        width: 100%;
        height: 1.2rem;
        display: flex;
        justify-content: space-around;
    }
    .head input{
        margin-top: 0.25rem;
        text-align: center;
        width: 2rem;
        height: 0.6rem;
        background: #888;
        border-radius: 0.2rem;
    }
    .foot{
        /* position: absolute;
        bottom: 0;
        left: 0; */
        height: 1.0rem;
        line-height: 1.0rem;
        width: 100%;
        background: #fff;
        font-size: 0.3rem;
        display: flex;
        justify-content: space-evenly;
    }
    .active{
        color: #ff6700;
    }
</style>