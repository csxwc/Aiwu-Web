import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//要设置的全局访问的state对象
  zhutilsit:[
  ],
  price:50,
  hot:50,
  room:50,
  comfort:50,
  show:false,
  city:'',
  check:false,
  obj:{
    city:'成都',
  }
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
    return state.hot
  },
  getRoom(){
    return state.room
  },
  getTravel(){
    return state.comfort
  },
  getShow(){
    return state.show
  },
  getCity(){
    return state.city
  }
};
const mutations = {
  changeAll(state,obj){
    state.zhutilsit = [];
    state.zhutilsit = state.zhutilsit.concat(obj.list);
    state.price = obj.price;
    state.hot = obj.hot;
    state.room = obj.room;
    state.comfort = obj.comfort;
  },
  changeShow(state,show){
    state.show = show;
  },
  changeList(state,obj){
    state.zhutilsit = state.zhutilsit.concat(obj.listtemp);
  },
  changeCity(state,city){
    state.city = city;
  },
  changeCheck(state,check){
    state.check = check;
  }
};
const actions = {
  changeAllFooter(context,obj){
    context.commit('changeAll',obj)
  },
  changeListFooter(context,obj){
    context.commit('changeList',obj)
  },
  changeShowFooter(context,show){
    context.commit('changeShow',show)
  },
  changeCityFooter(context,city){
    context.commit('changeCity',city)
  },
  changeCheckFooter(context,check){
    context.commit('changeCheck',check)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
