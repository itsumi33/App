import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import seckill from './moudle/seckill';
import goods from './moudle/goods'
import cate from './moudle/cate'
import login from './moudle/login'
import cagoods from './moudle/cagoods'
export default new Vuex.Store({
    modules:{
        seckill,
        goods,
        cate,
        login,
        cagoods
    }
})