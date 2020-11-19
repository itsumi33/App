<template>
  <div>111</div>
</template>

<script>
import {reGoodsInfo} from '../../util/request'
import {reCaGoodsList} from '../../util/request'
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        ...mapActions({
            reqCaGoodsList:'cagoods/reqCaGoodsList'
        })
    },
    mounted(){
        reCaGoodsList(this.$route.query.id).then(res=>{
            console.log(res);
        })
        console.log(this.$route);
    }
}
</script>

<style>

</style>