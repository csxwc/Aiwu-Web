import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//要设置的全局访问的state对象
  zhutilsit:[
  ],
  price:50,
  dist:50,
  room:50,
  travel:50,
  seen:50,
  show:false
  //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
  getZhutilist(){
    return state.zhutilsit
  },
  getPrice(){
    return state.price
  },
  getDist(){
    return state.dist
  },
  getRoom(){
    return state.room
  },
  getTravel(){
    return state.travel
  },
  getSeen(){
    return state.seen
  },
  getShow(){
    return state.show
  }
};
const mutations = {
  changeAll(state,list,price,dist,room,travel,seen){
    state.zhutilsit = state.zhutilsit.concat(list);
    state.price = price;
    state.dist = dist;
    state.room = room;
    state.travel = travel;
    state.seen = seen;
  },
  changeShow(state,show){
    state.show = show;
  }
};
const actions = {
  changeAllFooter(context,list,price,dist,room,travel,see){
    context.commit('changeAll',list,price,dist,room,travel,see)
  },
  changeShowFooter(context,show){
    context.commit('changeShow',show)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
