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
  show:false,
  city:''
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
    state.dist = obj.dist;
    state.room = obj.room;
    state.travel = obj.travel;
    state.seen = obj.seen;
  },
  changeShow(state,show){
    state.show = show;
  },
  changeList(state,obj){
    state.zhutilsit = state.zhutilsit.concat(obj.listtemp);
  },
  changeCity(state,city){
    state.city = city;
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
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
