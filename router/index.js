import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js"
const routes = [
    {
        name: "HomePage",
        path: "/home",
        props: true,
        component: () => import("../views/HomePage.vue")
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("../views/LoginPage.vue")
    },
    {
      name: "RegisterPage",
      path: "/register",
      component: () => import("../views/RegisterPage.vue")
  },
    {
        name: "NotFound",
        path: "/:catchAll(.*)",
        component: () => import("../views/NotFound.vue")
    }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach((to,_,next) => {
    const authRequiredRoutes = ["HomePage"];
    const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
    const isAuth = store.getters.getToken
if(authNotRequiredRoutes.indexOf(to.name)>-1 && isAuth) next(false)
if(authRequiredRoutes.indexOf(to.name)>-1) {
    if(isAuth) next()
    else router.push({name: "LoginPage"})
}else{
    next()
}
})

export default router;