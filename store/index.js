import {createStore} from "vuex"

const state = {
    user: null,
    token: null
}
const getters = {
    getToken: (state)=>{
        return state.token
    }
}

const mutations = {
    setUser(state,user){
        state.user = user
    },

    setToken(state, token){
        state.token = token
  },
  logoutUser(state){
       state.user = null
  }
}

const store = createStore({
    state,
    mutations,
    getters
})

export default store



// import { createStore } from "vuex";

// export default createStore({
//     state: {
//         user : null,
//         token: null,
//     },
//     mutations: {
//         setUser(state, user){
//             state.user = user
//         },
//         setToken(state, token){
//             state.token = token
//         },
//         logoutUser(state){
//             state.user = null
//         }
//     },
//     getters: {
//         getToken: state =>{
//             return state.token
//         }
//     },
   
// })