import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
    path :"/",
    component: ()=> import ("./views/home/"),
    children:[{
      path:"/list",
      component:()=> import("./views/list/")
    },{
      path:"/classfy",
      component:()=> import("./views/classfy/")
    },{
      path:"/vip",
      component:()=> import("./views/vip/")
    },{
      path:"/car",
      component:()=> import("./views/car/")
    },{
      path:"/my",
      component:()=> import("./views/my/")
    }]
    },
    {
      path:"/detail:id",
      component:()=> import("./views/detail/")
    }
  ]
})
