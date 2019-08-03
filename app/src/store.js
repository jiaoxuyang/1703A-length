import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import { stat } from 'fs';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    detail:[]
  },
  mutations: {
    getData(state,content){
      state.list = content
    },
    getDetail(state,id){
      state.detail = state.list.filter(item => item.id == id)
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
