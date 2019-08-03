import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import { stat } from 'fs';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    getData(state,content){
      state.list = content
    }
  },
  actions: {
    getList({commit}){
      axios.get("/api/list").then(res=>{
        commit("getData",res.data.data)
      })
    }
  }
})
