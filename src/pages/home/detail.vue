<template>
  <div class="body">
      <div class="head">
          商品详情
      </div>
      <div class="con">
          <div class="img">
              <img :src="$preImg+list.img" alt="">
        </div>
              <p class="goodsname">{{list.goodsname}}</p>
              <div class="price">
                  <span class="pp">￥{{list.price}}</span>
                  <span class="hot">{{list.ishot=="1"?'热卖':''}}</span>
                  <span class="hot">{{list.isnew=="1"?'新品':''}}</span>
              </div>
              <p class="del">￥{{list.market_price}}</p>
      </div>
      <div class="foot">
          <div class="car" @click="addcar">加入购物车</div>
      </div>
      <div class="show" v-if="isShow">
          <div class="con">
              <div class="top">
                  <img :src="$preImg+list.img" alt="">
                    <p>{{list.goodsname}}</p>
              </div>
              <p class="specsname">{{list.specsname}}</p>
              <span v-for="item in specsattr" :key="item">
                  {{item}}
              </span>
          </div>
      </div>
  </div>
</template>

<script>
import {reGoodsInfo} from '../../util/request'
export default {
    data(){
        return{
            list:[],
            specsattr:[],
            isShow:false
        }
    },
    methods:{
        addcar(){
            this.isShow =!this.isShow
        }
    },
    mounted(){
        reGoodsInfo(this.$route.query.id).then(res=>{
            console.log(res);
            this.list = res.data.list[0]
            this.specsattr = JSON.parse(this.list.specsattr);
            console.log(this.specsattr);
            // console.log(this.list);
        })
    }
}
</script>

<style scoped>
.body{
    position: relative;
    height: 100vh;
    width: 100vw;
    background: #fff;
}
    .head{
        height: 60px;
        line-height: 60px;
        width: 100%;
        font-size: 30px;
        text-align: center;
        background: orange;
        color: #fff;
    }
    .con{
        width: 100vw;
        /* height: 100vh; */
    }
    .img{
        width: 100%;
    }
   .img img{
        width: 100%;
        height:200px;
    }
   .con .goodsname{
        width: 100%;
        font-size: 20px;
        text-indent: 1em;
        height: 40px;
        line-height: 40px;
        margin: 15px 0px;
    }
    .price{
        text-indent: 1em;
        font-size: 18px;
    }
    .hot{
        text-indent: 0em;
        margin-left: 10px;
        display: inline-block;
        width: 60px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border: 1px solid orange;
        color: orange;
    }
    .pp{
        color: #ff6700;
    }
    .del{
        height: 40px;
        line-height: 40px;
        text-decoration: line-through;
        text-indent: 1em;
    }
    .body .foot{
        position: absolute;
        bottom: 0;
        left: 0;
        background: #fff;
        width: 100%;
        height: 50px;
    }
    .foot .car{
        font-size: 22px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        width: 35%;
        float: right;
        height: 50px;
        background: orange;
    }
    .show{
        width: 100vw;
        height: 100vh;
        position: absolute;
       bottom: 50px;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    .show .con{
        padding-left: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 42%;
        background: #fff;
    }
    .show .con img{
        margin: 20px 0px;
        width: 100px;
        height: 100px;
    }
    .top{
        
        display: flex;
    }
    .top p{
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        margin-left: 30px;
        margin-top: 25px;
    }
    .con .specsname{
        font-size: 30px;
        margin-bottom: 20px;
    }
    .con span{
        display: inline-block;
        padding: 6px 8px;
        border: 1px solid orange;
        font-size: 18px;
        margin-left: 15px;
        border-radius: 5px;
    }
</style>